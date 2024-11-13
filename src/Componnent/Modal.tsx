import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";

export default function Modal(props: { Open: Boolean, onClose: () => void, children: React.ReactNode }) {
  if (!props.Open) return null;

  const Handelclose = (e: any) => {
    if (e.target.id === 'wrapper') props.onClose();

  }
  return (
    <div className='fixed inset-0 flex justify-center items-center transition-colors bg-opacity-25 z-50 border-blue-400' id='wrapper' onClick={Handelclose}>
      <div className='w-[800px] sm:w-[900px]  flex flex-col z-50 border-blue-400'>
        <button className='text-black cursor-pointer  place-self-end rounded p-2 mb-1' onClick={() => props.onClose()}><IoIosCloseCircle className='text-3xl bg-white'/></button>
        <div className='backdrop-blur-md bg-white/30 rounded '>
          <div className='w-full'>
            {props.children}
          </div>

        </div>                                                
      </div>
    </div>
  )
}