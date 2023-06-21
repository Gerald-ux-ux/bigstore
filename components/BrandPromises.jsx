import React from "react";
import Image from "next/image";

const mobile = [
  {
    src: "/images/Home/image1.svg",
    alt: "Description of image 1",
    caption: "FREE STANDARD  <br />  SHIPPING",
  },
  {
    src: "/images/Home/image2.svg",
    alt: "Description of image 1",
    caption: "SECURE PAYMENT <br /> GUARANTEE",
  },
  {
    src: "/images/Home/image3.svg",
    alt: "Description of image 1",
    caption: "100% CUSTOMER <br /> SATISFACTION",
  },
  {
    src: "/images/Home/image4.svg",
    alt: "Description of image 1",
    caption: "GENUINE PRODUCT <br /> GUARANTE",
  },
];

const images = [
  {
    src: "/images/Items/go4.png",
    alt: "Description of image 1",
    caption: "FREE STANDARD <br /> SHIPPING",
  },

  {
    src: "/images/Items/go3.png",
    alt: "Description of image 2",
    caption: "SECURE PAYMENT <br /> GUARANTEE",
  },
  {
    src: "/images/Items/go.png",
    alt: "Description of image 3",
    caption: "100% CUSTOMER <br /> SATISFACTION",
  },
  {
    src: "/images/Items/go2.png",
    alt: "Description of image 4",
    caption: "GENUINE PRODUCT <br /> GUARANTEE",
  },
];

function BrandPromises() {
  return (
    <>
      <div className="hidden sm:flex w-11/12 justify-between mb-4 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="items-center justify-center text-center flex flex-col"
          >
            <Image src={image.src} alt={image.alt} width={50} height={50} />
            <p
              className="font-semibold text-center"
              dangerouslySetInnerHTML={{ __html: image.caption }}
            ></p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex sm:hidden justify-between mb-4 mt-4">
          {mobile.map((image, index) => (
            <div
              key={index}
              className="items-center justify-center text-center flex flex-col"
            >
              <Image src={image.src} alt={image.alt} width={50} height={50} />
              <p
                className="font-semibold text-center mt-4"
                dangerouslySetInnerHTML={{ __html: image.caption }}
                style={{ fontSize: "8px" }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BrandPromises;
