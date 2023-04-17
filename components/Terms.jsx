import Link from "next/link";
import React from "react";

function Terms() {
  // Get the current year dynamically
    const currentYear = new Date().getFullYear();
    

    
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="absolute bottom-0 justify-center items-center">
        <div className="flex flex-col items-center justify-center mt-8 lg:flex-row lg:justify-between">
          <Link href="">
            <h6 className="text-[#1C1C1C] my-2 lg:my-0 lg:mx-4">
              Terms and Conditions
            </h6>
          </Link>
          <Link href="">
            <h6 className="text-[#1C1C1C] my-2 lg:my-0 lg:mx-4">
              Privacy Policy
            </h6>
          </Link>
          <Link href="">
            <h6 className="text-[#1C1C1C] my-2 lg:my-0">Help</h6>
          </Link>
        </div>
        <div className="mt-8">
          <p className="text-center text-[#1C1C1C]">
            © {currentYear}, Bigstore or its affiliates
          </p>
        </div>
      </div>
    </main>
  );
}

export default Terms;
