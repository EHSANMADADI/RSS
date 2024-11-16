import React, { useState } from "react";
import api from "../Config/api.ts";
import { useStore } from "./Store/store.ts";
export default function ArticaleStart() {
  const { articles, setArticles } = useStore();
  const [loading, setLoading] = useState(false);
  const send = () => {
    setLoading(true);
    api
      .get("/api/articles")
      .then((res) => {
        setLoading(false);
        console.log(res);
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="flex justify-end w-1/2  mx-auto">
      <button
        onClick={send}
        className="text-white bg-blue-700 px-8 text-base hover:bg-blue-500 hover:scale-110 duration-300 font-semibold py-3 rounded-md"
      >
        {loading&&<span>صبر کنید</span>}
        {!loading&&<span>کاوش</span>}
      </button>
    </div>
  );
}
