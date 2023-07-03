import React from "react";

import {BsGithub, BsLink45Deg} from "react-icons/bs";
import {Bounce, Slide} from "react-awesome-reveal";
const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto p-3 rounded-md  my-14">
      <h1 className="text-4xl font-bold p-2 bg-[#faf6e0]">
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#3d60b7] to-[#6DA3D7] ">
          {" "}
          Projects
        </span>

        <Slide>
          <hr className=" w-20 h-1 bg-gradient-to-r from-[#3d60b7] via-[#7d98df] to-[#d24341]" />
        </Slide>
      </h1>
      <section>
        {/* first */}
        <div className="grid grid-cols-3 p-8 mb-20 rounded-lg bg-[#faf6e0]">
          <div className="md:col-span-2 col-span-3  place-self-center">
            <h2 className="card-title text-4xl text-blue-900 font-semibold">
              Craftopia
            </h2>
            <p className="text-[#ea625b] mb-6">A Mern Stack Application</p>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-2xl">
              <div className="relative max-w-2xl h-[450px] overflow-hidden rounded-lg border-t-4 border-s-4 border-e-4 border-b-4 border-[#dee5f6]">
                <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                  <img
                    src="https://i.ibb.co/gFB4H7Y/screencapture-127-0-0-1-5175-2023-07-03-20-23-09.png"
                    alt="A Summer Camp Website"
                    border="0"
                    className="w-full object-cover object-top rounded-lg"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 col-span-3  place-self-center md:mt-24">
            <Slide>
              {" "}
              <div className="card">
                <div className="card-actions justify-left shadow-lg p-6 w-full">
                  <p>
                    Craftopia is a web application built using React JS,
                    Tailwind CSS,Express JS and various technologies. It offers
                    a range of features for students, instructors, and
                    administrators. The home page showcases popular classes,
                    instructors, and camp schedules. Dashboards are available
                    for each user type. Students can select classes, instructors
                    can manage their classes, and admins handle user management
                    and class approvals. Payment is facilitated through Stripe.
                    User authentication is implemented using JWT tokens and
                    Firebase. MongoDB serves as the database. Craftopia
                    integrates various packages for enhanced functionality.
                    Firebase and Vercel are used for hosting and deployment.
                  </p>
                  <div className="p-4 flex justify-evenly ">
                    <BsGithub className="text-3xl" />
                    <a
                      href="https://github.com/zahara-Rahmanchy/Craftopia-Summer-Camp-client-"
                      target="blank"
                      className="text-blue-700 text-lg ms-5"
                    >
                      Client
                    </a>
                    <a
                      href="https://github.com/zahara-Rahmanchy/Craftopia-Summer-Camp-server"
                      target="blank"
                      className="text-blue-700 text-lg ms-2"
                    >
                      | Server
                    </a>
                    <BsLink45Deg className="text-2xl ms-5" />
                    <a
                      href="https://craftopia-d6da7.web.app/"
                      target="blank"
                      className="text-blue-700 text-lg "
                    >
                      {" "}
                      Website Link
                    </a>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
        {/* second */}
        <div className="grid grid-cols-3 p-5  bg-[#faf6e0] my-20 rounded-lg">
          <div className="md:col-span-1 col-span-3 place-content-center">
            {" "}
            <h2 className="card-title text-4xl text-blue-900 font-semibold">
              Funfinity
            </h2>
            <p className="text-[#ea625b] mb-6">A Mern Stack Application</p>
            <Slide direction="right">
              {" "}
              <div className="card">
                <div className="card-actions justify-left shadow-lg p-6 w-full">
                  <p>
                    Funfinity is a vibrant toy selling website that utilizes
                    React.js, Tailwind CSS, and Express.js. It offers a diverse
                    selection of toys for children, presented in an appealing
                    and interactive manner. Users can explore the website's home
                    page, which features a captivating banner, an enticing toy
                    gallery, and informative sections. The "All Toys" page
                    allows users to browse and search for toys, with sorting
                    options available. Registered users can add new toys, manage
                    their inventory, and update or delete existing toy listings.
                    Funfinity incorporates Firebase authentication for seamless
                    login and signup functionality, ensuring secure access to
                    user accounts. With its attractive design and user-friendly
                    features, Funfinity provides an enjoyable and seamless
                    shopping experience for toy enthusiasts of all ages.
                  </p>
                  <div className="p-4 flex justify-evenly">
                    <BsGithub className="text-3xl" />{" "}
                    <a
                      href="https://github.com/zahara-Rahmanchy/Funfinity-client-"
                      target="blank"
                      className="text-blue-700 text-lg ms-5"
                    >
                      Client
                    </a>
                    <a
                      href="https://github.com/zahara-Rahmanchy/Funfinity-server"
                      target="blank"
                      className="text-blue-700 text-lg ms-2"
                    >
                      | Server
                    </a>
                    <BsLink45Deg className="text-2xl ms-5" />
                    <a
                      href="https://funfinity-toys.web.app/"
                      target="blank"
                      className="text-blue-700 text-lg"
                    >
                      Website Link
                    </a>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
          <div className="md:col-span-2 col-span-3  place-self-center ">
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-2xl">
              <div className="relative max-w-2xl  h-[450px] overflow-hidden rounded-lg border-t-4 border-s-4 border-e-4 border-b-4 border-[#dee5f6]">
                <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                  <img
                    src="https://i.ibb.co/92R3YSc/funfinity-toys.png"
                    alt=""
                    className="w-full object-cover object-top rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd */}
        <div className="grid grid-cols-3 p-5  bg-[#faf6e0] my-20 rounded-lg">
          <div className="md:col-span-2 col-span-3 place-self-center">
            <h2 className="card-title text-4xl text-blue-900 font-semibold mt-5">
              Flavour Adventure
            </h2>
            <p className="text-[#ea625b] mb-6">A React Applicaton</p>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-2xl ">
              <div className="relative max-w-2xl  h-[450px] overflow-hidden rounded-lg border-t-4 border-s-4 border-e-4 border-b-4 border-[#dee5f6]">
                <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                  <img
                    src="https://i.ibb.co/r78gTyz/flavor-adventure.png"
                    alt=""
                    className="w-full object-cover object-top rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 col-span-3 place-content-center md:mt-28">
            <Slide>
              {" "}
              <div className="card">
                <div className="card-actions justify-left shadow-lg p-6 w-full">
                  <p>
                    Craftopia is a web application built using React JS,
                    Tailwind CSS,Express JS and various technologies. It offers
                    a range of features for students, instructors, and
                    administrators. The home page showcases popular classes,
                    instructors, and camp schedules. Dashboards are available
                    for each user type. Students can select classes, instructors
                    can manage their classes, and admins handle user management
                    and class approvals. Payment is facilitated through Stripe.
                    User authentication is implemented using JWT tokens and
                    Firebase. MongoDB serves as the database. Craftopia
                    integrates various packages for enhanced functionality.
                    Firebase and Vercel are used for hosting and deployment.
                  </p>
                  <div className="p-4 flex justify-evenly">
                    <BsGithub className="text-3xl" />
                    <a
                      href="https://github.com/zahara-Rahmanchy/Flavor-Adventure-client-"
                      target="blank"
                      className="text-blue-700 text-lg ms-5"
                    >
                      Client
                    </a>
                    <a
                      href="https://github.com/zahara-Rahmanchy/Flavour-Adventure-server-"
                      target="blank"
                      className="text-blue-700 text-lg ms-2"
                    >
                      | Server
                    </a>
                    <BsLink45Deg className="text-2xl ms-5" />
                    <a
                      href="https://flavor-adventure-client-side.web.app/"
                      target="blank"
                      className="text-blue-700 text-lg"
                    >
                      Website Link
                    </a>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
