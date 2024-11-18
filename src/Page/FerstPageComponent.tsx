import React from "react";
import Navbar from "../Componnent/Navbar.tsx";
import SearchText from "../Componnent/SearchText.tsx";
import SearchLink from "../Componnent/SearchLink.tsx";
import SearchWord from "../Componnent/SearchWord.tsx";

import ArticaleStart from "../Componnent/ArticaleStart.tsx";

export default function FerstPageComponent() {
  return (
    <div className="bg-gray-200 w-full max-h-full ">
      <Navbar />
      <SearchText/>
      <SearchLink/>
      <SearchWord/>
      <ArticaleStart/>
      
    </div>
  );
}
