import React, { Suspense, lazy } from "react";
import Loader from "../Image/tail-spin.svg";
// Lazy load components
const Navbar = lazy(() => import("../Componnent/Navbar.tsx"));
const SearchText = lazy(() => import("../Componnent/SearchText.tsx"));
const SearchLink = lazy(() => import("../Componnent/SearchLink.tsx"));
const SearchWord = lazy(() => import("../Componnent/SearchWord.tsx"));
const ArticaleStart = lazy(() => import("../Componnent/ArticaleStart.tsx"));

export default function FerstPageComponent() {
  return (
    <div className="bg-gray-200 w-full max-h-full">
      {/* Wrap the components in Suspense */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-gray-300">
            <img src={Loader} alt="loading ..." width={60} height={60}/>
          </div>
        }
      >
        <Navbar />
        <SearchText />
        <SearchLink />
        <SearchWord />
        <ArticaleStart />
      </Suspense>
    </div>
  );
}
