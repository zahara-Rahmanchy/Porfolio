import {useEffect} from "react";
import {FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa";

import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoFirebase,
  BiLogoPostgresql,
} from "react-icons/bi";
import {BsFillBootstrapFill} from "react-icons/bs";
import {
  SiExpress,
  // SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import {Slide} from "react-awesome-reveal";
const Skills = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <section className="max-w-7xl mx-auto p-3 rounded-md bg-transparent  my-20">
      <h1 className="text-4xl font-bold p-2">
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#3d60b7] to-[#6DA3D7] ">
          {" "}
          Skills
        </span>
        <Slide>
          <hr className=" w-14 h-1 bg-gradient-to-r from-[#3d60b7] via-[#7d98df] to-[#d24341]" />
        </Slide>
      </h1>
      <div className="grid md:grid-cols-4 ms-20 my-10 grid-cols-1 place-content-center text-blue-900 gap-5">
        {/* <div className="md:col-span-1 col-span-3 flex flex-col justify-center place-self-center gap-7"> */}
        <div className=" text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <FaHtml5 className="text-4xl text-orange-500 text-left" />
          </Slide>
          <Slide direction="right">
            <h1>HTML</h1>
          </Slide>
        </div>
        <div className="text-xl font-semibold  flex gap-6">
          <Slide>
            {" "}
            <FaCss3Alt className="text-4xl text-blue-500" />
          </Slide>
          <Slide direction="right">
            <h1>CSS</h1>
          </Slide>
        </div>

        <div className=" text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <BiLogoJavascript className="text-4xl text-yellow-500" />
          </Slide>
          <Slide direction="right">
            <h1>JavaScript</h1>
          </Slide>
        </div>
        <div className=" text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <BiLogoTailwindCss className="text-4xl text-teal-500" />
          </Slide>
          <Slide direction="right">
            <h1>Tailwind CSS</h1>
          </Slide>
        </div>

        <div className="text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <BsFillBootstrapFill className="text-3xl text-violet-600" />
          </Slide>
          <Slide direction="right">
            <h1>Bootstrap</h1>
          </Slide>
        </div>
        <div className="text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <img
              src="https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000"
              className="text-3xl w-10 text-violet-600"
            />
          </Slide>
          <Slide direction="right">
            <h1>Material UI</h1>
          </Slide>
        </div>

        <div className=" text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <FaReact className="text-4xl text-blue-400 " />
          </Slide>
          <Slide direction="right">
            <h1 className="">React JS</h1>
          </Slide>
        </div>
        <div className=" text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <SiTypescript className="text-4xl bg-blue-400 text-white " />
          </Slide>
          <Slide direction="right">
            <h1 className="">TypeScript</h1>
          </Slide>
        </div>
        <div className=" text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <SiNextdotjs className="text-4xl  " />
            {/* <RiNextjsFill className="text-4xl  " /> */}
          </Slide>
          <Slide direction="right">
            <h1 className="">Next JS</h1>
          </Slide>
        </div>

        <div className="text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <SiExpress className="text-4xl text-green-500" />
          </Slide>
          <Slide direction="right">
            <h1>Express JS</h1>{" "}
          </Slide>
        </div>
        <div className="text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <BiLogoMongodb className="text-4xl text-emerald-500 " />
          </Slide>
          <Slide direction="right">
            <h1>MongoDB</h1>{" "}
          </Slide>
        </div>

        <div className="text-xl font-semibold flex gap-6">
          <Slide>
            <BiLogoFirebase className="text-4xl text-yellow-400" />
          </Slide>
          <Slide direction="right">
            <h1>Firebase</h1>
          </Slide>
        </div>
        <div className="text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <SiPrisma className="text-4xl text-black" />
          </Slide>
          <Slide direction="right">
            <h1>Prisma</h1>{" "}
          </Slide>
        </div>
        <div className="text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <BiLogoPostgresql className="text-4xl " />
          </Slide>
          <Slide direction="right">
            <h1>PostgreSQL</h1>{" "}
          </Slide>
        </div>

        {/* <div className="text-xl font-semibold flex gap-6">
          <Slide>
            {" "}
            <SiMysql className="text-4xl text-[#00718B]" />
          </Slide>
          <Slide direction="right">
            <h1>My SQL</h1>{" "}
          </Slide>
        </div> */}
        {/* </div> */}
        {/* <div className="md:col-span-1 col-span-2 flex flex-col justify-center place-self-center gap-7 md:m-0 mt-8 ms-0">
        
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
