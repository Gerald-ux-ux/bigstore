import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import Terms from "@/components/Terms";

function resetPassword() {
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
    router.push("/resetPasswordOtp");
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 lg:p-24">
      <div className="items-center justify-start  pb-12">
        <img
          src="/images/Bigstore Logo.png"
          alt="Bigstore Logo "
          className=""
          style={{ width: "350px", height: "120px" }}
        />
      </div>

      <div className="bg-white p-10 shadow-lg rounded-3xl w-full  mx-auto sm:w-full sm:px-4 md:w-full md:px-8 lg:w-1/2">
        <div className="items-center justify-center">
          <h4 className="text-center font-semibold text-2xl">
            Forgot your password? We got you
          </h4>
          <h6 className="text-base text-center">
            Let’s set you up with a new password.
          </h6>
          <h6 className="text-base text-center">
            But first, enter the phone number linked to your account.
          </h6>
          <div className="flex flex-col lg:flex-row my-6 justify-center lg:items-center">
            <Link
              href="/password"
              className="text-[#2F80ED] text-sm text-center lg:ml-4"
            >
              Go back to log in
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-row my-6 justify-center items-center ">
              <div className="bg-[#D9E0E5] p-6 w-3/12  rounded-full rounded-e-none flex flex-row justify-center items-center">
                <h6 className="justify-center text-start">+254</h6>
                <ChevronDownIcon className="h-6 w-6 text-[#1C1C1C]" />
              </div>
              <input
                required
                type="number"
                className="bg-[#D9E0E5] rounded-full focus:border-[#EF363A] focus:ring-1 focus:ring-[#EF363A] rounded-s-none mx-2 p-6 w-full"
              />
            </div>

            <div className="mx-auto w-3/4 lg:w-1/2">
              <button className="bg-[#EF363A] text-white p-4 rounded-full w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Terms />
    </main>
  );
}

export default resetPassword;
