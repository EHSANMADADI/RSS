import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoLinkOutline } from "react-icons/io5";
import { MdAddLink } from "react-icons/md";
import Modal from "./Modal.tsx";
import api from "../Config/api.ts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SearchLink() {
  const [isOpen, setIsOpen] = useState(false);
  const [Link, setLink] = useState("");
  const [LinkName, setLinkName] = useState("");
  const addLink = () => {
    api
      .post("/api/feeds", {
        name: LinkName,
        url: Link,
      })
      .then((res) => {
        console.log(res);
        toast.success("منبع با موفقیت اضافه شد");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "Feed with this URL already exists") {
          toast.info("این منبع وجود دارد");
        } else {
          toast.error('مشکلی پیش‌آمده لطفا دوباره تلاش کنید');
        }
      })
      .finally(() => {
        setIsOpen(false);
      });
  };
  return (
    <div
      dir="rtl"
      className="my-5 lg:w-1/2 w-5/6 mx-auto flex items-center justify-start "
    >
      <div className="flex items-center justify-between w-10/12 bg-white rounded border-b-[3px] border border-gray-300 ">
        <div className="flex items-center w-2/3">
          <span className="md:text-4xl text-2xl text-gray-400 px-2 py-1 m-1">
            <MdAddLink />
          </span>
          <div className="flex items-center w-full">
            <input
              onChange={(e) => {
                setLink(e.target.value);
              }}
              value={Link}
              placeholder="لینک صفحات وب..."
              className="px-3 py-3 font-bold text-sm  w-full outline-none hover:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => {
              if (Link !== "") {
                setIsOpen(!isOpen);
              }
            }}
            className="bg-blue-700 flex items-center text-white pr-7 pl-4 py-4 crated hover:bg-blue-800 duration-200 hover:scale-105"
          >
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
      <Modal Open={isOpen} onClose={() => setIsOpen(false)}>
        <div dir="rtl" className="p-10">
          <h3 className="text-xl font-bold ">
            در این قسمت میتوانید برای نام منبع را وارد نمایید
          </h3>
          <div className="mx-5 my-5">
            <label className="text-black font-black text-xl">
              نام منبع:{" "}
              <input
                value={LinkName}
                onChange={(e) => setLinkName(e.target.value)}
                className="px-7 py-3 outline-1 outline-dashed outline-blue-600 focus:outline-blue-400 focus:outline-1 "
                name="myInput"
              />
            </label>
          </div>
          <div className="flex w-full justify-center items-center my-3">
            <button
              onClick={addLink}
              className="bg-green-600 text-white font-bold text-xl hover:bg-green-700 hover:scale-105 duration-300 px-8 py-3 rounded-xl"
            >
              ارسال
            </button>
          </div>
        </div>
      </Modal>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
