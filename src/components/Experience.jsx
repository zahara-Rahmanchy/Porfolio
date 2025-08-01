import {Fade, Slide} from "react-awesome-reveal";
// import {FaGithub, FaLinkedin} from "react-icons/fa";
// bg-[#faf6e0]
const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto p-3 rounded-md bg-opacity-90  bg-transparent   ">
      <div>
        {" "}
        <h1 className="text-4xl font-bold p-2">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#3d60b7] to-[#6DA3D7] ">
            {" "}
           Experience
          </span>
          <Slide>
            <hr className=" w-24 h-1 bg-gradient-to-r from-[#3d60b7] via-[#7d98df] to-[#d24341]" />
          </Slide>
        </h1>

       <div className="flex md:flex-row flex-col justify-between">
        <div className="ms-10">
            <h3 className="text-blue-900 font-semibold text-xl mt-3">Frontend Developer</h3>
            <h6 className="text-rose-700 font-medium text-lg">Mednaath</h6>
        </div>

        <p className="text-blue-900">October, 2023 - March,2024</p>
       </div>

        <Fade>
            <ul className="list-disc pl-5 mt-4 text-blue-900 space-y-2 text-[17px] max-w-5xl mx-auto">
            <li>Designed and developed responsive web pages using JavaScript, Next.js, TypeScript, CSS, and Tailwind CSS.</li>
            <li>Refactored backend APIs to align with dynamic user requirements and integrated them into the frontend.</li>
            <li>Customized AI voice responses and debugged API outputs to improve system performance.</li>
            <li>Manually tested voice calling features to ensure smooth audio clarity, connectivity, and real-time interaction.</li>
          </ul>
          {/* <p className="p-2 t my-3  ">
            
          </p> */}
        </Fade>
      </div>
    </div>
  );
};

export default Experience;
