import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoLinkOutline } from "react-icons/io5";
import { MdAddLink } from "react-icons/md";
export default function SearchLink() {
  return (
    <div
      dir="rtl"
      className="my-5 lg:w-1/2 w-5/6 mx-auto flex items-center justify-start "
    >
      <div className="flex items-center justify-between w-10/12 bg-white rounded border-b-[3px] border border-gray-300 ">
        <div className="flex items-center">
          <span className="md:text-4xl text-2xl text-gray-400 px-2 py-1 m-1">
            <MdAddLink />
          </span>
          <div className="flex items-center w-full">
            <input
              placeholder="لینک صفحات وب..."
              className="px-3 py-3 font-bold text-sm  w-full outline-none hover:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center">
          <button className="bg-blue-700 flex items-center text-white pr-7 pl-4 py-4 crated hover:bg-blue-800 duration-200 hover:scale-105">
            <span className="lg:text-3xl text-base mx-2">
              <MdAddLink />
            </span>
            <span className="lg:inline hidden">افزودن صفحات وب</span>
          </button>
        </div>
      </div>
      <span className="text-sm text-blue-800 font-bold px-1 cursor-pointer hover:border-b hover:scale-105 mx-1 hover:border-blue-300 duration-300">
        مشاهده لینک های اضافه شده
      </span>
      
    </div>
  );
}
