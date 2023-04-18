import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full  ">
      <Navbar />
    </div>
  );
}
