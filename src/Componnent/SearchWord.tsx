/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import filterIcon from "../Image/Group 10.svg";
import KeyWord from "./KeyWord.tsx";
import { useStore } from "./Store/store.tsx";
import api from "../Config/api.ts";
import Loader from "../Image/tail-spin.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Keyword = {
  id: number;
  keyword: string;
};
export default function SearchWord() {
  const { keywords, setKeywords } = useStore();
  const [Loading, setLoading] = useState(false);
  const [words, setWords] = useState<Keyword[]>(keywords);
  const [inputWord, setInputWord] = useState("");
  useEffect(() => {
    setKeywords(words);
  }, [words]);

  // تابع افزودن کلمه به لیست
  const addWord = () => {
    if (inputWord.trim() !== "") {
      setLoading(true);
      api
        .post("/api/keywords", { keyword: inputWord })
        .then((response) => {
          console.log(response);
          setWords([...words, response.data.keyword]);
          setInputWord(""); // پاک کردن ورودی بعد از افزودن
          setLoading(false);
          toast.success("کلمه کلیدی با موفقیت اضافه شد");
        })
        .catch((err) => {
          console.log("err=>>>>", err);
          setLoading(false);
          toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
        })
        .finally(() => {
          setLoading(false);
          setInputWord("");
        });
    }
  };
  const deleteWord = (id: number) => {
    api
      .delete(`/api/keywords/${id}`)
      .then((res) => {
        console.log(res);
        setWords(words.filter((item) => item.id !== id));
      })
      .catch((err) => {
        toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
        console.log(err);
      });
  };
  return (
    <>
      <div
        dir="rtl"
        className="my-5 lg:w-1/2 w-5/6 mx-auto flex items-center justify-start"
      >
        <div className="flex items-center justify-between w-4/6 bg-white rounded border-b-[3px] border border-gray-300 ">
          <div className="flex items-center">
            <span className="text-4xl text-gray-400 px-2 py-1 m-1">
              <img className="text-gray-600 opacity-40" src={filterIcon} />
            </span>
            <div className="flex items-center w-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addWord();
                }}
              >
                <input
                  placeholder="کلمات کلیدی"
                  className="px-3 py-3 font-bold text-sm w-full outline-none hover:outline-none"
                  value={inputWord}
                  onChange={(e) => setInputWord(e.target.value)} // بروزرسانی مقدار ورودی
                />
              </form>
            </div>
          </div>

          <div className="flex items-center">
            <button
              className="bg-blue-700 flex items-center text-white pr-7 pl-5 py-4 crated hover:bg-blue-800 duration-200 hover:scale-105"
              onClick={addWord} // فراخوانی تابع افزودن کلمه هنگام کلیک
            >
              {!Loading && (
                <>
                  <span className="md:text-3xl text-xl mx-2">
                    <IoMdAdd />
                  </span>
                  <span className="lg:inline hidden">اضافه کردن</span>
                </>
              )}
              {Loading && <img className="max-w-9 max-h-9" src={Loader} />}
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-5/6 mx-auto flex items-center flex-wrap justify-end">
        <KeyWord words={words} onDelete={deleteWord} />
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}
