
import React from 'react';

function Card({ title, dueDate, priority, completed }) {
  return (
    <div
      className={`w-full max-w-md p-5 rounded-2xl shadow-md transition-transform hover:scale-105
        ${completed ? "bg-green-50 border border-green-400" : "bg-white border border-green-200"}`}
    >
    
      <h2 className="text-xl font-bold text-green-700">{title}</h2>

      
      <p className="text-gray-600 mt-2">{dueDate}</p>

      
      <div className="mt-4 flex justify-between items-center">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium
            ${priority === "low"
              ? "bg-red-200 text-red-700"
              : priority === "Medium"
              ? "bg-yellow-200 text-yellow-700"
              : "bg-green-200 text-green-700"}`}
        >
          {priority || "High"}
        </span>

        {completed && (
          <span className="text-green-600 font-semibold">✅ Done</span>
        )}
      </div>
    </div>
  );
}

export default Card;