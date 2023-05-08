import React from "react";
import {
  HeartIcon,
  ShoppingCartIcon,
  ShareIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import Year from "./Year";
import Link from "next/link";

const pages = [
  {
    header: "PAGES",
  },
  {
    title: "Blog",
  },
  {
    title: "FAQs",
  },
  {
    title: "Shop",
  },
];

const support = [
  {
    header: "SUPPORT",
  },
  {
    title: "Returns",
  },
  {
    title: "Contact Us",
  },
  {
    title: "Privacy Policy",
  },
  {
    title: "Terms and conditions",
  },
];

function Footer() {
  return (
    <div className="">
      <div>
        <h2 className="text-[#242424] font-semibold text-center border-b">
          BigStore PARTNERS
        </h2>
      </div>
      <div>
        <img src="/images/Patners.png" alt="" />
      </div>
      <div className="flex  justify-between">
        <img
          src="/images/Items/go4.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
        <img
          src="/images/Items/go3.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
        <img
          src="/images/Items/go.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
        <img
          src="/images/Items/go2.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
      </div>

      <div className="flex justify-between ">
        <div className="">
          <img
            src="/images/Bigstore Logo.png"
            alt="Bigstore Logo"
            className=" "
            style={{ width: "150px", height: "50px" }}
          />

          <div className="flex">
            <img
              src="/images/Facebook.png"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="/images/Instagram.png"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <span className="">
            <div className="flex items-center">
              <ShareIcon className="h-6 w-6 text-[#333333]" />
              <p className="pl-2 items-center">Nairobi Area 00600 Kenya</p>
            </div>

            <div className="flex items-center ">
              <PhoneIcon className="h-6 w-6 text-[#333333]" />
              <p className="pl-2 items-center">Phone: 0711 999 036</p>
            </div>
          </span>
        </div>

        <div className="flex flex-col">
          {pages.map((page) => {
            return (
              <p
                key={page.title}
                className="ml-8 text-[#333333] flex flex-col text-sm font-semibold"
              >
                {page.header}
                <Link href={`/${page.title}`}>
                  <p className="text-sm font-thin m-2 text-[#777777]">
                    {page.title}
                  </p>
                </Link>
              </p>
            );
          })}
        </div>
        <div className="flex flex-col  ">
          {support.map((support) => {
            return (
              <p
                key={support.title}
                className="ml-8 text-[#333333] text-start justify-start text-sm font-semibold"
              >
                {support.header}
                <Link href={`/${support.title}`}>
                  <p className="text-sm font-thin m-2  text-[#777777]">
                    {support.title}
                  </p>
                </Link>
              </p>
            );
          })}
        </div>
      </div>

      <Year />
    </div>
  );
}

export default Footer;
