import React, { useEffect } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";
import NoTasks from "../../components/NoTasks/NoTasks";
import { userTokenId } from "../../components/DecodeToken/DecodeToken";
import { jwtDecode } from "jwt-decode";

const DeployedTasks = ({ allTasks, getData, setAllTasks }) => {
  const decodeToken = () => {
    try {
      let token = localStorage.getItem("userTasksToken");
      if (token) {
        const decoded = jwtDecode(token);
        return decoded;
      }
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

  useEffect(() => {
    getData(`http://localhost:2000/tasks/${decodeToken().id}/deployed`);
  }, []);

  return (
    <div>
      <h3 className="text-center  bg-[#D8B4FE] py-3 px-9 rounded  w-max m-auto text-white font-bold text-2xl mt-2 mb-11">
        Deployed Tasks
      </h3>

      <TaskCard setAllTasks={setAllTasks} allTasks={allTasks} />
    </div>
  );
};

export default DeployedTasks;
