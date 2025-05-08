import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginComp from "../../components/Login/Login";
import Register from "../Register/Register";
import RegisterComp from "../../components/RegisterComp/RegisterComp";

const Login = ({ onLogin }) => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [mode, setMode] = useState("register");
  const navigate = useNavigate();

  const collectDate = (e) => {
    setError(null);
    const { name, value } = e.target;
    setUserLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2000/login",
        userLogin
      );
      const { token } = response.data;
      localStorage.setItem("userTasksToken", token);

      // Optional: update auth state in parent component
      if (onLogin) onLogin();

      // Redirect after login
      navigate("/");
    } catch (error) {
      const message = error?.response?.data?.message || "Login failed";
      setError(message);
      console.error("Login error:", message);
    }
  };

  if (mode === "login")
    return (
      <LoginComp
        error={error}
        collectDate={collectDate}
        handleLogin={handleLogin}
      />
    );
  if (mode === "register")
    return (
      <RegisterComp
        navigate={navigate}
        // handleregister={handleregister}
        // error={error}
        // collectDate={collectDate}
        // onLogin={onLogin}
        setMode={setMode}
      />
    );
};

export default Login;
