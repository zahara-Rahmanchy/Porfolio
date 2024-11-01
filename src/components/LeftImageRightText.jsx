/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */

import {Slide} from "react-awesome-reveal";
import {BsGithub, BsLink45Deg} from "react-icons/bs";
import CarousalComponent from "./CarousalComponent";

const LeftImageRightText = ({
  title,
  type,
  description,
  img,
  client,
  server,
  website,
}) => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-3 p-8 mb-20 bg-opacity-90 shadow-2xl shadow-cyan-800">
        <div className="lg:col-span-2 col-span-3 align-middle place-self-center w-full">
          <h2 className="card-title text-4xl text-blue-900 font-semibold">
            {title}
          </h2>
          <p className="text-[#ea625b] mb-6 mt-3">{type}</p>
          <div className=" bg-none w-full h-full  flex justify-center items-center">
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-2xl ">
              {/* <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                  <img
                    src={img}
                    alt="A Summer Camp Website"
                    border="0"
                    className="w-full object-cover object-top rounded-lg"
                  ></img>
                </div> */}
              <CarousalComponent images={img} />
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* first div description */}
        <div className="lg:col-span-1 col-span-3  place-self-center ">
          <Slide>
            {" "}
            <div className="card w-full">
              <div className="card-actions justify-left shadow-lg p-6  w-full lg:mt-28">
                <p>{description}</p>
                <div className="p-4 flex md:flex-row justify-between flex-col space-y-2 md:space-y-0">
                  <div className="flex">
                    <BsGithub className="text-3xl" />
                    <a
                      href={client}
                      target="_blank"
                      className="text-blue-700 text-lg ms-5"
                      rel="noreferrer"
                    >
                      Client
                    </a>
                    {server !== "" ? (
                      <a
                        href={server}
                        target="_blank"
                        className="text-blue-700 text-lg ms-2"
                      >
                        <span>| Server </span>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>{" "}
                  <div className="flex">
                    {" "}
                    <BsLink45Deg className="text-3xl md:ms-5 md:me-1 me-4" />
                    <a
                      href={website}
                      target="_blank"
                      className="text-blue-700 text-lg "
                    >
                      Website Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default LeftImageRightText;
