import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-green-700 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
    
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-300 hover:text-white transition"
        >
          🕌 Islamic To Do List
        </Link>

        
        <ul className="flex gap-6 text-lg">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-200"
              }
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-200"
              }
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
               to="/completed"
               className={({ isActive }) =>
               isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"
           }
>
  Completed
</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;