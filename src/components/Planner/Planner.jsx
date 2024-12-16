import React, { useState, useEffect } from "react";
import axios from "axios";
import PlannerHeader from "./PlannerHeader.jsx";
import MorningNotes from "./MorningNotes.jsx";
import DailyTasks from "./DailyTasks.jsx";
import HourlySchedule from "./HourlySchedule.jsx";
import TomorrowNotes from "./TomorrowNotes.jsx";
import Navbar from "../Navbar.jsx";
import "../../assets/Planner.css";

const normalizeDate = (date) => {
  console.log("date", date);

  const [day, month, year] = date.split("/");
  return `${year}-${month}-${day}`;
};

const Planner = () => {
  const [notes, setNotes] = useState("");
  const [tasks, setTasks] = useState([]);
  const [schedule, setSchedule] = useState({});
  const [tomorrowNotes, setTomorrowNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState("");

  const today = new Date().toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
  const yesterday = new Date(Date.now() - 86400000).toLocaleDateString("en-GB"); // Yesterday's date

  console.log("notes", notes);

  // Load planner data
  useEffect(() => {
    const loadPlannerData = async () => {
      const newToday = normalizeDate(today);
      const newYesterday = normalizeDate(yesterday);

      console.log("newToday", newToday);
      console.log("newYesterday", newYesterday);

      try {
        console.log(`Fetching planner data for today: ${newToday}`);
        // Fetch today's data
        const { data } = await axios.get(
          `http://localhost:5001/api/planner/${newToday}`
        ); // Full URL
        setNotes(data.morningNotes || "");
        setTasks(data.dailyTasks || []);
        setSchedule(data.hourlySchedule || {});
        setTomorrowNotes(data.tomorrowNotes || "");

        // Fetch yesterday's data
        const yesterdayData = await axios.get(
          `http://localhost:5001/api/planner/${newYesterday}`
        ); // Full URL
        setSavedNotes(yesterdayData.data?.tomorrowNotes || "");
      } catch (err) {
        console.error("Error loading planner data:", err.message);
      }
    };

    loadPlannerData();
  }, [today, yesterday]);

  // Save planner data
  const savePlannerData = async () => {
    try {
      console.log("Saving planner data with payload:", {
        date: today,
        morningNotes: notes,
        dailyTasks: tasks,
        hourlySchedule: schedule,
        tomorrowNotes,
      });
      await axios.post("http://localhost:5001/api/planner/save", {
        // Full URL
        date: today,
        morningNotes: notes,
        dailyTasks: tasks,
        hourlySchedule: schedule,
        tomorrowNotes,
      });
      console.log("Planner data saved successfully!");
    } catch (err) {
      console.error("Error saving planner data:", err.message);
    }
  };

  const handleTaskToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleSaveNote = (note) => {
    const newTask = { _id: tasks.length + 1, text: note, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleScheduleChange = (hour, value) => {
    setSchedule((prevSchedule) => ({ ...prevSchedule, [hour]: value }));
  };

  const handleSaveTomorrowNotes = () => {
    savePlannerData();
    setTomorrowNotes("");
  };

  return (
    <div className="planner-layout">
      <Navbar onSubmit={savePlannerData} savedNotes={savedNotes} />
      <PlannerHeader />
      <HourlySchedule
        schedule={schedule}
        onScheduleChange={handleScheduleChange}
        onSubmit={savePlannerData}
      />
      <MorningNotes notes={notes} setNotes={setNotes} onSave={handleSaveNote} />
      <DailyTasks tasks={tasks} onTaskToggle={handleTaskToggle} />
      <TomorrowNotes
        tomorrowNotes={tomorrowNotes}
        setTomorrowNotes={setTomorrowNotes}
        onSave={handleSaveTomorrowNotes}
      />
    </div>
  );
};

export default Planner;
