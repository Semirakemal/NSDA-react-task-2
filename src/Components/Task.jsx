
import React, { useState, useEffect } from "react";

function Task() {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem("tasks");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  
  const addTask = () => {
    const trimmed = newTask.trim();
    if (!trimmed) return;
    setTasks((prev) => [...prev, { text: trimmed, completed: false }]);
    setNewTask("");
  };

  
  const toggleComplete = (index) => {
    const taskToComplete = tasks[index];
    const stored = JSON.parse(localStorage.getItem("completedTasks")) || [];
    localStorage.setItem(
      "completedTasks",
      JSON.stringify([...stored, { ...taskToComplete, completed: true }])
    );
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-green-800 mb-6">📝 Task Manager</h2>

      
      <div className="flex flex-col md:flex-row gap-3 mb-8 w-full max-w-lg">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-1 p-3 rounded-xl border border-green-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          type="button"
          onClick={addTask}
          className="bg-green-600 text-white px-5 py-3 rounded-xl shadow-md hover:bg-green-700 transition-all"
        >
          Add
        </button>
      </div>

      
      {tasks.length === 0 ? (
        <p className="text-gray-600 italic text-lg">🌿 Start by adding your first task!</p>
      ) : (
        <ul className="w-full max-w-lg space-y-3">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white border border-green-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <span className="text-green-800 font-medium">{t.text}</span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => toggleComplete(index)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition"
                >
                  Complete
                </button>
                <button
                  type="button"
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Task;