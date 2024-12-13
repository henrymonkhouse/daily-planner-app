import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../../assets/DailyTasks.css";

const DailyTasks = ({ tasks, onTaskToggle }) => {
  console.log("tasks", tasks);

  return (
    <div className="daily-tasks">
      <h2>Daily tasks</h2>
      {tasks.map((task) => {
        console.log("task", task._id);

        return (
          <motion.div
            key={task._id}
            className="task-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            layout
          >
            <motion.div
              className={`checkbox ${task.completed ? "checked" : ""}`}
              onClick={() => onTaskToggle(task._id)}
              whileTap={{ scale: 0.9 }} // Add animation on click
            >
              {task.completed && (
                <motion.span
                  className="checkmark"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ✓
                </motion.span>
              )}
            </motion.div>
            <div className="task-text-container">
              <span
                className={`task-text ${
                  task.completed ? "task-completed" : ""
                }`}
              >
                {task.text}
              </span>
              {task.completed && (
                <span className="task-time"> {task.time}</span>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DailyTasks;
