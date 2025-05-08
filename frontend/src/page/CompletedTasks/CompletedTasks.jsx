import React, { useEffect, useState } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";
import NoTasks from "../../components/NoTasks/NoTasks";

const CompletedTasks = ({ allTasks, getData, setAllTasks }) => {
  useEffect(() => {
    getData("http://localhost:2000/tasks/6819158080f39f9b75d3f7e3/completed");
  }, []);

  return (
    <div className="px-5">
      <h3 className="text-center font-bold text-2xl mt-2 mb-11">
        Completed Tasks
      </h3>

      <TaskCard setAllTasks={setAllTasks} allTasks={allTasks} />
    </div>
  );
};

export default CompletedTasks;
