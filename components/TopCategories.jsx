import React from 'react'

const images = [
  {
    src: "images/Home/Top F/Home.png",
    alt: "Home Appliances",
  },
  {
    src: "images/Home/Top F/Laptop.png",
    alt: "Computers & Laptops",
  },
  {
    src: "images/Home/Top F/HeadPhones.png",
    alt: "Headphones",
  },
  {
    src: "images/Home/Top F/Sound.png",
    alt: "Sound Sytems",
  },
  {
    src: "images/Home/Top F/Phone.png",
    alt: "Smartphones",
  },
  {
    src: "images/Home/Top F/Tv.png",
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
                <div className="bg-[#F5F5F5] object-contain justify-center md:w-28 md:h-28 h-24 w-24 flex flex-row items-center rounded-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-2/3 h-3/4 object-contain flex-shrink-0 flex-grow-0"
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