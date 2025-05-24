import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";

const Signup = () => {
  const [passwordVisible, setpasswordVisible] = useState(false);
  const Toggle = () => {
    setpasswordVisible(!passwordVisible);
  };
  return (
    <div className="bg-white text-black w-[100%] h-[100vh] flex justify-center items-center  ">
      <div className="bg-white md:w-[40%] w-[90%] h-[90%] px-2 py-5 shadow-xl shadow-blue-800 rounded-md">
        <div className="flex flex-col justify-center items-center space-y-2 mb-5 ">
          <h1 className="text-4xl text-blue-800">Sign up</h1>
          <button>OR LOGIN</button>
        </div>

        <div className="flex flex-col justify-center  w-[100%]  space-y-2 px-2 mb-2">
          <label htmlFor="">Email</label>
          <input
            className=" px-3 border-b-5 border border-blue-500 bg-white rounded-md h-[6vh]"
            type="email"
            placeholder="youremail@example.com"
          />
        </div>

        <div className="flex flex-col justify-center  w-[100%]  space-y-2 px-2 mb-2">
          <label htmlFor="">Craate Username</label>
          <p className="text-sm text-gray-400">3-15 characters</p>
          <input
            className=" px-3 border-b-5 border border-blue-500 bg-white rounded-md h-[6vh]"
            type="email"
            placeholder="your Username"
          />
        </div>

        <div className="flex flex-col justify-center  w-[100%]  space-y-2 px-2 mb-5">
          <label htmlFor="">Password</label>
          <p className="text-sm text-gray-100">8+ Characters</p>
          <div className="flex  justify-center  w-[100%]  bg-white rounded-md border-b-5 border border-blue-500 space-x-2 ">
            <input
              className=" bg-grawhite rounded-md h-[6vh] w-[95%]"
              type={passwordVisible ? "text" : "password"}
            />
            <span
              onClick={Toggle}
              className="cursor-pointer flex justify-center items-center pr-2">
              {passwordVisible ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
            </span>
          </div>
        </div>

        <div className="md:flex flex-row   space-x-5 space-y-4 justify-between px-3 mb-5">
          <div className=" flex space-x-2 ">
            <input type="checkbox" />
            <h1>sign uo for World of the day Email</h1>
          </div>
        </div>

        <div>
          <h1 className="text-sm">
            By completing this registration, you acceot the Terms and conditions
            and acknowledge the privacy Policy for this site
          </h1>
        </div>
        <div className="w-[100%] flex justify-center items-center">
          <button className="w-[25%] h-[6vh] bg-blue-600 text-white rounded-lg">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
