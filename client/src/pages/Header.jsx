import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Notification from "./component/chat/Notification";
import Shaki from "../assets/shaki2.png";

export default function Header() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <>
      <header className="sticky top-0 z-50 p-4 dark:bg-gray-100 dark:text-gray-800 bg-slate-600">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src={Shaki}
              alt="Custom Icon"
              className="w-20 h-12 dark:text-violet-600"
            />
          </a>

          <div className="text-white flex items-center">
            Good morning! {user.name}
          </div>

          <div className="items-center flex-shrink-0 hidden lg:flex">
            <div className="flex items-center">
              <Notification />
            </div>
            <div className="ml-4">
              <button className="border-gray-300 border-4 rounded-full bg-gray-300 text-black p-1">
                <Link onClick={logoutUser} to="/login">
                  logout
                </Link>
              </button>
            </div>
          </div>

          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
