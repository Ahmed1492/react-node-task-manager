import React from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <div className="px-4 py-3 bg-[#3F51B5] text-white rounded-md min-h-[70vh] ">
      <h3 className="text-center mb-[3rem] font-bold text-lg"> Task Manger</h3>

      <ul className="ml-8 font-semibold text-sm flex flex-col gap-6">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/completedTasks">Completed Tasks</Link>
        </li>
        <li>
          <Link to="/pendingTasks">Pending Tasks</Link>
        </li>
        <li>
          <Link to="/inProgressTasks">In Progress Tasks</Link>
        </li>
        <li>
          <Link to="/deployedTasks">Deployed Tasks</Link>
        </li>
        <li>
          <Link to="/deferredTasks">Deferred Tasks</Link>
        </li>
        <li>
          <Link to="/addTask">Add New Tasks</Link>
        </li>
        <li>
          <Link to="/taskStars">Log Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
