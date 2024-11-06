import React from 'react';
import { FiDelete } from "react-icons/fi";
interface word {
  content: string;
 
}

interface KeyWordProps {
  words: word[];
  onDelete: (index: number) => void;
}


const KeyWord: React.FC<KeyWordProps> = ({ words,onDelete  }) => {
  return (
    <div className="flex flex-wrap w-full items-center  justify-end">
      {words.map((item, index) => (
        <div key={index} className="my-2 pr-5 rounded py-2 mx-2 bg-blue-800 cursor-pointer flex items-center justify-between text-white">
          <span onClick={() => onDelete(index)} className='rotate-180 px-3 text-2xl'><FiDelete/></span>
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default KeyWord;
