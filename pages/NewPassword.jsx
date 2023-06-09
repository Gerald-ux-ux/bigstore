import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { CheckIcon } from "@heroicons/react/20/solid";
import Terms from "@/components/Terms";
import Image from "next/image";

function NewPassword() {
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
    <main className="flex flex-col  bg-[#F4F4F4] items-center justify-center min-h-screen p-4 lg:p-24">
      <div className="items-center justify-start  pb-12">
        <Image
          src="/images/Bigstore Mobile.svg"
          alt="Bigstore Logo "
          className="md:w-25 md:h-20 "
          width={200} // Set the width value based on the actual image width
          height={20} // Set the height value based on the actual image height
        />
      </div>

      <div className="bg-white p-10 shadow-lg rounded-3xl w-full  mx-auto sm:w-full sm:px-4 md:w-full md:px-8 lg:w-1/2">
        <div className="items-center justify-center">
          <h4 className="text-center font-semibold text-lg md:text-2xl">
            Set up a new password
          </h4>
          <h6 className=" text-sm font-normal md:text-base text-start">
            Create a strong password in order to keep your account secure
          </h6>
          <div className="flex flex-col lg:flex-row my-6 justify-between lg:items-center">
            <h6 className="font-bold text-sm lg:mr-4">+254 700 222 111</h6>
            <Link href="/contact" className="text-[#2F80ED] text-sm lg:ml-4">
              Wrong number? Edit it
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" my-6 space-y-4 justify-center items-center">
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
              className="bg-[#F4F4F4] focus:border-[#EF363A] focus:ring-1 focus:ring-[#EF363A] rounded-full p-4 md:p-6 w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <div className="flex flex-row lg:flex-row justify-start items-center my-6 lg:relative lg:items-center">
            <div
              className={`rounded-md w-5 h-5 flex items-center justify-start border border-gray-400 mr-2 ${
                checked ? "bg-[#EF363A] border-[#EF363A]" : ""
              }`}
              onClick={handleCheckboxChange}
            >
              {checked && (
                <CheckIcon className="w-4 h-4 text-white" aria-hidden="true" />
              )}
            </div>

            <h6 className="text-xs md:text-sm lg:mr-4 ">
              Remember me on this device
            </h6>
          </div>
          <div className="mx-auto w-10/12 lg:w-1/2">
            <button className="bg-[#EF363A] text-white p-2 md:p-4 rounded-full w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Terms />
    </main>
  );
}

export default NewPassword;
