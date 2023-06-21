import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { CheckIcon } from "@heroicons/react/20/solid";
import Terms from "@/components/Terms";
import Image from "next/image";

function signUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const router = useRouter();

  const checkPasswordMatch = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      setError("Passwords do not match");
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkPasswordMatch()) {
      // handle password submission here using Next.js APIs
      // ...
      // redirect to the OTP verification page
      router.push("/");
    } else {
      window.location.reload();
    }
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

      <div className="bg-white p-4 shadow-lg rounded-3xl w-full  mx-auto sm:w-full sm:px-4 md:w-full md:px-8 lg:w-1/2">
        <div className="items-center mx-2 justify-center">
          <h4 className="text-center font-semibold text-lg md:text-2xl">
            New account, who this?
          </h4>
          <h6 className="md:text-base text-sm text-start">
            Let’s set you up with a new account. <br /> Create a strong password
            in order to keep your account secure.
          </h6>
          <h6 className="text-base text-center"></h6>
          <div className="flex flex-col lg:flex-row my-6 justify-between lg:items-center">
            <h6 className="font-bold text-sm lg:mr-4">+254 700 222 111</h6>
            <Link href="/contact" className="text-[#2F80ED] text-sm lg:ml-4">
              Wrong number? Edit it
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" my-6 justify-center items-center">
            <input
              required
              placeholder="Full Name"
              type="text"
              className="bg-[#F4F4F4] focus:border-[#EF363A] focus:ring-1 focus:ring-[#EF363A] rounded-full my-6  p-4 md:p-6 w-full"
            />
            <input
              required
              placeholder="New Password"
              type="password"
              className="bg-[#F4F4F4] focus:border-[#EF363A] focus:ring-1 focus:ring-[#EF363A] rounded-full p-4 md:p-6 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              required
              placeholder="Confirm Password"
              type="password"
              className="bg-[#F4F4F4] my-6 focus:border-[#EF363A] focus:ring-1 focus:ring-[#EF363A] rounded-full p-4 md:p-6 w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <div className="flex flex-col lg:flex-row my-6 lg:relative md:items-center">
            <div className="flex items-center mr-2">
              <div
                className={`rounded w-4 h-4 md:h-5 md:w-5 flex items-center justify-start border border-gray-400 ${
                  checked ? "bg-[#EF363A] border-[#EF363A]" : ""
                }`}
                onClick={handleCheckboxChange}
              >
                {checked && (
                  <CheckIcon
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h6 className="text-xs ml-1 md:text-sm">
                Remember me on this device
              </h6>
            </div>
            <div className="mt-2 flex items-center lg:mt-0">
              <Link
                href="/resetPassword"
                className="text-[#2F80ED] text-xs md:text-sm lg:ml-4 lg:right-0 lg:absolute"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className="mx-auto w-10/12 lg:w-1/2">
            <button className="bg-[#EF363A] text-white p-2 md:p-4 rounded-full w-full">
              Sign up
            </button>
          </div>
        </form>
      </div>
      <Terms />
    </main>
  );
}

export default signUp;
