import AllProducts from "@/components/AllProducts";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";


function products() {

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-between max-w-8xl w-11/12 flex-wrap p-2">
        <AllProducts />
      </div>
    </>
  );
}

export default products;
