import React from "react";

function Year() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-8 ">
      <div className="border-t flex justify-center flex-col py-4"></div>
      <p className="text-center text-[#1C1C1C] text-sm sm:text-base">
        © {currentYear} BigStore. All Rights Reserved.
      </p>
    </div>
  );
}

export default Year;
