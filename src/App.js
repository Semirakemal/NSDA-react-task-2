import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Task from "./Components/Task";
import Card from "./Components/Card";
import Completed from "./Components/Completed";


function App() {
  return (
    <Router>
      <Nav />
      <div className="p-6">
        <Routes>
          
          <Route path="/" element={<Home />} />

          
          <Route path="/tasks" element={<Task />} />
         <Route path="/completed" element={<Completed />} />


          
          <Route
            path="/explore"
            element={
              <div className="min-h-screen bg-green-50 flex flex-col items-center p-10 space-y-6">
                <Card
                  title="Read Surah Al-Kahf"
                  dueDate="Due: Friday"
                  priority="High"
                  completed={false}
                />
                <Card
                  title="Morning Dhikr"
                  dueDate="Due: Today"
                  priority="Low"
                  completed={true}
                />
              </div>
            }
          />

          
          <Route path="/about" element={<div>About This App</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;