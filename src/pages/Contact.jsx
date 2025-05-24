import React from "react";

const Contact = () => {
  return (
    <div className="bg-white text-black w-[100%]">
      <div className="flex flex-col justify-center items-center w-[100%] px-5 py-2 mb-10">
        <div className="text-4xl font-medium w-[100%] mb-5">
          <h1 className="mb-10 text-blue-600">Contact Us </h1> <hr />
        </div>

        <div className="w-[100%] space-y-3 text-sm">
          <h1>Thanks you for your interest in TECH World Website</h1>
          <h1>
            <div>
              <img src="Contact.webp" width={"100%"} alt="" />
            </div>
            We find that meny questions can be answered at our{" "}
            <strong className="text-red-300">Help page</strong>, so you may find
            your answers more quickly is you Browse those options first.
          </h1>
          <h1>
            Feedback for our Games and Quizzes is the best sebt through our{" "}
            <strong className="text-red-300">Games Feedback form.</strong>
          </h1>
          <h1>
            Otherwise, use the platform below to send your comment or questions,
            and don't forget to select the topics you are contacting us about
          </h1>
        </div>
      </div>

      <form className="w-[100%]  flex flex-col justify-center items-center  pb-5  ">
        <div className="w-[96%] md:w-[50%]  flex flex-col justify-center  border-2 border-gray-600  px-3">
          <h1 className="text-2xl text-blue-500  ">Contact Form</h1>
          <div className="flex flex-col px-1 text-md">
            <label htmlFor="">Your Name:</label>
            <input
              className="bg-white h-[6vh] text-sm border border-gray-500 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col px-1 text-lg">
            <label htmlFor="">Your E-mail Address:</label>
            <input
              className="bg-white text-black h-[6vh] text-sm border border-gray-500 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col borderpx-1 text-lg">
            <label htmlFor="">
              The perticuler topic you're contacting us About:
            </label>
            <select
              className="bg-white h-[6vh] border  border-gray-500 rounded-md text-black"
              name=""
              id="">
              <option
                className="text-lg bg-blue-500 text-white"
                value=""
                disabled
                selected>
                -please selecte-
              </option>
              <option className="text-sm" value="">
                Javascript
              </option>
              <option className="text-sm" value="">
                Python
              </option>
              <option className="text-sm" value="">
                UI/UX
              </option>
              <option className="text-sm" value="">
                Ani,ation Class
              </option>
              <option className="text-sm" value="">
                Mobile app Dev
              </option>
              <option className="text-sm" value="">
                Data Engineer
              </option>
              <option className="text-sm" value="">
                AI Engineering
              </option>
            </select>
          </div>
          <div className="flex flex-col borderpx-1 text-md pb-3">
            <label htmlFor="">Your Question or Comment:</label>
            <input
              className="bg-white h-[16vh] text-sm border border-gray-500 rounded-md"
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
