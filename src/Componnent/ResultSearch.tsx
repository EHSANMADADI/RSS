import React from "react";
import { MdFilterListAlt } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function ResultSearch() {
  return (
    <div>
      <div className="flex items-center justify-between lg:w-1/2 w-11/12 mx-auto">
        <div className="text-gray-500 text-lg flex items-center font-semibold ">
          <span>
            <MdFilterListAlt />
          </span>
          <span>فیلتر کردن</span>
        </div>
        <span className="text-gray-500 text-lg font-semibold mx-1">
          : نتیجه جست‌وجو
        </span>
      </div>
      <div
        dir="rtl"
        className="lg:w-1/2 w-5/6 bg-white rounded-md flex justify-between items-center  px-5 py-3 mx-auto my-5 cursor-pointer hover:bg-gray-300 duration-300 hover:scale-110"
      >
        <div className="md:w-5/6 w-full">
          <p className="text-blue-700 font-bold md:text-xl text-lg leading-8 mx-3">
            در اینجا متن هدر نمایش داده خواهد شدو همچنین کلمات کلیدی که در بالا
            انتخاب شده است باید به رنگ زرد در آید
          </p>
          <div className="flex items-center justify-between">
            <p className="text-gray-400 font-black text-base">منبع:ایسنا</p>
            <p className="text-gray-400 font-black text-base">تاریخ:1403/5/5</p>
          </div>
        </div>
        <span className="md:text-3xl text-xl">
          <FaExternalLinkAlt />
        </span>
      </div>
    </div>
  );
}
