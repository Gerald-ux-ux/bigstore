import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Terms from "@/components/Terms";

function resetPasswordOtp() {
    const router = useRouter();
  const handleSubmit = (event) => {
  
    event.preventDefault();
    // handle phone number submission here using Next.js APIs
    // ...
    // redirect to the OTP verification page
    router.push("/newPassword");
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen  p-4 lg:p-24">
      <div className="items-center justify-start  pb-12">
        <img
          src="/images/Bigstore Logo.png"
          alt="Bigstore Logo "
          className=""
          style={{ width: "350px", height: "120px" }}
        />
      </div>

      <div className="bg-white p-10 shadow-lg rounded-3xl w-full  sm:w-full sm:px-4 md:w-full md:px-8 lg:w-1/2">
        <div className="items-center justify-center">
          <h4 className="text-center font-semibold text-2xl">
            We sent you a code
          </h4>
          <h6 className="text-base text-center">
            Type in the code we sent to the number you just gave us
          </h6>
          <div className="flex flex-col lg:flex-row my-6 justify-between lg:items-center ">
            <h6 className="font-bold text-sm lg:mr-4">+254 700 222 111</h6>
            <Link href="/contact" className="text-[#2F80ED] text-sm lg:ml-4">
              Wrong number? Edit it
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row my-6 justify-center items-center">
            <input
              required
              placeholder="OTP"
              type="number"
              className="bg-[#F4F4F4] rounded-full mx-2 p-6 w-full border  "
            />
          </div>

          <div className="mx-auto w-3/4 lg:w-1/2">
            <button className="bg-[#EF363A] text-white p-4 rounded-full w-full">
              Confirm
            </button>
          </div>
        </form>
      </div>
      <Terms />
    </main>
  );
}

export default resetPasswordOtp;
