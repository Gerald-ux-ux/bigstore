import React, { useEffect, useState } from "react";
import Year from "./Year";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

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
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  
  return (
    <>
      <div className="flex justify-between   flex-col w-11/12">
        {/* <BrandPromises /> */}
        <div className="grid grid-cols-2 md:flex justify-between space-x-7 space-y-8 ">
          <div className=" row-span-2  justify-center flex flex-col   ">
            <img
              src="/images/Footer logo.svg"
              alt="Bigstore Logo"
              className="w-40 h-30 "
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
            <div className="flex items-start flex-row">
              <FontAwesomeIcon
                icon={faLocationArrow}
                className="text-lg text-[#333] md:text-xl"
              />
              <p className="pl-2 items-center text-xs">
                Nairobi Area 00600 Kenya
              </p>
            </div>

            <div className="flex   ">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-lg text-[#333] md:text-xl"
              />
              <p className="pl-2 text-center text-xs">Phone: 0711 999 036</p>
            </div>
          </div>

          <div className="md:flex hidden flex-col space-y-4 ">
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
          <div className="md:flex hidden flex-col space-y-4 ">
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

          <div className=" md:flex-row md:hidden flex   justify-end flex-col">
            <div className="flex flex-col space-y-2 md:space-y-4">
              <div className="flex items-center justify-between">
                <p
                  className="text-[#333333] text-sm font-semibold cursor-pointer flex items-center"
                  onClick={toggleSection}
                >
                  <div className="flex flex-row  items-center">
                    <span className="text-sm text-start md:text-base flex justify-between">
                      {pages[0].header}
                    </span>
                    {isOpen ? (
                      <ChevronUpIcon className="h-6 w-6" />
                    ) : (
                      <ChevronDownIcon className="h-6 w-6" />
                    )}
                  </div>
                </p>
              </div>
              {isOpen &&
                pages.slice(1).map((page) => {
                  // Exclude the first element (header)
                  return (
                    <p
                      key={page.title}
                      className="text-[#333333] text-sm font-semibold"
                    >
                      <Link href={`/${page.title}`}>
                        <p className="md:text-sm text-xs font-thin justify-between text-[#777777]">
                          {page.title}
                        </p>
                      </Link>
                    </p>
                  );
                })}
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4">
              <div className="flex items-center justify-between">
                <p
                  className="text-[#333333] text-sm font-semibold cursor-pointer flex items-center"
                  onClick={toggleSection}
                >
                  <div className="flex items-center">
                    <span className="text-sm md:text-base">
                      {support[0].header}
                    </span>
                    {isOpen ? (
                      <ChevronDownIcon className="h-6 w-6" />
                    ) : (
                      <ChevronUpIcon className="h-6 w-6" />
                    )}
                  </div>
                </p>
              </div>
              {!isOpen &&
                support.slice(1).map((support) => {
                  // Exclude the first element (header)
                  return (
                    <p
                      key={support.title}
                      className="text-[#333333] text-sm font-semibold"
                    >
                      <Link href={`/${support.title}`}>
                        <p className="md:text-sm text-xs font-thin text-[#777777]">
                          {support.title}
                        </p>
                      </Link>
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
        <Year />
      </div>
    </>
  );
}

export default Footer;
