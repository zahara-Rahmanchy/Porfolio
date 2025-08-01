/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */

import {Slide} from "react-awesome-reveal";
import {BsGithub, BsLink45Deg} from "react-icons/bs";
import CarousalComponent from "./CarousalComponent";
const RightImageLeftText = ({
  title,
  type,
  description,
  img,
  client,
  server,
  website,
}) => {
  return (
    <div className="bg-transparent pb-24 shadow-2xl shadow-cyan-800 my-20 rounded-lg">
      <div className="p-7">
        {" "}
        <h2 className="card-title text-4xl text-blue-900 font-semibold ">
          {title}
        </h2>
        <p className="text-[#ea625b] mb-6 mt-3">{type}</p>
      </div>
      <div className="grid grid-cols-3 p-5 ">
        <div className="lg:col-span-1 col-span-3 place-content-center order-2 lg:order-1 ">
          {" "}
          <Slide direction="right">
            {" "}
            <div className="card">
              <div className="card-actions justify-left shadow-lg p-6 w-full">
                <p>{description}</p>
                <div className="p-4 flex md:flex-row flex-col justify-between space-y-2 md:space-y-0">
                  <div className="flex">
                    <BsGithub className="text-3xl" />{" "}
                    <a
                      href={client}
                      target="_blank"
                      className="text-blue-700 text-lg ms-5"
                    >
                      {server !== "" ? "Client " : "Code"}
                    </a>{" "}
                    {server !== "" && (
                      <>
                        <span>{" | "}</span>
                        <a
                          href={server}
                          target="_blank"
                          className="text-blue-700 text-lg ms-2"
                        >
                          <span> Server </span>
                        </a>
                      </>
                    )}
                  </div>
                  <div className="flex flex-row">
                    <BsLink45Deg className="text-3xl md:ms-5 md:me-1 me-4" />
                    <a
                      href={website}
                      target="_blank"
                      className="text-blue-700 text-lg"
                    >
                      Website Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
        <div className="lg:col-span-2 col-span-3   place-self-center  md:mt-5 lg:mt-0 order-1 lg-order-2 bg-transparent">
          <div className=" bg-none w-full h-full  flex justify-center items-center">
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-2xl">
              {/* <div className="relative max-w-2xl bg-transparent  max-h-[450px] overflow-hidden rounded-lg border-t-4 border-s-4 border-e-4 border-b-4 border-[#dee5f6]"> */}
              {/* <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                  <img
                    src={img}
                    alt=""
                    className="w-full object-cover object-top rounded-lg"
                  />
                </div> */}
              <CarousalComponent images={img} />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImageLeftText;
