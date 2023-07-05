import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Terms from "@/components/Terms";
import Image from "next/image";

function PhoneOtp() {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle phone number submission here using Next.js APIs
    // ...
    // redirect to the OTP verification page
    router.push("/password");
  };
  return (
    <main className="flex flex-col items-center  bg-[#F4F4F4] justify-center min-h-screen  p-4 lg:p-24">
      <div className="items-center justify-start  pb-12">
        <Image
          src="/images/Bigstore Mobile.svg"
          alt="Bigstore Logo "
          className="md:w-25 md:h-20 "
          width={200} // Set the width value based on the actual image width
          height={20} // Set the height value based on the actual image height
        />
      </div>

      <div className="bg-white p-10 shadow-lg rounded-3xl  w-full md:w-1/2 ">
        <div className="items-center justify-center">
          <h4 className="text-center font-semibold text-lg md:text-2xl">
            We sent you a code
          </h4>
          <h6 className="md:text-base text-xs text-center">
            Type in the code we sent to the number you just gave us
          </h6>
          <div className="flex flex-col lg:flex-row my-6 justify-between lg:items-center ">
            <h6 className="font-bold text-sm lg:mr-4">+254 700 222 111</h6>
            <Link href="/contact" className="text-[#2F80ED] text-sm lg:ml-4">
              Not you? Edit phone number
            </Link>
          </div>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex  my-6 justify-start items-center">
            <input
              required
              placeholder="OTP"
              type="number"
              className="bg-[#F4F4F4] rounded-full  p-3 w-full  border  "
            />
          </div>

          <div className="mx-auto flex justify-center w-10/12 lg:w-1/2">
            <button className="bg-[#EF363A] text-white md:p-4 p-2 rounded-full w-full md:w2/3">
              Confirm
            </button>
          </div>
        </form>
      </div>
      <Terms />
    </main>
  );
}

export default PhoneOtp;
