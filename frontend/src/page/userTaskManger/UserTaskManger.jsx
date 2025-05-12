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
import UpdateTask from "../UpdateTask/UpdateTask";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {} from "../../components/DecodeToken/DecodeToken";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

const UserTaskManger = () => {
  const [allTasks, setAllTasks] = useState([]);

  const getData = async (url) => {
    try {
      let myResponse = await axios.get(url);
      console.log(
        "response : ",
        myResponse.data.result ? myResponse.data.result : myResponse.data
      );
      setAllTasks(myResponse.data.result);
    } catch (error) {
      setAllTasks(error);
    }
  };

  return (
    <div className="flex    px-2">
      <>
        <div className="w-[55%]  md:w-[40%] mt-7 lg:w-[30%]  xl:w-[20%]">
          <LeftBar />
        </div>
        <div className=" w-[100%] min-h-[93vh]   lg:w-[80%] bg-white h-full px-3 mt-7  ">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <TaskBoard
                    getData={getData}
                    allTasks={allTasks}
                    setAllTasks={setAllTasks}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addTask"
              element={
                <ProtectedRoute>
                  {" "}
                  <AddTask />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              path="/completedTasks"
              element={
                <ProtectedRoute>
                  <CompletedTasks
                    getData={getData}
                    setAllTasks={setAllTasks}
                    allTasks={allTasks}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/deferredTasks"
              element={
                <ProtectedRoute>
                  <DeferredTasks
                    getData={getData}
                    setAllTasks={setAllTasks}
                    allTasks={allTasks}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/deployedTasks"
              element={
                <ProtectedRoute>
                  <DeployedTasks
                    getData={getData}
                    setAllTasks={setAllTasks}
                    allTasks={allTasks}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/inProgressTasks"
              element={
                <ProtectedRoute>
                  <InProgressTasks
                    allTasks={allTasks}
                    setAllTasks={setAllTasks}
                    getData={getData}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pendingTasks"
              element={
                <ProtectedRoute>
                  <PendingTasks
                    getData={getData}
                    setAllTasks={setAllTasks}
                    allTasks={allTasks}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateTask"
              element={
                <ProtectedRoute>
                  <UpdateTask
                    getData={getData}
                    setAllTasks={setAllTasks}
                    allTasks={allTasks}
                  />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="*" element={<div>not found</div>} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </>
    </div>
  );
};

export default UserTaskManger;
