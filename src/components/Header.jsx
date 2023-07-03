import React from "react";
import {Link} from "react-scroll";

const Header = () => {
  return (
    <div className="navbar bg-[#fffcef] fixed w-full z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="hover:text-[#3d60b7]">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-[#3d60b7]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500}>
                Education
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex sticky">
        <ul className="menu menu-horizontal px-1 bg-none text-[17px] gap-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-[#3d60b7] hover:font-semibold hover:bg-transparent"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-[#3d60b7] hover:font-semibold hover:bg-transparent"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="hover:text-[#3d60b7] hover:font-semibold hover:bg-transparent"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-[#3d60b7] hover:font-semibold hover:bg-transparent"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-[#3d60b7] hover:font-semibold hover:bg-transparent"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-[#3d60b7] hover:font-semibold hover:bg-transparent"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="MyResume.pdf"
          className="btn bg-gradient-to-r from-[#6285de] to-[#6DA3D7] text-red-50"
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
