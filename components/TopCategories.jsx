import React from 'react'

const images = [
  {
    src: "images/Home/Top/image1.png",
    alt: "Home Appliances",
  },
  {
    src: "images/Home/Top/image2.png",
    alt: "Computers & Laptops",
  },
  {
    src: "images/Home/Top/image3.png",
    alt: "Headphones",
  },
  {
    src: "images/Home/Top/image4.png",
    alt: "Smartphones",
  },
  {
    src: "images/Home/Top/image5.png",
    alt: "Televisions",
  },
];

function TopCategories() {
  return (
    <>
      <div className="mt-3 mb-3  ">
        <p className="text-[#EF363A] font-bold underline md:decoration-2 underline-offset-8 md:text-2xl">
          Our Top Categories
        </p>
        <div className="border-b"></div>
        <div className="flex overflow-x-auto overflow-hidden space-x-2  flex-row justify-between mb-6 mt-4">
          {images.map((image) => {
            return (
              <div className="" key={image.src}>
                <div className="bg-[#F5F5F5] object-contain justify-center md:w-28 md:h-28 h-24 w-24 flex items-center rounded-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-1/2 h-1/2 object-contain flex-shrink-0 flex-grow-0"
                  />
                </div>

                <p className="text-center text-xs md:text-base">{image.alt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TopCategories