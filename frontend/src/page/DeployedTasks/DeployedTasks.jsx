import React, { useEffect } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";
import NoTasks from "../../components/NoTasks/NoTasks";

const DeployedTasks = ({ allTasks, getData , setAllTasks }) => {
  useEffect(() => {
    getData("http://localhost:2000/tasks/6819158080f39f9b75d3f7e3/deployed");
  }, []);
  console.log("====================================");
  console.log(allTasks);
  console.log("====================================");

  return (
    <div>
      <h3 className="text-center font-bold text-2xl mt-2 mb-11">
        Deployed Tasks
      </h3>

      <TaskCard setAllTasks={setAllTasks} allTasks={allTasks} />
    </div>
  );
};

export default DeployedTasks;
