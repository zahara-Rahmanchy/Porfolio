/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from "react";

import {BsGithub, BsLink45Deg} from "react-icons/bs";
import {Bounce, Slide} from "react-awesome-reveal";
import mac from "../assets/mac.png";
import macb from "../assets/macbook.png";
import projectData from "../assets/projectData";
import LeftImageRightText from "./LeftImageRightText";
import RightImageLeftText from "./RightImageLeftText";
import TabsContainer from "./TabsContainer";
const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto p-3 rounded-lg  my-14">
      <h1 className="text-4xl font-bold p-2  bg-transparent ">
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#3d60b7] to-[#6DA3D7] ">
          {" "}
          My Projects
        </span>

        <Slide>
          <hr className=" w-20 h-1 bg-gradient-to-r from-[#3d60b7] via-[#7d98df] to-[#d24341]" />
        </Slide>
      </h1>
      <section className="mt-20">
        <TabsContainer />
        {/* {projectData.map((item, index) =>
          index % 2 === 0 ? (
            <>
              <LeftImageRightText
                title={item.title}
                type={item.type}
                description={item.description}
                client={item.github_client}
                server={item.github_server ? item.github_server : ""}
                img={item.image}
                website={item.website_link}
              />
            </>
          ) : (
            <>
              <RightImageLeftText
                title={item.title}
                type={item.type}
                description={item.description}
                client={item.github_client}
                server={item.github_server ? item.github_server : ""}
                img={item.image}
                website={item.website_link}
              />
            </>
          )
        )} */}
      </section>
    </div>
  );
};

export default Projects;
