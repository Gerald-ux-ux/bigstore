import React from "react";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";


export default function Home() {
  return (
    <div className="flex  flex-col justify-center items-center  ">
    
      <Navbar />
      <Landing />
    </div>
  );
}
