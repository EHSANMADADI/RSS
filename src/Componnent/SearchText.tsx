import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
export default function SearchText() {
  return (
    <div dir="rtl" className="my-5 bg-white w-1/2 mx-auto rounded border-b-[3px] border border-gray-300">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <span className="text-4xl text-gray-400 px-2 py-1 m-1">
            <CiSearch />
          </span>
          <div className="flex items-center w-full">
            <input
              placeholder="متن جست و جو"
              className="px-3 py-3 font-bold text-sm  w-full outline-none hover:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center">
          <button className="bg-blue-700 flex items-center text-white pr-7 pl-4 py-4 crated hover:bg-blue-800 duration-200 hover:scale-105">
          <span className="text-3xl mx-2"><IoIosSearch/></span>
            جست و جو کردن
          </button>
         
        </div>
      </div>
    </div>
  );
}
