import React, { useEffect, useState } from "react";
import { MdAddLink } from "react-icons/md";
import Modal from "./Modal.tsx";
import api from "../Config/api.ts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import Loader from "../Image/tail-spin.svg";
interface listLink {
  active: boolean;
  id: number;
  source: string;
  url: string;
}
export default function SearchLink() {
  const [isOpen, setIsOpen] = useState(false);
  const [Link, setLink] = useState("");
  const [LinkName, setLinkName] = useState("");
  const [showLinks, setShowLinks] = useState(false);
  const [linkList, setLinkList] = useState<listLink[]>([]);
  const [loading, setLoading] = useState(false);

  const addLink = () => {
    setLoading(true);
    api
      .post("/api/feeds", {
        name: LinkName,
        url: Link,
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          text: "منبع با موفقیت اضافه شد",
          icon: "success",
        });
        setIsOpen(false);
        setLink("");
        setLinkName("");
      })
      .catch((err) => {
        console.log(err);
        if (
          err.response.data?.message === "Feed with this URL already exists"
        ) {
          Swal.fire({
            text: "این منبع وجود دارد",
            icon: "info",
          });
        } else {
          Swal.fire({
            text: "مشکلی پیشآمده لطفا دوباره تلاش کنید",
            icon: "error",
          });
        }
      })
      .finally(() => {
        setLoading(false);
        setIsOpen(false);
      });
  };

  useEffect(() => {
    api
      .get("/api/feeds")
      .then((res) => {
        console.log(res);
        setLinkList(res.data.feeds);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }, [showLinks]);

  const deletItem = (id: number) => {
    api
      .delete(`/api/feeds/${id}`)
      .then((res) => {
        console.log(res);
        setLinkList(linkList.filter((item) => item.id !== id));
        //toast.success("منبع با موفقیت حذف شد");
        Swal.fire({
          text: "منبع با موفقیت حذف شد",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "مشکلی پیش آمده لطفا دوباره تلاش کنید",
          icon: "error",
        });
      });
  };

  return (
    <>
      {loading && (
        <div className="flex items-center justify-center h-screen">
          <img src={Loader} alt="loading ..." width={60} height={60} />
        </div>
      )}
      {!loading && (
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
          <span
            onClick={() => {
              setShowLinks(true);
            }}
            className="text-sm text-blue-800 font-bold px-1 cursor-pointer hover:border-b hover:scale-105 mx-1 hover:border-blue-300 duration-300"
          >
            مشاهده لینک های اضافه شده
          </span>
          <Modal Open={isOpen} onClose={() => setIsOpen(false)}>
            <div dir="rtl" className="p-10">
              <h3 className="text-xl font-bold ">
                در این قسمت میتوانید نام منبع را وارد نمایید
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
          <Modal
            Open={showLinks}
            onClose={() => {
              setShowLinks(false);
            }}
          >
            <div className="max-h-[90vh] overflow-y-auto">
              <table className="w-full text-base font-bold text-left rtl:text-right text-gray-500 overflow-auto rounded-md">
                <thead className="text-lg font-black text-gray-700 uppercase bg-gray-300">
                  <tr>
                    <th scope="col" className="lg:px-3 lg:py-3 px-3 py-2">
                      شناسه
                    </th>
                    <th scope="col" className="lg:px-3 lg:py-3 px-3 py-2">
                      نام
                    </th>
                    <th scope="col" className="lg:px-3 lg:py-3 px-3 py-2">
                      آدرس
                    </th>
                    <th
                      scope="col"
                      className="lg:px-3 lg:py-3 px-3 py-2 text-center"
                    >
                      وضعیت
                    </th>
                    <th scope="col" className="lg:px-3 lg:py-3 px-3 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {linkList.map((item, i) => (
                    <tr
                      key={i}
                      className="bg-gray-200 border-b-white border hover:bg-gray-50"
                    >
                      <th
                        scope="row"
                        className="lg:px-2 lg:py-3 px-3 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {item.id}
                      </th>
                      <th
                        scope="row"
                        className="lg:px-2 lg:py-3 px-3 py-2 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {item.source}
                      </th>
                      <th
                        scope="row"
                        className="lg:px-1 lg:py-3 px-1 py-2 font-medium text-gray-900 whitespace-normal"
                      >
                        {item.url}
                      </th>
                      <th
                        scope="row"
                        className="lg:px-2 lg:py-3 px-3 py-2 font-medium text-gray-900 whitespace-nowrap text-center"
                      >
                        {item.active ? (
                          <span className="text-green-600 font-bold">فعال</span>
                        ) : (
                          <span>غیر فعال</span>
                        )}
                      </th>
                      <th
                        onClick={() => {
                          deletItem(item.id);
                        }}
                        scope="row"
                        className="lg:px-2 lg:py-3 px-3 py-2 text-center font-medium text-gray-900 whitespace-nowrap"
                      >
                        <span className="text-red-500 text-xl cursor-pointer hover:text-red-700">
                          <TiDeleteOutline />
                        </span>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}
