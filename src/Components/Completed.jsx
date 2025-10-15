// src/Components/Completed.jsx
import React, { useState, useEffect } from "react";

function Completed() {
  const [completedTasks, setCompletedTasks] = useState(() => {
    try {
      const raw = localStorage.getItem("completedTasks");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  
  const deleteTask = (index) => {
    const updated = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updated);
    localStorage.setItem("completedTasks", JSON.stringify(updated));
  };

  if (completedTasks.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
        🌿 No completed tasks yet!
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-green-50">
      <h2 className="text-3xl font-bold text-green-800 mb-6">✅ Completed Tasks</h2>
      <ul className="w-full max-w-lg space-y-3">
        {completedTasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-green-100 border border-green-300 rounded-xl p-4 shadow-sm"
          >
            <span className="text-green-700 font-medium line-through">{task.text}</span>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Completed;