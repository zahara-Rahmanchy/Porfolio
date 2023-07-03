import React from "react";
import {Slide} from "react-awesome-reveal";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-5 flex flex-col justify-center items-center bottom-0  bg-[#faf6e0] mt-20 ">
        <Slide direction="up">
          {" "}
          <a className="btn btn-ghost font-bold md:text-3xl text-[#3F64BA] text-2xl">
            Connect With Me
          </a>
          <div className="flex items-center flex-col text-blue-950">
            <p className="text-lg">
              {" "}
              <span className="text-md font-semibold text-red-400">
                Mobile:{" "}
              </span>
              +8801726659028
            </p>
            <p className="text-lg">
              <span className="text-md  font-semibold text-red-400">
                Email:{" "}
              </span>
              zaharachy72@gmail.com
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">My Socail Sites</p>
            <div className="grid grid-flow-col gap-4 place-items-center  mx-auto p-3">
              <a
                href="https://www.linkedin.com/in/zahara-rahman-chowdhury-736780253/"
                target="_blank"
              >
                <FaLinkedin className="text-3xl text-blue-900" />
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
        </Slide>
      </footer>
    </div>
  );
};

export default Footer;
