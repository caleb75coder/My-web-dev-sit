import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoMoon } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CiDark, CiLight, CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  // const {Name} = useContext (Context)
  const location = useLocation();
  const NavLink = [
    {
      id: 0,
      title: "Home",
      path: "/",
    },
    {
      id: 1,
      title: "About",
      path: "/about",
    },
    {
      id: 2,
      title: "Contact",
      path: "/contact",
    },
    {
      id: 3,
      title: "Signup",
      path: "/signup",
    },
    {
      id: 4,
      title: "Login",
      path: "/login",
    },
  ];

  const [Visible, setVisible] = useState(false);
  const HandleClick = () => {
    setVisible(!Visible);
  };

  const navigate = useNavigate();
  const handleReturn = () => {
    setTimeout(() => {
      navigate("/javascript");
    }, 1000);
  };

  const handlepython = () => {
    setTimeout(() => {
      navigate("/python");
    });
  };

  const handleuiux = () => {
    setTimeout(() => {
      navigate("/uiux");
    });
  };

  const handleit = () => {
    setTimeout(() => {
      navigate("/itconsulting");
    }, 800);
  };

  const handleapp = () => {
    setTimeout(() => {
      navigate("/mobileapp");
    }, 800);
  };

  const [open, setOpen] = useState(false);
  const toggleTheme = () => {
    setOpen(!open);
  };

  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme");
  //   if (
  //     storedTheme === "dark" ||
  //     (!storedTheme &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //     setTheme("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     setTheme("light");
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //     setTheme("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //     setTheme("light");
  //   }
  // };

  return (
    <main
      className={` header w-[100%]     border-white/20 bg-white/45  shadow-lg backdrop-filter backdrop-blur-md ${
        open ? " text-black " : "bg-black text-white "
      } `}>
      <div className=" flex  md:flex-row flex-col items-center justify-between   shadow-gray-900 shadow-md py-2 px-1 w-[100%] space-y-2 ">
        <div className="flex justify-between items-center md:w-[100%] w-[100%]  ">
          <div className="space-x-1 flex items-center md:w-[60%] w-[100%]  text-black ">
            <div className="lg:hidden ">
              <div className=" rounded-xl px-2 py-2 text-4xl">
                <span onClick={HandleClick}>
                  {Visible ? <AiOutlineClose /> : <IoMenu />}
                </span>
              </div>
            </div>

            <span className="text-5xl text-green-500">
              <BiLogoMicrosoftTeams />
            </span>
            <h1 className="font-bold">TECH</h1>
          </div>
          <div className="px-2 flex items-center space-x-2 text-black">
            {/* <p>Hi {Name}</p> */}
            <span onClick={toggleTheme}>
              {" "}
              {open ? (
                <IoMoon className=" text-black" />
              ) : (
                <CiLight className="font-bold" />
              )}
            </span>
            <span className="text-2xl text-black">
              <FaRegUserCircle />
            </span>
          </div>

          <div className="tags md:flex hidden items-center justify-evenly space-x-8 text-black font-mono py-5 text-xl font-bold w-[70%]  ">
            {NavLink.map((nav) => (
              <Link to={nav.path} key={nav.id}>
                {nav.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-black  md:w-[30%] w-[95%] md:ml-10  h-[5vh] items-center flex  bg-gray-400 rounded-2xl space-x-3">
          <input
            className="text=white w-[85%] bg-gray-300 rounded-l-2xl border-none outline h-[5vh] px-3 "
            type="search"
            placeholder="Codding"
          />
          <span className=" w-[14%] font-bold text-2xl flex justify-center items-center ">
            <CiSearch />
          </span>
        </div>
      </div>

      <section className=" space-y-3 md:overflow-x-hidden overflow-x-auto w-[100%]  shadow-2xl">
        <div className=" flex items-center justify-between space-x-3 text-black py-3 px-2   ">
          <button
            onClick={handleReturn}
            className="bg-gray-400 rounded-2xl px-4 py-1 flex  justify-center ">
            Javascript
          </button>
          <button
            onClick={handlepython}
            className="bg-gray-400 rounded-2xl px-4 py-1  flex  justify-center">
            Python
          </button>
          <button
            onClick={handleuiux}
            className="bg-gray-400 rounded-2xl px-4 py-1  flex  justify-center ">
            UI/UX.Design
          </button>
          <button
            onClick={handleit}
            className="bg-gray-400 rounded-2xl px-4 py-1  flex  justify-center ">
            IT.Consulting
          </button>

          <button className="bg-gray-400 rounded-2xl px-4 py-1  flex  justify-center ">
            Cloud.Solutions
          </button>
          <button
            onClick={handleapp}
            className="bg-gray-400 rounded-2xl px-4 py-1  flex  justify-center ">
            Mobile.App.Dev
          </button>
          <button className="bg-gray-400 rounded-2xl px-4 py-1  flex  justify-center">
            Custom.Software.Development
          </button>
          <button className="bg-gray-400 rounded-2xl px-4 py-1  flex  justify-center">
            Animation
          </button>
          <button className="bg-gray-400 rounded-2xl px-4 py-1  flex  justify-center">
            Back.End
          </button>

          <button className="bg-gray-400 rounded-2xl px-4 py-1  flex  justify-center">
            Data.Engineering
          </button>
        </div>
      </section>

      {/* <div className="lg:hidden  text-white">
        {Visible && (
          <div className="transition-all duration-500 ">
            <nav className="transition-all duration-500 ease-in-out flex flex-col text-xl bg-black px-3 opacity-85 py-3 space-y-5 h-screen fixed z-50 w-[100%] rounded ">
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/login">Login</a>
              <a href="/signup"> Sign up</a>
              <a href="">Games & Quizzes</a>
              <a href="">Word of the day</a>
              <a href="">Codding charlenge</a>
              <a href="">Join new TECH World </a>
              <a href="">Books</a>
            </nav>
          </div>
        )}
      </div> */}

      <div
        className={`tags overflow-hidden bg-blue-800 opacity-95 text-white flex flex-col px-3 space-y-5  fixed z-50 w-[100%] h-screen lg:hidden transition-all duration-500 ease-in-out text-xl ${
          Visible ? "max-h-screen py-4 " : "max-h-0"
        } `}
        onClick={() => {
          setVisible(false);
        }}>
        {NavLink.map((nav) => (
          <Link to={nav.path} key={nav.id}>
            {nav.title}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Header;
