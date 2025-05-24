import React from "react";

const About = () => {
  return (
    <div className="bg-white text-black w-[100%] h-full">
      <div className="flex flex-col justify-center items-center w-[100%] px-5 py-2 ">
        <div className="text-4xl font-medium w-[100%] mb-5">
          <h1 className="mb-10">About Us </h1> <hr />
        </div>

        <div className="w-[100%] space-y-5 text-sm">
          <h1>
            At <strong className="text-red-300">TECH World</strong>, we are
            passionate about building innovative software solutions that drive
            success. Founded in <strong className="text-red-300">Year</strong>,
            we have grown from a small team of tech enthusiasts into a trusted
            partner for businesses worldwide
          </h1>
          <div>
            <img src="About.avif" width={"100%"} alt="" />
          </div>
          <h1>
            Our mission is simple: to empower organizations through technology.
            Whether it's developing custom software, creating intuitive mobile
            apps, or delivering scalable cloud solutions, we blend creativity,
            technical expertise, and industry insights to bring ideas to life.
          </h1>
          <h1>
            With a strong commitment to quality, security, and client
            satisfaction, we pride ourselves on being more than just a service
            provider — we are a strategic partner. Our diverse team of
            developers, designers, and project managers work collaboratively to
            ensure every project meets the highest standards.
          </h1>
          <h1>
            At <strong className="text-red-300">TECH World</strong>, innovation
            never stops. We continually invest in research, stay updated with
            the latest tech trends, and refine our processes to deliver
            future-ready solutions. From startups to enterprises, we help our
            clients navigate digital transformation with confidence.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
