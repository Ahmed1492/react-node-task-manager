import React, { useEffect, useState } from 'react';
import UserTaskManger from './page/userTaskManger/UserTaskManger';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/Login/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkLogin = () => {
    const token = localStorage.getItem("userTasksToken");
    return !!token;
  };

  useEffect(() => {
    setIsAuthenticated(checkLogin());
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // update after login
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLoginSuccess} />;
  }

  return (
    <div className='w-[80%] m-auto shadow-2xl'>
      <UserTaskManger checkLogin={checkLogin} />
    </div>
  );
};

export default App;
