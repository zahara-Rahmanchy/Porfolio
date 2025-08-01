/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import projectData from "../assets/projectData";
import CarousalComponent from "./CarousalComponent";
import {BsGithub, BsLink45Deg} from "react-icons/bs";

import ".././index.css";
import {useState} from "react";
const chunkProjects = (data, chunkSize) => {
  const result = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    result.push(data.slice(i, i + chunkSize));
  }
  return result;
};
const projectChunks = chunkProjects(projectData, 4);
const TabsContainer = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track open details

  const toggleDetails = index => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the visibility of details
  };
  return (
    <>
      <Tabs>
        <TabList className="flex justify-between mb-20 rounded-full border mx-auto lg:w-[60%] w-full shadow-md overflow-hidden">
          {projectChunks.map((_, index) => (
            <Tab
              className=" py-2 text-center w-full cursor-pointer transition-all duration-300 ease-in-out font-semibold 
                       text-blue-800 bg-[#fff4eb] hover:bg-gradient-to-r from-purple-400 via-pink-200 to-sky-200
                       border-r border-r-purple-300 last:border-r-0 focus:border-0 focus:outline-none"
              selectedClassName=" bg-gradient-to-r from-purple-400 via-pink-200 to-sky-200 border-0"
              key={index}
            >
              Tab {index + 1}
            </Tab>
          ))}
        </TabList>

        {projectChunks.map((chunk, index) => (
          <TabPanel key={index}>
            <div className="card-container grid md:grid-cols-2 grid-cols-1 gap-20 justify-center w-full">
              {chunk.map((project, idx) => (
                <div key={idx} className="card">
                  <figure className="h-[400px] shadow-xl rounded-lg">
                    <CarousalComponent images={project.image} />
                  </figure>
                  <div className="card-body">
                    <div className="relative md:flex-row flex-col md:py-0 py-3 card-actions justify-between shadow-xl rounded-lg px-3 w-full md:items-center bg-[#fff4eb]">
                      <div className="flex items-center ml-3 z-[1] w-full md:w-auto">
                        <BsGithub className="text-3xl text-sky-950 bg-white rounded-full" />{" "}
                        <a
                          href={project.github_client}
                          target="_blank"
                          className="text-blue-700 text-lg ms-5"
                        >
                          {project.github_server ? "Client " : "Code"}
                        </a>
                        {project.github_server && (
                          <>
                            <span className="mx-2">{" | "}</span>
                            <a
                              href={project.github_server}
                              target="_blank"
                              className="text-blue-700 text-lg "
                            >
                              <span>Server </span>
                            </a>
                          </>
                        )}{" "}
                      </div>
                      <span className="flex cursor-pointer">
                        <BsLink45Deg className="text-3xl md:mx-5 ms-3  me-4 w-7 rounded-full bg-sky-950 text-white" />
                        <a
                          href={project.website_link}
                          target="_blank"
                          className="text-blue-700 text-lg"
                        >
                          Website Link
                        </a>
                      </span>

                      <button
                        onClick={() => toggleDetails(idx)}
                        className="w-full md:w-auto my-2 me-2 md:ms-0 mx-1 btn bg-purple-500 text-white h-2 btn-sm hover:bg-gradient-to-r from-[#3d60b7] via-[#65a6e4] to-[#3d60b7]"
                      >
                        {openIndex === idx ? "Hide Details" : "Details"}
                      </button>

                      <div
                        className={`z-0 absolute transition-translate duration-700 ease-in-out  border border-gray-300 rounded-md shadow-md p-4 
                      ${
                        openIndex === idx
                          ? "bg-conic-gradient-animation relative opacity-100 translate-y-1 mb-8"
                          : "opacity-0 -translate-y-5 pointer-events-none"
                      }`}
                      >
                        <p className=" text-md">{project.description}</p>

                        <h6 className="font-semibold my-3 text-lg">
                          Tech Stack
                          <hr className=" w-10 h-1 bg-gradient-to-r from-[#3d60b7] via-[#7d98df] to-[#d24341]" />
                        </h6>
                        <ul className=" list-disc flex flex-wrap mb-3">
                          {project?.technologies?.map((info, index) => (
                            <li
                              key={index}
                              className="ms-10 w-full sm:w-1/2 lg:w-1/3 whitespace-nowrap"
                            >
                              {info}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default TabsContainer;
