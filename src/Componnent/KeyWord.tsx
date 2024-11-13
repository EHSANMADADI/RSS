import React from 'react';
import { FiDelete } from "react-icons/fi";


type Keyword = {
  id: number
  word: string
}
interface KeyWordProps {
  words: Keyword[];
  onDelete: (index: number) => void;
}


const KeyWord: React.FC<KeyWordProps> = ({ words,onDelete  }) => {
  return (
    <div className="flex flex-wrap w-full items-center  justify-end">
      {words.map((item, index) => (
        <div key={index} className="my-2 md:pr-5 pr-3 rounded py-2 mx-2 bg-blue-800 cursor-pointer flex items-center justify-between text-white">
          <span onClick={() => onDelete(item.id)} className='rotate-180 px-3 md:text-2xl text-xl'><FiDelete/></span>
          {item.word}
        </div>
      ))}
    </div>
  );
};

export default KeyWord;
