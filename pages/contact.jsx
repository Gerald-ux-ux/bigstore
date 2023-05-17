import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import Terms from "@/components/Terms";
import ReactFlagsSelect from "react-flags-select";

function Contact() {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
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
    <main className="flex flex-col items-center justify-center bg-[#F4F4F4] min-h-screen p-4 md:p-24  ">
      <div className="items-center justify-start  pb-12">
        <img
          src="/images/Bigstore Mobile.svg"
          alt="Bigstore Logo "
          className="md:w-25 md:h-20 "
        />
      </div>

      <div className="bg-white p-10 shadow-lg rounded-3xl w-full mx-auto  md:w-1/2 ">
        <div className="items-center justify-center">
          <h4 className="text-center font-semibold  text-lg md:text-2xl">
            What’s your phone number?
          </h4>
          <h6 className="md:text-base text-sm text-center">
            Type in your phone number to log in or create a new account.
          </h6>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row py-4 justify-center items-center ">
            <div className="bg-[#F4F4F4] p-4  md:p-6 md:w-3/12 w-5/12  rounded-full justify-center rounded-e-none flex flex-row items-center">
              <img
                src="/images/kenya.png"
                alt="Kenya Flag"
                className="w-6 h-6 mr-2 rounded-full"
              />
              <h6 className="text-center text-sm">+254</h6>
            </div>

            <input
              required
              type="number"
              className="bg-[#F4F4F4] rounded-full  focus:border-[#EF363A] focus:ring-1 focus:ring-[#EF363A] rounded-s-none mx-2  md:p-6 p-4 w-full"
            />
          </div>
          <div className="flex  flex-row pb-4 justify-start items-center">
            <div
              className={`rounded w-6 h-4 md:w-5 md:h-5  flex items-center justify-center border border-gray-400 mr-2 ${
                checked ? "bg-[#EF363A] border-[#EF363A]" : ""
              }`}
              onClick={handleCheckboxChange}
            >
              {checked && (
                <CheckIcon className="w-4 h-4 text-white" aria-hidden="true" />
              )}
            </div>

            <p className="text-sm font-normal text-[#1C1C1C]">
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
          <div className="mx-auto flex justify-center w-10/12 lg:w-1/2">
            <button className="bg-[#EF363A] text-white md:p-4 p-2 rounded-full w-2/3">
              Continue
            </button>
          </div>
        </form>
        <div className="items-center justify-center pt-4">
          <Link href="/signUp">
            <h6 className="text-center text-[#EF363A] text-sm md:text-base">
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
