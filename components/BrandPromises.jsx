import React from "react";

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
    <div className="flex justify-between mb-4 mt-4">
      {images.map((image) => (
        <div className="items-center justify-center text-center flex flex-col">
          <img
            className="items-center justify-center"
            src={image.src}
            alt={image.alt}
            style={{ width: "50px", height: "50px" }}
          />
          <p
            className="font-semibold text-center "
            dangerouslySetInnerHTML={{ __html: image.caption }}
          ></p>
        </div>
      ))}
    </div>
  );
}

export default BrandPromises;
