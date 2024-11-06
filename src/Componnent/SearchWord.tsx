/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import filterIcon from "../Image/Group 10.svg";
import KeyWord from "./KeyWord.tsx";

interface Word {
  content: string;
}

export default function SearchWord() {
  const [words, setWords] = useState<Word[]>([]);
  const [inputWord, setInputWord] = useState("");

  // تابع افزودن کلمه به لیست
  const addWord = () => {
    if (inputWord.trim() !== "") {
      setWords([...words, { content: inputWord.trim() }]);
      setInputWord(""); // پاک کردن ورودی بعد از افزودن
    }
  };
  const deleteWord = (index: number) => {
    setWords(words.filter((_, i) => i !== index));
  };
  return (
    <>
      <div
        dir="rtl"
        className="my-5 w-2/3 mx-auto flex items-center justify-start"
      >
        <div className="flex items-center justify-between w-4/6 bg-white rounded border-b-[3px] border border-gray-300 ">
          <div className="flex items-center">
            <span className="text-4xl text-gray-400 px-2 py-1 m-1">
              <img className="text-gray-600 opacity-40" src={filterIcon} />
            </span>
            <div className="flex items-center w-full">
              <input
                placeholder="کلمات کلیدی"
                className="px-3 py-3 font-bold text-sm w-full outline-none hover:outline-none"
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)} // بروزرسانی مقدار ورودی
              />
            </div>
          </div>

          <div className="flex items-center">
            <button
              className="bg-blue-700 flex items-center text-white pr-7 pl-4 py-4 crated hover:bg-blue-800 duration-200 hover:scale-105"
              onClick={addWord} // فراخوانی تابع افزودن کلمه هنگام کلیک
            >
              <span className="text-3xl mx-2">
                <IoMdAdd />
              </span>
              افزودن
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/3 mx-auto flex items-center flex-wrap justify-end">
        <KeyWord words={words} onDelete={deleteWord} />
      </div>
    </>
  );
}
