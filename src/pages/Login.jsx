import React, { useState, useContext } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";

const Login = () => {
  const [passwordVisible, setpasswordVisible] = useState(false);
  const Toggle = () => {
    setpasswordVisible(!passwordVisible);
  };

  const [username, setUsername] = useState("");
  const handleclick = (Event) => {
    setUsername(Event.target.value);
  };

  const navigate = useNavigate();
  // const [setName] = useContext = (Context)

  const [display, setDisplay] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(username);
    setUsername("");
    setName(username);
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <div className="bg-white text-black w-[100%] h-[100vh] flex justify-center items-center py ">
      <form
        onSubmit={handleSubmit}
        className="bg-white md:w-[40%] w-[90%] h-[70%] px-2 py-5 shadow-xl shadow-blue-800 rounded-md">
        <div className="flex flex-col justify-center items-center space-y-2 mb-10 ">
          <h1 className="text-4xl text-blue-800">Login</h1>
          <button>OR REGISTER</button>
        </div>

        <div className="flex flex-col justify-center  w-[100%]  space-y-2 px-2 mb-2">
          <label htmlFor="">Email/Username</label>
          <input
            value={username}
            onClick={handleclick}
            className="border-b-5 border border-blue-500 bg-white rounded-md h-[6vh]"
            type="email"
          />
        </div>

        <div className="flex flex-col justify-center  w-[100%]  space-y-2 px-2 mb-5">
          <label htmlFor="">Password</label>
          <div className="flex  justify-center  w-[100%]  bg-white rounded-md border-b-5 border border-blue-500 space-x-2 ">
            <input
              className=" bg-white rounded-md h-[6vh] w-[95%]"
              type={passwordVisible ? "text" : "password"}
            />
            <span
              onClick={Toggle}
              className="cursor-pointer flex justify-center items-center">
              {passwordVisible ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
            </span>
          </div>
        </div>

        <div className="md:flex flex-row   space-x-5 space-y-4 justify-between px-3 mb-5">
          <div className=" flex space-x-2 ">
            <input type="checkbox" />
            <h1>Remember</h1>
          </div>
          <div>
            <h1>Forgot password</h1>
          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
          <button className="opacity-90  w-[25%] h-[6vh] bg-blue-600 text-white rounded-md">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
