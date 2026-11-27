"use client";
import React from "react";
// import { GridLoader } from 'react-spinners';
import { PacmanLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      {/* <GridLoader color="#244D3F"></GridLoader> */}

      {/* <PacmanLoader color="##244D3F" /> */}
      
      <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
      
    </div>
  );
};

export default loading;
