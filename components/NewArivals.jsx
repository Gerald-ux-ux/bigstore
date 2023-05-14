import React from "react";

function NewArivals() {
  return (
    <div className=" flex md:flex-row md:justify-between  flex-col  ">
      <div className="bg-[#EEEFEF] flex justify-between  mr-2 mb-2 h-full w-full">
        <div className="flex ml-2 flex-row">
          <div className="font-semibold text-base ml-4 justify-evenly flex flex-col">
            <p className="text-[#EC2761] font-normal"> New Arrivals</p>
            <p>
              Mobile & <br /> Tablet
            </p>
            <p className=" text-sm font-normal	 text-[#777777]">
              Get your hands on the latest <br /> smartphones at unbeatable
              prices.
            </p>
            <button className="bg-[#EC1A57] rounded-full p-2 w-6/12 ">
              <a href="/" className="text-white text-xs	font-normal		">
                SHOP MORE
              </a>
            </button>
          </div>
        </div>
        <img src="images/Home/Top/image4.png" alt="" className="mr-2" />
      </div>

      <div className="bg-[#5564B8] flex justify-between mr-2 h-full w-full">
        <div className="flex flex-row">
          <div className="font-semibold text-base ml-4 justify-evenly flex flex-col">
            <p className="text-[#FFFFFF99] font-normal"> New Arrivals</p>
            <p className="text-[#FFFFFF]">
              Computers & <br />
              Laptops
            </p>
            <p className=" text-sm font-normal text-[#FFFFFFCC]">
              Don't miss out on our incredible <br /> deals on laptops and computers.
              prices.
            </p>
            <button className="bg-[#EC1A57] rounded-full p-2 w-6/12 ">
              <a href="/" className="text-white  text-sm font-normal	">
                SHOP MORE
              </a>
            </button>
          </div>
        </div>
        <img src="images/Home/Top/image4.png" alt="" className="mr-2" />
      </div>
    </div>
  );
}

export default NewArivals;
