import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-1">
        <Link to="/">
          <h1 className="font-bold text-md sm:text-xl flex">
            <span className="text-slate-600">Sahar</span>
            <span className="text-slate-900">Properties</span>
          </h1>
        </Link>
        <form
          action=""
          className="bg-slate-100 rounded-lg flex items-center justify-center"
        >
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent max-w-64 focus:outline-none w-24 sm:w-64 p-2"
          />
          <button>
            <FaSearch className="text-slate-800 ml-2 mr-2" />
          </button> 
        </form>
        <ul className="flex gap-4 flex-wrap">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:border-b-2 border-indigo-400">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:border-b-2 border-indigo-400">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className=" text-slate-700 hover:border-b-2 border-indigo-400"> Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
