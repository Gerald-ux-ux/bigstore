import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  ShoppingCartIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Container, Row, Col } from "reactstrap";
import Year from "./Year";
import Link from "next/link";
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
const images = [
  {
    src: "/images/Items/go4.png",
    alt: "Description of image 1",
    caption: "FREE STANDARD SHIPPING",
  },

  {
    src: "/images/Items/go3.png",
    alt: "Description of image 2",
    caption: "SECURE PAYMENT GUARANTEE",
  },
  {
    src: "/images/Items/go.png",
    alt: "Description of image 3",
    caption: "100% CUSTOMER SATISFACTION",
  },
  {
    src: "/images/Items/go2.png",
    alt: "Description of image 4",
    caption: "GENUINE PRODUCT GUARANTEE",
  },
];

function Gooter() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return null;
    }
  return (
    <div className="">
    
      <h2 className="text-[#242424] text-2xl font-semibold text-center border-b">
        BigStore Partners
      </h2>
      <div className="my-4">
        <img src="/images/Patners.png" alt="" />
      </div>

      <div className="">
        <div className="flex items-center my-24 justify-between">
          {images.map((image, index) => (
            <div className="justify-center items-center">
              <img
                className="items-center"
                key={index}
                src={image.src}
                alt={image.alt}
                style={{ width: "50px", height: "50px" }}
              />
              <p className="text-[#242424] text-base   font-semibold">
                {image.caption.split(" ").map((word, i, arr) => (
                  <React.Fragment key={i}>
                    {i === arr.length - 1 ? (
                      <React.Fragment>{word}</React.Fragment>
                    ) : (
                      <React.Fragment>
                        {word}
                        {i === arr.length - 2 ? <br /> : ""}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between  ">
          <div className="items-center">
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
            <div className=" space-y-2">
              <div className="flex items-center">
                <PaperAirplaneIcon className="h-6 w-6 text-[#333333]" />
                <p className="pl-2 items-center">Nairobi Area 00600 Kenya</p>
              </div>

              <div className="flex   ">
                <PhoneIcon className="h-6 w-6 text-[#333333]" />
                <p className="pl-2 text-center">Phone: 0711 999 036</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 ">
            {pages.map((page) => {
              return (
                <p
                  key={page.title}
                  className="  text-[#333333] flex flex-col text-sm font-semibold"
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
          <div className="flex flex-col space-y-4  ">
            {support.map((support) => {
              return (
                <p
                  key={support.title}
                  className=" text-[#333333] text-start justify-start text-sm font-semibold"
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
    </div>
  );
}

export default Gooter;
