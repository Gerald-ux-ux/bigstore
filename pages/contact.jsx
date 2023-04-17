import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import Terms from "@/components/Terms";

function Contact() {
  const [iconColor, setIconColor] = useState("#8B96A5");

  const handleClick = () => {
    setIconColor("#EF363A");
  };


  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle phone number submission here using Next.js APIs
    // ...
    // redirect to the OTP verification page
    router.push("/phoneOtp");
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 lg:p-24  ">
      <div className="items-center justify-start  pb-12">
        <img
          src="/images/Bigstore Logo.png"
          alt="Bigstore Logo "
          className=""
          style={{ width: "350px", height: "120px" }}
        />
      </div>

      <div className="bg-white p-10 shadow-lg rounded-3xl w-full mx-auto sm:w-full sm:px-4 md:w-full md:px-8 lg:w-6/12 ">
        <div className="items-center justify-center">
          <h4 className="text-center font-bold text-2xl">
            What’s your phone number?
          </h4>
          <h6 className="text-base text-center">
            Type in your phone number to log in or create a new account.
          </h6>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row py-4 justify-center items-center ">
            <div className="bg-[#D9E0E5] p-6  rounded-full rounded-e-none flex flex-row justify-center items-center">
              <h6 className="justify-center text-start">+254</h6>
              <ChevronDownIcon className="h-6 w-6 text-[#1C1C1C]" />
            </div>
            <input
              required
              type="number"
              className="bg-[#D9E0E5] rounded-full focus:border-[#EF363A] focus:ring-1 focus:ring-[#EF363A] rounded-s-none mx-2 p-6 w-full"
            />
          </div>
          <div className="flex flex-row pb-4 justify-center items-center">
            <div
              className={`text-${iconColor} cursor-pointer`}
              onClick={handleClick}
            >
              <CheckCircleIcon className="h-6 w-6 mx-1 text-[#8B96A5]" />
            </div>

            <p className="text-sm text-[#1C1C1C]">
              I have read and agree to the{" "}
              <Link href="/terms" className="text-[#2F80ED]">
                Terms and conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#2F80ED]">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="mx-auto w-3/4 lg:w-1/2">
            <button className="bg-[#EF363A] text-white p-4 rounded-full w-full">
              Continue
            </button>
          </div>
        </form>
        <div className="items-center justify-center pt-4">
          <Link href="">
            <h6 className="text-center text-[#EF363A] text-base">
              Log in or register using email address
            </h6>
          </Link>
        </div>
      </div>
      <Terms />
    </main>
  );
}

export default Contact;
