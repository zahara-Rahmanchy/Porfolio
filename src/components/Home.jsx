import React from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import animation from "./../assets/23165-isometric-laptop.json";
import {Slide} from "react-awesome-reveal";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto  p-4">
      <div className="md:col-span-1 col-span-2 md:order-1 order-2 flex flex-col justify-center items-center">
        <h1 className="md:text-4xl text-3xl font-bold m-3 ">
          {" "}
          <span
            className="text-transparent bg-gradient-to-r bg-clip-text  from-[#0857A0] via-[#6DA3D7] to-[#d24341]"
            data-aos="slide-right"
          >
            {" "}
            Hi, I'm Zahara Rahman Chowdhury.
          </span>
          <Slide direction="up">
            <span className="text-2xl font-normal text-blue-900">
              <br />
              I'm a Web Developer. I love building websites and bringing ideas
              to life through code.
            </span>
          </Slide>
        </h1>
        <div className="w-full p-4 flex flex-row space-x-6">
          {" "}
          <a href="mailto:zaharachy72@gmail.com" className="text-left">
            <FaEnvelope className="text-3xl text-blue-900" />
          </a>
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
      <div className="md:col-span-1 col-span-2 md:order-2 order-1 flex justify-center items-center mt-14">
        <Player
          src={animation}
          className="player md:w-3/4 w-1/2"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Home;
