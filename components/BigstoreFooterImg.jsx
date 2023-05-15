import React from "react";

function BigstoreFooterImg() {
  return (
    <div className="flex flex-col justify-center items-center mt-4 relative">
      <img src="/images/Footer.png" className="rounded-xl" alt="" />
      <div className="bg-black/30 rounded-xl absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center w-full h-full">
        <div className="px-4 md:space-y-8 text-center">
          <p className="font-semibold text-sm hidden md:block text-white">
            BigStore Home Appliances <br /> Collection
          </p>
          <div className="md:text-4xl">
            <p className="text-white font-semibold text-sm md:text-4xl">
              Refresh Your Space with Our <br /> Home Appliance Deals
            </p>
            <button className="bg-[#EC1A57] text-xs md:text-base rounded-full text-white p-2 md:p-3 mt-4">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigstoreFooterImg;
