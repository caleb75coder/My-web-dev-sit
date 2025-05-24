import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";

const Javascript = () => {
  // const navigate = useNavigate();
  // const handleReturn = () => {
  //   setTimeout(() => {
  //     navigate("/javascript");
  //   }, 1000);
  // };
  return (
    <main className="px-1 py-2  bg-gray-200 ">
      {/* <section className="bg-white space-y-3">
        <div className="code flex items-center space-x-3 text-blue-200 py-3 px-2  md:overflow-x-hidden overflow-x-autow-[100] bg-blue-600">
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
        </div>
      </section> */}

      <section className=" w-[100%]   flex-col space-x-2 space-y-2 ">
        <div className=" md:flex flex-col flex-row w-[100%] px-2 space-x-2   rounded-xl">
          <div className="mb-3 w-[100%]">
            <img src="Techjs.jpeg" alt="" />
          </div>
          <div>
            <h1 className="w-[100%] flex justify-center text-xl text-blue-600">
              JAVASCRIPT
            </h1>
            <p className="text-sm">
              <strong className="font-bold">JavaScrip</strong>t (JS) is a
              dynamic, high-level programming language mainly used to add
              interactivity to websites. As a core web technology alongside HTML
              and CSS, it enables dynamic content, multimedia control, and
              animation. JavaScript runs in browsers for front-end development
              and powers back-end applications with Node.js. It is
              prototype-based, multi-paradigm, and supports object-oriented,
              imperative, and declarative programming styles, offering features
              like runtime object creation and dynamic scripting.
            </p>
          </div>
        </div>

        <div className="md:flex flex-col flex-row w-[100%]  space-y-5  px-1 py-2 rounded-md">
          <div className=" items-center justify-center flex">
            <p className="text-sm">
              <strong className="font-bold">JavaScript</strong> is a versatile,
              interpreted programming language widely used for creating dynamic
              and interactive web pages, applications, and servers. It's known
              for its ability to manipulate the Document Object Model (DOM),
              making web pages responsive to user actions. JavaScript also
              powers server-side development through platforms like Node.js.{" "}
            </p>
          </div>
          <div className="w-[100%]">
            <img src="Javasp.jpeg" width={"100%"} alt="" />
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h1 className="w-[100%] flex justify-center text-xl text-blue-600  border-b border-blue-500">
              Key Features of JavaScript:
            </h1>
          </div>

          <div>
            <h1 className=" text-md text-blue-600">
              Interpreted and Lightweight:
            </h1>
            <p className="text-sm">
              JavaScript code is executed line by line, making it flexible and
              relatively easy to implement in web pages.{" "}
            </p>
          </div>

          <div>
            <h1 className=" text-md text-blue-600">Dynamic Typing</h1>
            <p className="text-sm">
              Variable types are determined at runtime, allowing for flexibility
              and quick development.{" "}
            </p>
          </div>

          <div>
            <h1 className=" text-md text-blue-600">
              Prototype-Based Inheritance:
            </h1>
            <p className="text-sm">
              Objects inherit properties from their prototypes, providing a
              powerful way to create and manage code.{" "}
            </p>
          </div>

          <div>
            <h1 className=" text-md text-blue-600">First-Class Functions:</h1>
            <p className="text-sm">
              Functions can be treated like any other variable, passed as
              arguments, or returned from other functions, enabling powerful
              functional programming techniques.{" "}
            </p>
          </div>

          <div>
            <h1 className=" text-md text-blue-600">
              Event-Driven Programming:
            </h1>
            <p className="text-sm">
              JavaScript allows you to attach event listeners to elements,
              enabling the execution of code in response to user actions (like
              clicks, form submissions, etc.).
            </p>
          </div>

          <div>
            <h1 className=" text-md text-blue-600">DOM Manipulation:</h1>
            <p className="text-sm">
              JavaScript provides tools to access and modify the content,
              structure, and style of web pages directly.{" "}
            </p>
          </div>

          <div>
            <h1 className=" text-md text-blue-600">
              Asynchronous Programming:
            </h1>
            <p className="text-sm">
              JavaScript supports asynchronous operations, allowing you to
              handle tasks that take time, such as fetching data from a server,
              without blocking the main thread.{" "}
            </p>
          </div>

          <div>
            <h1 className=" text-md text-blue-600">Cross-Platform:</h1>
            <p className="text-sm">
              JavaScript is supported by all major web browsers, making it a
              consistent and versatile tool for web development.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="space-y-5">
          <h1 className="w-[100%] flex justify-center text-xl text-blue-600  border-b border-blue-500">
            common Use cases
          </h1>
          <div>
            <p className="text-sm">
              <strong className="font-bold">Web Interactivity:</strong> Creating
              dynamic content, handling form validation, managing user
              interactions, and animating elements on web pages.{" "}
            </p>
          </div>

          <div>
            <p className="text-sm">
              <strong className="font-bold">Server-Side Development:</strong>{" "}
              Building APIs, managing databases, and handling requests using
              platforms like Node.js.{" "}
            </p>
          </div>

          <div>
            <p className="text-sm">
              <strong className="font-bold">Game Development:</strong>{" "}
              Developing interactive games with libraries like Phaser.{" "}
            </p>
          </div>

          <div>
            <p className="text-sm">
              <strong className="font-bold">Mobile App Development:</strong>{" "}
              Creating native mobile applications using frameworks
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Javascript;
