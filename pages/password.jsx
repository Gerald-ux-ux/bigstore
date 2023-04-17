import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Terms from "@/components/Terms";

function password() {
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
    router.push("/");
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 lg:p-24">
      <div className="bg-white p-10 shadow-lg rounded-3xl w-full  mx-auto sm:w-full sm:px-4 md:w-full md:px-8 lg:w-1/2">
        <div className="items-center justify-center">
          <h4 className="text-center font-semibold text-2xl">
            Good to see you back!
          </h4>
          <h6 className="text-base text-center">
            Type in your password to log back in to your account linked to
          </h6>
          <div className="flex flex-col lg:flex-row my-6 justify-between lg:items-center">
            <h6 className="font-bold text-sm lg:mr-4">+254 700 222 111</h6>
            <Link href="/contact" className="text-[#2F80ED] text-sm lg:ml-4">
              Not you? Edit phone number
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row my-6 justify-center items-center">
            <input
              required
              placeholder="Password"
              type="password"
              className="bg-[#D9E0E5] focus:border-[#EF363A] focus:ring-1 focus:ring-[#EF363A] rounded-full  mx-2 p-6 w-full"
            />
          </div>
          <div className="flex flex-col lg:flex-row my-6 lg:relative lg:items-center">
            <div
              className={`text-${iconColor} cursor-pointer items-start`}
              onClick={handleClick}
            >
              <CheckCircleIcon className="h-6 w-6   text-[#8B96A5]" />
            </div>

            <h6 className=" text-sm lg:mr-4  ">Remember me on this device</h6>
            <Link
              href="/"
              className="text-[#2F80ED] text-sm lg:ml-4 lg:right-0 lg:absolute "
            >
              {" "}
              Forgot your password?
            </Link>
          </div>
          <div className="mx-auto w-3/4 lg:w-1/2">
            <button className="bg-[#EF363A] text-white p-4 rounded-full w-full">
              Log in
            </button>
          </div>
        </form>
      </div>
      <Terms />
    </main>
  );
}

export default password;
