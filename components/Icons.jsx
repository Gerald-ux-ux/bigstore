import React from "react";

function Icons() {
  return (
    <div className=" justify-between mt-4 mb-4 border-b pb-2 hidden md:flex">
      <div className="flex border-r pr-2">
        <img
          src="/images/Home/Icons/Group.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
        <p className="ml-2 text-[#777777] font-semibold">
          Trusted by customers
        </p>
      </div>
      <div className="flex border-r pr-2">
        <img
          src="/images/Home/Icons/Group-1.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
        <p className="ml-2 text-[#777777] font-semibold">
          Quality and Authentic <br /> Products
        </p>
      </div>
      <div className="flex border-r pr-2">
        <img
          src="/images/Home/Icons/Money.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
        <p className="ml-2 text-[#777777] font-semibold">
          Warranty & Repairs <br /> Provided
        </p>
      </div>

      <div className="flex border-r pr-2">
        <img
          src="/images/Home/Icons/surface1.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
        <p className="ml-2 text-[#777777] font-semibold">
          Pay on Delivery/Pickup
        </p>
      </div>
    </div>
  );
}

export default Icons;
