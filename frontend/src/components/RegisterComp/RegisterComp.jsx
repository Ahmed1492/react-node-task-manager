import axios from "axios";
import React, { useState } from "react";

const RegisterComp = ({ navigate, setMode }) => {
  const [userRegister, setUserRegister] = useState({
    name: "",
    age: null,
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const collectDate = (e) => {
    setError(null);
    const { name, value } = e.target;
    setUserRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleregister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2000/register",
        userRegister
      );

      console.log(response);

      // Optional: update auth state in parent component
      // if (onLogin) onLogin();

      setMode("login");
    } catch (error) {
      const message = error?.response?.data?.message || "Login failed";
      setError(message);
      console.error("Login error:", message);
    }
  };
  return (
    <div className="flex  flex-col-reverse xl:flex-row mt-[2rem] py-[2rem] w-full   items-center">
      <div className=" w-[100%]   xl:w-[50%]  shadow-2xl py-[2rem] h-full flex flex-col justify-center">
        <div className="flex flex-col gap-4 w-full max-w-xl mx-auto">
          <h2 className="text-2xl  font-semibold  mb-6">Register</h2>
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              onChange={collectDate}
              name="name"
              className="bg-slate-200 py-2 px-3 rounded-md text-sm w-full text-gray-700"
              type="text"
              placeholder="Enter your Name..."
            />
          </div>
          {/* AGE */}
          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <input
              onChange={collectDate}
              name="age"
              className="bg-slate-200 py-2 px-3 rounded-md text-sm w-full text-gray-700"
              type="text"
              placeholder="Enter Your Age.."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              onChange={collectDate}
              name="email"
              className="bg-slate-200 py-2 px-3 rounded-md text-sm w-full text-gray-700"
              type="text"
              placeholder="Enter Your Email.."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              onChange={collectDate}
              name="password"
              className="bg-slate-200 py-2 px-3 rounded-md text-sm w-full text-gray-700"
              type="text"
              placeholder="Enter Your Password.."
            />
          </div>

          <button
            onClick={handleregister}
            className="bg-[#FABA01] mt-5 py-2 rounded-lg text-white"
          >
            Add
          </button>
        </div>
      </div>
      <div className=" w-[18rem]  xl:w-[50%] h-full">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="/bg1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default RegisterComp;
