import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-[100%] flex-col  bg-blue-950 space-y-5 pt-5">
      <div className="w-[100%]  flex  md:flex-row flex-col  justify-between space-y-5">
        <div className="flex items-center px-3  md:text-xl text-lg  space-x-2 md:w-[65%] w-[100%]">
          <span className="text-7xl text-green-700">
            <BiLogoMicrosoftTeams />
          </span>
          <h1 className="text-gray-400">
            Learn the new world of Coding every day.And be amoung the best
            developer of our time
          </h1>
        </div>
        <form className="flex justify-center  md:w-[35%] w-[100%] px-2">
          <div className="text-white flex justify items-center space-x-3 w-[90%]">
            <input
              className="w-[90%] h-[5vh] rounded-sm border border-gray-600 px-2"
              type="email"
              placeholder="Your email address"
            />
            <span className="bg-red-700 w-[10%] rounded-sm flex justify-center items-center h-[5vh]">
              <FaAngleRight />
            </span>
          </div>
        </form>
      </div>

      <div className="flex w-[100%] px-4">
        <nav className="space-x-4 flex  md:flex-row flex-col text-white">
          <a href="">Help center</a>
          <a href="">About Us</a>
        </nav>
        <nav className="space-x-4 flex  md:flex-row flex-col text-white">
          <a href="">Advertising info</a>
          <a href="">privacy Policy</a>
        </nav>
        <nav className="space-x-4 flex  md:flex-row flex-col text-white">
          <a href=""> Contact Us</a>
        </nav>
      </div>
      <div className="flex lg:justify-center lg:items-center w-[100%] text-3xl space-x-5 px-6">
        <a
          className="text-blue-500 w-[15%] rounded-full flex justify-center items-center h-[8vh]"
          href="https://www.facebook.com/profile.php?id=61558867333701">
          <FaFacebookF />
        </a>
        <a
          className="text-black  w-[15%] rounded-full flex justify-center items-center h-[8vh]"
          href="https://x.com/Mc_GTrades?t=3W1NojFgxB3IYRo9MAsI7w&s=09">
          <FaXTwitter />
        </a>
        <a
          className="text-red-700  w-[15%] rounded-full flex justify-center items-center h-[8vh]"
          href="https://youtube.com/@humbleseed75?si=v3lWU6xs3mryeBDD">
          {" "}
          <FaYoutube />
        </a>
        <a
          className="text-red-400 w-[15%] rounded-full flex justify-center items-center h-[8vh]"
          href="https://www.instagram.com/miracle_caleb75?igsh=MTZsY3dpZ3Z4c3F4cw==">
          {" "}
          <FaInstagram />
        </a>

        <a
          className="text-green-500 w-[15%] rounded-full flex justify-center items-center h-[8vh]"
          href="https://wa.link/lezstg">
          <ImWhatsapp />
        </a>
      </div>

      <div className="bg-black text-gray-400 w-[100%] h-[10vh] py-2 px-4">
        <h1>2025 World of Coding Incorporated</h1>
      </div>
    </div>
  );
};

export default Footer;
