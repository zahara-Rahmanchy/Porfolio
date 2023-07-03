import React from "react";
import {Fade, Slide} from "react-awesome-reveal";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const about = () => {
  return (
    <div className="max-w-7xl mx-auto p-3 rounded-md bg-[#faf6e0]">
      <h1 className="text-4xl font-bold p-2">
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#3d60b7] to-[#6DA3D7] ">
          {" "}
          About Me
        </span>
        <Slide>
          <hr className=" w-14 h-1 bg-gradient-to-r from-[#3d60b7] via-[#7d98df] to-[#d24341]" />
        </Slide>
      </h1>
      <Fade>
        {" "}
        <p className="p-2 text-blue-900 my-3 text-[17px] max-w-5xl mx-auto ">
          I'm a passionate web developer and Computer Science and Engineering
          student with a knack for building interactive and engaging websites.
          With a strong background in HTML, CSS, and JavaScript, I have the
          expertise to create visually appealing and user-friendly web
          experiences. I focus on crafting seamless web solutions that captivate
          users and provide them with a smooth and intuitive browsing
          experience. I have experience working with frameworks like React.js
          and have dabbled in backend technologies like Express.js, Firebase,
          and MongoDB. As a lifelong learner, I actively explore new ideas and
          technologies, constantly seeking to expand my knowledge and improve my
          craft. With a commitment to delivering exceptional web experiences, my
          goal is to create innovative and engaging websites that leave a
          lasting impact on users
        </p>
      </Fade>
      <div className=" max-w-5xl flex  mx-auto p-3 place-self-start">
        <a
          href="https://www.linkedin.com/in/zahara-rahman-chowdhury-736780253/"
          target="_blank"
        >
          <FaLinkedin className="text-3xl text-blue-900 me-2" />
        </a>
        <a
          className="text-3xl text-blue-900"
          href="https://github.com/zahara-Rahmanchy"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default about;
