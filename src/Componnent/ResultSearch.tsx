import React, { useEffect } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { useStore } from "./Store/store.ts";
import { TbMoodEmpty } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CiSquareRemove } from "react-icons/ci";
import api from "../Config/api.ts";
interface delet{
  deleteArticles:(id:number)=>void
}
export default function ResultSearch({deleteArticles}:delet) {
  const { articles} = useStore();
  return (
    <div>
      {articles.length === 0 && (
        <span className="w-full flex justify-center font-bold text-2xl text-gray-500 mt-16  items-center ">
          موردی یافت نشد
          <span className="text-red-700 mx-2">
            <TbMoodEmpty />
          </span>{" "}
        </span>
      )}
      {articles.length > 0 && (
        <>
          <div className="flex items-center justify-between lg:w-1/2 w-11/12 mx-auto my-5">
            <div className="text-gray-500 text-lg flex items-center font-semibold ">
              {/* <span>
                <MdFilterListAlt />
              </span> */}
              {/* <span>فیلتر کردن</span> */}
            </div>
            <span className="text-gray-500 text-lg font-semibold mx-1">
              : نتیجه جست‌وجو
            </span>
          </div>
          {articles.map((articel, i) => {
            return (
              <div
                key={i}
                className="lg:w-1/2 w-5/6 bg-white rounded-md flex justify-between items-center  px-5 py-3 mx-auto my-5 cursor-pointer hover:bg-gray-300 duration-300 hover:scale-110"
              >
                <div className="md:w-5/6 w-full">
                  <p className="text-blue-700 font-bold md:text-xl text-lg leading-8 mx-3">
                    {articel.title}
                  </p>
                  <div className="flex items-center justify-between my-2">
                    <p className="text-gray-400 font-normal text-base">
                      {articel.source}
                    </p>
                    <p className="text-green-700 font-bold md:text-xl text-lg leading-8 mx-3">
                      {articel.keywords &&
                        articel.keywords.map((item) => {
                          return <span className="mr-1">{item}</span>;
                        })}
                    </p>
                    <p className="text-gray-400 font-normal text-base">
                      {articel.published}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Link className="md:text-3xl text-xl" to={articel.link}>
                    <FaExternalLinkAlt />
                  </Link>
                  <span
                    onClick={() => deleteArticles(articel.id)}
                    className="text-red-700 lg:text-4xl text-base mx-3"
                  >
                    <CiSquareRemove />
                  </span>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
