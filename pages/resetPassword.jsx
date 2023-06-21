import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import Terms from "@/components/Terms";
import Image from "next/image";

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
    <main className="flex flex-col items-center  bg-[#F4F4F4] justify-center min-h-screen p-4 lg:p-24">
      <div className="items-center justify-start  pb-12">
        <Image
          src="/images/Bigstore Mobile.svg"
          alt="Bigstore Logo "
          className="md:w-25 md:h-20 "
          width={200} // Set the width value based on the actual image width
          height={20} // Set the height value based on the actual image height
        />
      </div>

      <div className="bg-white p-6 shadow-lg rounded-3xl w-full  mx-auto sm:w-full sm:px-4 md:w-full md:px-8 lg:w-1/2">
        <div className="items-center space-y-1 justify-center">
          <h4 className="text-center font-semibold text-lg md:text-2xl">
            Forgot your password? We got you
          </h4>
          <h6 className="text-sm md:text-base text-start">
            Let’s set you up with a new password. <br /> But first, enter the
            phone number linked to your account.
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
              <div className="bg-[#F4F4F4] p-4  md:p-6 md:w-3/12 w-5/12  rounded-full justify-center rounded-e-none flex flex-row items-center">
                <Image
                  src="/images/kenya.png"
                  alt="Kenya Flag"
                  className="w-6 h-6 mr-2 rounded-full"
                  width={200} // Set the width value based on the actual image width
                  height={20} // Set the height value based on the actual image height
                />
                <h6 className="text-center">+254</h6>
              </div>
              <input
                required
                type="number"
                className="bg-[#F4F4F4] rounded-full  focus:border-[#EF363A] focus:ring-1 focus:ring-[#EF363A] rounded-s-none mx-2  md:p-6 p-4 w-full"
              />
            </div>

            <div className="mx-auto flex justify-center w-10/12 lg:w-1/2">
              <button className="bg-[#EF363A] text-white md:p-4 p-2 rounded-full w-full">
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
