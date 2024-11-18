import React, { useState, useEffect } from "react";
import api from "../Config/api.ts";
import { useStore } from "./Store/store.ts";
import ResultSearch from "./ResultSearch.tsx";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
export default function ArticaleStart() {
  const { articles, setArticles } = useStore();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 5;

  const fetchArticles = async () => {
    setLoading(true);
    try {
      api
        .get(`/api/articles?page=${page}&per_page=${pageSize}`)
        .then((res) => {
          setArticles(res.data.articles);
          console.log("کاوش", res.data.articles);

          setTotalPages(res.data.total_pages);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error("Error fetching articles:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load articles whenever the page changes
  useEffect(() => {
    fetchArticles();
  }, [page]);

  return (
    <div className="mb-4">
      <div className="flex justify-end lg:w-1/2 w-5/6 h-auto mx-auto">
        <button
          onClick={() => fetchArticles()}
          className="text-white bg-blue-700 px-8 text-base hover:bg-blue-500 hover:scale-110 duration-300 font-semibold py-3 rounded-md"
        >
          {loading ? <span>صبر کنید</span> : <span>کاوش</span>}
        </button>
      </div>

      <ResultSearch />

      {/* Pagination */}
      <div className="flex justify-center pb-10 my-4">
        {page > 1 && (
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-blue-500 text-white rounded-l-md hover:bg-blue-600"
          >
            <FaAngleDoubleLeft />
          </button>
        )}
        <span className="px-4 py-2 text-gray-700">
          {page} / {totalPages}
        </span>
        {page < totalPages && (
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
          >
            <FaAngleDoubleRight />
          </button>
        )}
      </div>
    </div>
  );
}
