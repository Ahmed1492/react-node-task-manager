import React, { useEffect, useState } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";

const CompletedTasks = ({ allTasks, getData }) => {
  useEffect(() => {
    getData("http://localhost:2000/tasks/6819158080f39f9b75d3f7e3/completed");
  }, []);
  return (
    <div className="px-5">
      <h3 className="text-center font-bold text-2xl mt-2 mb-11">
        Completed Tasks
      </h3>

      <TaskCard allTasks={allTasks} />
    </div>
  );
};

export default CompletedTasks;
