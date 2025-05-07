import React, { useEffect, useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import axios from "axios";

export const userId = "6819158080f39f9b75d3f7e3";
const TaskBoard = ({ allTasks, setAllTasks, getData }) => {
  useEffect(() => {
    getData("http://localhost:2000/tasks/6819158080f39f9b75d3f7e3/");
  }, []);
  return (
    <div className="px-5">
      <h3 className="text-center font-bold text-2xl mt-2 mb-11">Task Board</h3>

      <div className="w-full">
        <TaskCard allTasks={allTasks} />
      </div>
    </div>
  );
};

export default TaskBoard;
