import React, { useEffect, useState } from "react";
import LeftBar from "../../components/LeftBar/LeftBar";
import TaskBoard, { userId } from "../../components/TaskBoard/TaskBoard";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import AddTask from "../AddTask/AddTask";
import CompletedTasks from "../CompletedTasks/CompletedTasks";
import DeferredTasks from "../DeferredTasks/DeferredTasks";
import DeployedTasks from "../DeployedTasks/DeployedTasks";
import InProgressTasks from "../InProgressTasks/InProgressTasks";
import PendingTasks from "../PendingTasks/PendingTasks";
import axios from "axios";

const UserTaskManger = () => {
  const [allTasks, setAllTasks] = useState([]);

  const link = `http://localhost:2000/tasks/${userId}`;
  const getData = async (url) => {
    try {
      let myResponse = await axios.get(url);
      console.log("response : ", myResponse.data.result);
      setAllTasks(myResponse.data.result);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    // getData(link);
  }, []);
  return (
    <div className="flex mt-[4rem] ">
      <BrowserRouter>
        <div className="w-[55%] md:w-[40%] lg:w-[15rem]">
          <LeftBar />
        </div>
        <div className=" w-[100%] lg:w-[80%] bg-white h-full px-3 mt-7 rounded-lg ">
          <Routes>
            <Route
              path="/"
              element={
                <TaskBoard
                  getData={getData}
                  allTasks={allTasks}
                  setAllTasks={setAllTasks}
                />
              }
            />
            <Route path="/addTask" element={<AddTask />} />
            <Route
              path="/completedTasks"
              element={
                <CompletedTasks
                  getData={getData}
                  allTasks={allTasks}
                  setAllTasks={setAllTasks}
                />
              }
            />
            <Route
              path="/deferredTasks"
              element={
                <DeferredTasks
                  getData={getData}
                  allTasks={allTasks}
                  setAllTasks={setAllTasks}
                />
              }
            />
            <Route
              path="/deployedTasks"
              element={
                <DeployedTasks
                  getData={getData}
                  allTasks={allTasks}
                  setAllTasks={setAllTasks}
                />
              }
            />
            <Route
              path="/inProgressTasks"
              element={
                <InProgressTasks
                  allTasks={allTasks}
                  setAllTasks={setAllTasks}
                  getData={getData}
                />
              }
            />
            <Route
              path="/pendingTasks"
              element={
                <PendingTasks
                  getData={getData}
                  allTasks={allTasks}
                  setAllTasks={setAllTasks}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default UserTaskManger;
