import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="w-full  ">
      <Navbar />
      <Carousel />
    </div>
  );
}
