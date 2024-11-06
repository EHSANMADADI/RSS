import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoLinkOutline } from "react-icons/io5";
import { MdAddLink } from "react-icons/md";
export default function SearchLink() {
  return (
    <div
      dir="rtl"
      className="my-5 w-2/3 mx-auto flex items-center justify-start "
    >
      <div className="flex items-center justify-between w-5/6 bg-white rounded border-b-[3px] border border-gray-300 ">
        <div className="flex items-center">
          <span className="text-4xl text-gray-400 px-2 py-1 m-1">
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
            <span className="text-3xl mx-2">
              <MdAddLink />
            </span>
            افزودن صفحات وب
          </button>
        </div>
      </div>
      <span className="text-sm text-blue-800 font-bold px-1 cursor-pointer">
        مشاهده لینک های اضافه شده
      </span>
      <span className="text-base text-blue-800 font-bold">
        <IoLinkOutline />
      </span>
    </div>
  );
}
