import React from "react";
import { Summary } from "./Summary";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
// import { NavLink, useNavigate } from "react-router-dom";
const Home = () => {
  const [isOpen, setisOpen] = useState(null);
  const handlecClick = (indexparameter) => {
    setisOpen(isOpen === indexparameter ? null : indexparameter);
  };

  // const navigate = useNavigate();
  // const handleReturn = () => {
  //   setTimeout(() => {
  //     navigate("/javascript");
  //   }, 1000);
  // };

  // const [mode, setMode] = useState (false);
  // const handlecClick = () => {
  //   setMode (!mode);
  // };

  return (
    <main
      className={`bg-white text-black w-[100%] space-y-3 pb-5 overflow-hidden  `}>
      <section className={`bg-white space-y-3 `}>
        {/* <div className="code flex items-center space-x-3 text-blue-200 py-3 px-2  md:overflow-x-hidden overflow-x-autow-[100] bg-blue-600">
          <button
            onClick={handleReturn}
            className="bg-gray-700 rounded-lg px-2 py-1 flex  justify-center">
            Javascript
          </button>
          <h1 className="bg-gray-700 rounded-lg px-2 py-1  flex  justify-center">
            Python
          </h1>
          <h1 className="bg-gray-700 rounded-lg px-2 py-1  flex  justify-center ">
            IT.Consulting
          </h1>
          <h1 className="bg-gray-700 rounded-lg px-2 py-1  flex  justify-center ">
            UI/UX.Design
          </h1>
          <h1 className="bg-gray-700 rounded-lg px-2 py-1  flex  justify-center ">
            Cloud.Solutions
          </h1>
          <h1 className="bg-gray-700 rounded-lg px-2 py-1  flex  justify-center ">
            Mobile.App.Dev
          </h1>
          <h1 className="bg-gray-700 rounded-lg px-2 py-1  flex  justify-center">
            Custom.Software.Development
          </h1>
          <h1 className="bg-gray-700 rounded-lg px-2 py-1  flex  justify-center">
            Animation
          </h1>
          <h1 className="bg-gray-700 rounded-lg px-2 py-1  flex  justify-center">
            Back.End
          </h1>
        </div> */}

        <div>
          <div className="flex space-x-2 items-center px-3 bg-gray-100">
            <h1 className="text-3xl text-blue-700">Codding</h1>
            <p>objectives</p>
          </div>
        </div>

        {/* <div>
          <span onClick={handlecClick} className="text-2xl">
            { mode? <MdDarkMode /> : <MdOutlineDarkMode/>}
          </span>
        </div> */}

        <div className="px-2 bg-gray-100   w-[100%]">
          <h1 className="text-blue-600 text-2xl mb-7"> TECH World Coding</h1>
          <span></span>
          <h1 className="text-blue-500 text-xl">
            Let's build the future together ::
          </h1>
          <h1 className="text-blue-600 text-lg">Our Core Values:</h1>
        </div>

        <div className="px-2  w-[100%] md:flex flex-row flex-col space-x-2 space-y-2 ">
          <div className="  md:w-[33%] w-[100%] px-2 py-2 bg-gray-100 rounded-xl">
            <div className="mb-3">
              <img src="Techjs.jpeg" alt="" />
            </div>
            <h1 className="w-[100%] flex justify-center text-xl text-blue-600">
              JAVASCRIPT
            </h1>
            <p className="text-sm">
              JavaScript (JS) is a dynamic, high-level programming language
              mainly used to add interactivity to websites. As a core web
              technology alongside HTML and CSS, it enables dynamic content,
              multimedia control, and animation. JavaScript runs in browsers for
              front-end development and powers back-end applications with
              Node.js. It is prototype-based, multi-paradigm, and supports
              object-oriented, imperative, and declarative programming styles,
              offering features like runtime object creation and dynamic
              scripting.
            </p>
          </div>

          <div className="md:w-[33%] w-[100%] px-2 py-2 bg-gray-100 rounded-xl">
            <div>
              <img src="Pythonjs.jpg" alt="" />
            </div>
            <h1 className="w-[100%]  flex justify-center text-xl text-blue-600">
              Python
            </h1>
            <p className="text-sm">
              Python is a high-level, interpreted programming language renowned
              for its readability and versatility. It's designed to be easy to
              learn and use, making it a popular choice for beginners and
              experienced programmers alike. Python is widely used in various
              fields, including web development, data science, machine learning,
              and automation.{" "}
            </p>
          </div>

          <div className="  md:w-[33%] w-[100%] px-2 py-2 bg-gray-100 rounded-xl">
            <div>
              <img src="It.png" alt="" />
            </div>
            <h1 className="w-[100%] flex justify-center text-xl text-blue-600">
              IT Consulting
            </h1>
            <p className="text-sm">
              IT consulting provides advisory services to businesses on how to
              best utilize information technology to achieve their goals. IT
              consultants help organizations optimize their technology
              infrastructure, improve cybersecurity, and develop effective IT
              strategies. They can also assist with software development, data
              analytics, and cloud computing solutions.{" "}
            </p>
          </div>
        </div>

        <div className="px-2  w-[100%] md:flex flex-row flex-col space-x-2 space-y-2">
          <div className="  md:w-[33%] w-[100%] px-2 py-2 bg-gray-300 rounded-xl">
            <div>
              <img src="Uiuxjs.webp" alt="" />
            </div>
            <h1 className="w-[100%] flex justify-center text-xl text-blue-600">
              UI/UX Design
            </h1>
            <p className="text-sm">
              UI/UX design focuses on creating enjoyable and usable digital
              experiences by combining user interface (UI) design, which focuses
              on the visual elements of the interface, and user experience (UX)
              design, which focuses on the overall user journey. UI/UX designers
              aim to make digital products intuitive, efficient, and
              aesthetically pleasing, ensuring users have a positive and
              seamless experience
            </p>
          </div>

          <div className="  md:w-[33%] w-[100%] px-2 py-2 bg-gray-100 rounded-xl">
            <div>
              <img src="Cloudjs.webp" alt="" />
            </div>
            <h1 className="w-[100%] flex justify-center text-xl text-blue-600">
              Cloud Solutions
            </h1>
            <p className="text-sm">
              Cloud solutions are services delivered over the internet that
              provide on-demand access to computing resources like storage,
              applications, and processing power. These resources are managed by
              third-party providers, allowing organizations to access and
              utilize them without needing to own and maintain their own
              infrastructure
            </p>
          </div>

          <div className="  md:w-[33%] w-[100%] px-2 py-2 bg-gray-100 rounded-xl">
            <div>
              <img src="Appjs.jpg" alt="" />
            </div>
            <h1 className="w-[100%] flex justify-center text-xl text-blue-600">
              Mobile App Dev
            </h1>
            <p className="text-sm">
              Mobile app development is the process of creating software
              applications designed to run on mobile devices like smartphones
              and tablets. It involves designing the user interface, coding
              functionality, testing, and ensuring a smooth post-launch
              experience.{" "}
            </p>
          </div>
        </div>

        <div className="px-2  w-[100%] md:flex flex-row flex-col space-x-2 space-y-2">
          <div className="  md:w-[33%] w-[100%] px-2 py-2 bg-gray-100 rounded-xl">
            <div>
              <img src="Softjs.webp" alt="" />
            </div>
            <h1 className="w-[100%] flex justify-center text-xl text-blue-600">
              Custom Software Development
            </h1>
            <p className="text-sm">
              Custom software development is the process of creating software
              applications specifically tailored to meet the unique needs and
              specifications of a particular organization or user group. Unlike
              off-the-shelf software, which is designed for a broad market,
              custom software is designed, built, and maintained from scratch to
              address specific business challenges or workflows
            </p>
          </div>

          <div className="  md:w-[33%] w-[100%] px-2 py-2 bg-gray-100 rounded-xl">
            <div>
              <img src="Animationjs.jpg" alt="" />
            </div>
            <h1 className="w-[100%] flex justify-center text-xl text-blue-600">
              Animation
            </h1>
            <p className="text-sm">
              Animation is the process of creating the illusion of movement by
              displaying a sequence of still images, called frames, in rapid
              succession. This technique can be applied to various mediums,
              including drawings, models, or even physical objects, to make them
              appear to be moving. The human brain retains an image for a brief
              period, so when multiple frames are shown quickly, they blend
              together to create the perception of motion
            </p>
          </div>

          <div className="  md:w-[33%] w-[100%] px-2 py-2 bg-gray-100 rounded-xl">
            <div>
              <img src="Backjs.webp" alt="" />
            </div>
            <h1 className="w-[100%] flex justify-center text-xl text-blue-600">
              Back End
            </h1>
            <p className="text-sm">
              The "back end" of a website or application refers to the
              server-side logic, infrastructure, and components that are not
              directly visible to the user. It's the part that manages data,
              handles user requests, and powers the application's functionality.
              Think of it as the engine that makes the front end (the user
              interface) work
            </p>
          </div>
        </div>
      </section>

      <section className='h-full flex justify-center items-center  "'>
        <div className="w-[100%]  py-5 px-2">
          <section>
            <h1 className="text-blue-600  font-medium mb-5 space-x-2 text-xl  border-b-2 border-blue-300">
              CODDING SUMMARY
            </h1>
          </section>

          <section className="space-y-1 text-black font">
            {Summary.map((anyname, index) => (
              <div className="text-black font-medium">
                <div
                  className="flex justify-between px-4 py-3 bg-gray-200  mb-0.5 cursor-pointer"
                  onClick={() => handlecClick(index)}>
                  <p>{anyname.question}</p>
                  <span className="text-xl">
                    {isOpen === index ? <AiOutlineClose /> : <FaPlus />}
                  </span>
                </div>

                {isOpen === index && (
                  <div className="px-2 py-5 bg-gray-300 text-sm">
                    {anyname.answer}
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
};

export default Home;
