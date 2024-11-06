import React from "react";
import { MdFilterListAlt } from "react-icons/md";

export default function ResultSearch() {
  return (
    <div>
      <div className="flex items-center justify-between w-2/3 mx-auto">
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
      
    </div>
  );
}
