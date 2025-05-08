import React, { useEffect } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";
import NoTasks from "../../components/NoTasks/NoTasks";

const DeferredTasks = ({ allTasks, getData ,setAllTasks }) => {
  useEffect(() => {
    getData("http://localhost:2000/tasks/6819158080f39f9b75d3f7e3/deferred");
  }, []);

  return (
    <div>
      <h3 className="text-center font-bold text-2xl mt-2 mb-11">
        Deferred Tasks
      </h3>

      <TaskCard setAllTasks={setAllTasks} allTasks={allTasks} />
    </div>
  );
};

export default DeferredTasks;
