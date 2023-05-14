import React, { useEffect, useState } from "react";
import Year from "./Year";
import Link from "next/link";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { PaperAirplaneIcon, PhoneIcon } from "@heroicons/react/20/solid";
import BrandPromises from "./BrandPromises";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <div className="flex justify-between flex-col w-11/12">
        <BrandPromises />
        <div className="grid grid-cols-1 md:flex md:justify-between space-y-8 ">
          <div className="  justify-center flex flex-col   ">
            <img
              src="/images/Bigstore Logo.png"
              alt="Bigstore Logo"
              className=" "
              style={{ width: "150px", height: "50px" }}
            />
            <div className="flex my-8">
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
            <div className="flex items-center">
              <PaperAirplaneIcon className="h-6 w-6 text-[#333333]" />
              <p className="pl-2 items-center">Nairobi Area 00600 Kenya</p>
            </div>

            <div className="flex   ">
              <PhoneIcon className="h-6 w-6 text-[#333333]" />
              <p className="pl-2 text-center">Phone: 0711 999 036</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 ">
            {pages.map((page) => {
              return (
                <p
                  key={page.title}
                  className="  text-[#333333]  text-sm font-semibold"
                >
                  {page.header}
                  <Link href={`/${page.title}`}>
                    <p className="text-sm font-thin justify-between  text-[#777777]">
                      {page.title}
                    </p>
                  </Link>
                </p>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4 ">
            {support.map((support) => {
              return (
                <p
                  key={support.title}
                  className=" text-[#333333]  text-sm font-semibold"
                >
                  {support.header}
                  <Link href={`/${support.title}`}>
                    <p className="text-sm font-thin  text-[#777777]">
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
    </>
  );
}

export default Footer;
