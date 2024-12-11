import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlannerHeader from './PlannerHeader';
import MorningNotes from './MorningNotes';
import DailyTasks from './DailyTasks';
import HourlySchedule from './HourlySchedule';
import TomorrowNotes from './TomorrowNotes';
import Navbar from '../Navbar';
import '../../assets/Planner.css';

const Planner = () => {
    const [notes, setNotes] = useState('');
    const [tasks, setTasks] = useState([]);
    const [schedule, setSchedule] = useState({});
    const [tomorrowNotes, setTomorrowNotes] = useState('');
    const [savedNotes, setSavedNotes] = useState('');

    const today = new Date().toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-GB'); // Yesterday's date

    // Load planner data
    useEffect(() => {
        const loadPlannerData = async () => {
            try {
                console.log(`Fetching planner data for today: ${today}`);
                // Fetch today's data
                const { data } = await axios.get(`http://localhost:5001/api/planner/${today}`); // Full URL
                setNotes(data.morningNotes || '');
                setTasks(data.dailyTasks || []);
                setSchedule(data.hourlySchedule || {});
                setTomorrowNotes(data.tomorrowNotes || '');

                // Fetch yesterday's data
                const yesterdayData = await axios.get(`http://localhost:5001/api/planner/${yesterday}`); // Full URL
                setSavedNotes(yesterdayData.data?.tomorrowNotes || '');
            } catch (err) {
                console.error('Error loading planner data:', err.message);
            }
        };

        loadPlannerData();
    }, [today, yesterday]);

    // Save planner data
    const savePlannerData = async () => {
        try {
            console.log('Saving planner data with payload:', {
                date: today,
                morningNotes: notes,
                dailyTasks: tasks,
                hourlySchedule: schedule,
                tomorrowNotes,
            });
            await axios.post('http://localhost:5001/api/planner/save', { // Full URL
                date: today,
                morningNotes: notes,
                dailyTasks: tasks,
                hourlySchedule: schedule,
                tomorrowNotes,
            });
            console.log('Planner data saved successfully!');
        } catch (err) {
            console.error('Error saving planner data:', err.message);
        }
    };

    const handleTaskToggle = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleSaveNote = (note) => {
        const newTask = { id: tasks.length + 1, text: note, completed: false };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleScheduleChange = (hour, value) => {
        setSchedule((prevSchedule) => ({ ...prevSchedule, [hour]: value }));
    };

    const handleSaveTomorrowNotes = () => {
        savePlannerData();
        setTomorrowNotes('');
    };

    return (
        <div className="planner-layout">
            <Navbar onSubmit={savePlannerData} savedNotes={savedNotes} />
            <PlannerHeader />
            <HourlySchedule schedule={schedule} onScheduleChange={handleScheduleChange} />
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
