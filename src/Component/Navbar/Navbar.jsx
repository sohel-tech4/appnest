import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const nav = (
    <div className="md:flex gap-5 text-lg">
      <Link to={"/"}>
        <li>Home</li>
      </Link>
      <Link to={"/apps"}>
        <li>Apps</li>
      </Link>
      <Link to={"/installation"}>
        <li>Intallation</li>
      </Link>
    </div>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <Link to={"/"}>
          <a className="flex items-center gap-2">
            <img className="w-[50px]" src={logo} alt="" />
            <h1 className="text-2xl font-bold">AppNest</h1>
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"https://github.com/sohel-tech4/appnest.git"}><a className="btn md:text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"> <FaGithub /> Contribute</a></Link>
      </div>
    </div>
  );
};

export default Navbar;
