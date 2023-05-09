import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Landing from "@/components/Landing";
import Nav from "@/components/Nav";
import Footer from "@/components/Gooter";

export default function Home() {
  return (
    <div className="flex  flex-col justify-center items-center  ">
      <Navbar />
      {/* <Nav/> */}


      <Landing />
    </div>
  );
}
