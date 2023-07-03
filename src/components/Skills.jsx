import React, {useEffect} from "react";
import {FaBeer, FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoFirebase,
} from "react-icons/bi";
import {BsFillBootstrapFill} from "react-icons/bs";
import {SiExpress, SiMysql} from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import {Slide} from "react-awesome-reveal";
const Skills = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <section className="max-w-7xl mx-auto p-3 rounded-md bg-[#faf6e0] mt-20">
      <h1 className="text-4xl font-bold p-2">
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#3d60b7] to-[#6DA3D7] ">
          {" "}
          Skills
        </span>
        <Slide>
          <hr className=" w-14 h-1 bg-gradient-to-r from-[#3d60b7] via-[#7d98df] to-[#d24341]" />
        </Slide>
      </h1>
      <div className="grid grid-cols-2 place-content-center text-blue-900">
        <div className="md:col-span-1 col-span-2 flex flex-col justify-center place-self-center gap-7">
          <div className=" text-2xl flex gap-6">
            <FaHtml5 className="text-5xl text-orange-500 text-left" />
            <h1>HTML</h1>
          </div>
          <div className="text-2xl  flex gap-6">
            <FaCss3Alt className="text-5xl text-blue-500" />
            <h1>CSS</h1>
          </div>

          <div className=" text-2xl flex gap-6">
            <BiLogoJavascript className="text-5xl text-yellow-500" />
            <h1>JavaScript</h1>
          </div>
          <div className="  text-2xl flex gap-6">
            <BiLogoTailwindCss className="text-5xl text-teal-500" />
            <h1>Tailwind CSS</h1>
          </div>

          <div className="  text-2xl flex gap-6">
            <BsFillBootstrapFill className="text-5xl text-violet-600" />
            <h1>Bootstrap</h1>
          </div>
        </div>
        <div className="md:col-span-1 col-span-2 flex flex-col justify-center place-self-center gap-7">
          <div className=" text-2xl flex gap-6">
            <FaReact className="text-5xl text-blue-400 bg-slate-800" />
            <h1>React JS</h1>
          </div>
          <div className="  text-2xl flex gap-6">
            <SiExpress className="text-5xl text-green-500" />
            <h1>Express JS</h1>
          </div>
          <div className="  text-2xl flex gap-6">
            <BiLogoMongodb className="text-5xl text-emerald-500 " />
            <h1>MongoDB</h1>
          </div>

          <div className=" text-2xl flex gap-6">
            <BiLogoFirebase className="text-5xl text-yellow-400" />
            <h1>Firebase</h1>
          </div>
          <div className=" text-2xl flex gap-6">
            <SiMysql className="text-5xl text-[#00718B]" />
            <h1>My SQL</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
