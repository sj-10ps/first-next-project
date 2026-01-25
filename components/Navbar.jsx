import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/logo-white.png";
import Profile from '@/assets/images/profile.png'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 border-b border-blue-500 mx-auto">
      <div className="md:px-12 px-6 py-4 flex justify-between ">
        <div className="hamburger  md:hidden ">
            h
        </div>
        <div className="flex gap-3 ">
          
           <Image src={Logo} className="w-11 " alt="" ></Image>
         
          <div className="hidden gap-4 items-center md:flex">
            <h2 className="text-2xl font-bold text-white flex shrink-0">
              PropertyPulse
            </h2>
            <button className="nav-btn bg-gray-900">Home</button>
            <button className="nav-btn">Properties</button>
            <button className="nav-btn">Add property</button>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="bg-gray-600 hover:bg-gray-800 px-3 hidden gap-2 items-center rounded-lg md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="google"
              className="w-4 h-4"
            >
              <path
                fill="#fbbb00"
                d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
              ></path>
              <path
                fill="#518ef8"
                d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
              ></path>
              <path
                fill="#28b446"
                d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
              ></path>
              <path
                fill="#f14336"
                d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
              ></path>
            </svg>
            <span className="text-lg text-white">Login or Register</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative bg-gray-800 w-8 h-8 p-1 flex items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="grey"
                
                className="size-6 stroke-gray-400 hover:stroke-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
              <div className="absolute bg-red-500 -top-2 right-0 h-4 min-w-4 rounded-full text-center text-[10px] text-white">
                <span>3</span>
              </div>
            </div>
            <Image src={Profile} className="h-8 w-8 rounded-full" alt=""></Image>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
