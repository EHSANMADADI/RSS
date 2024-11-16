import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

export default function Modal(props: {
  Open: Boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!props.Open) return null;

  const Handelclose = (e: any) => {
    if (e.target.id === "wrapper") props.onClose();
  };
  return (
    <div
      className="fixed inset-0 flex justify-center items-center transition-colors bg-opacity-25 z-50"
      id="wrapper"
      onClick={Handelclose}
    >
      <div className="w-[800px] sm:w-[1300px] max-h-[100vh] overflow-y-auto flex flex-col z-50 border border-blue-400 bg-white rounded-lg">
        <button
          className="text-black cursor-pointer place-self-end rounded p-2 mb-1"
          onClick={() => props.onClose()}
        >
          <IoIosCloseCircle className="text-3xl bg-white" />
        </button>
        <div className="backdrop-blur-md bg-white/30 rounded">
          {props.children}
        </div>
      </div>
    </div>
  );
}
