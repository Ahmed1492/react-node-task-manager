import React, { useEffect } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";

const PendingTasks = ({ allTasks, getData }) => {
  useEffect(() => {
    getData("http://localhost:2000/tasks/6819158080f39f9b75d3f7e3/pending");
  }, []);
  return (
    <div>
      <h3 className="text-center font-bold text-2xl mt-2 mb-11">
        Pending Tasks
      </h3>

      <TaskCard allTasks={allTasks} />
    </div>
  );
};

export default PendingTasks;
