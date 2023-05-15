import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setOnlineStatus } from "../actions/appActions";
import { selectIsOnline } from "../selectors/appSelcetors";
import Navbar from './Navbar';
import Footer from './Footer';



function ConnectionStatus() {
 const dispatch = useDispatch();

 useEffect(() => {
   function handleOnline() {
     dispatch(setOnlineStatus(true));
   }

   function handleOffline() {
     dispatch(setOnlineStatus(false));
   }

   window.addEventListener("online", handleOnline);
   window.addEventListener("offline", handleOffline);

   return () => {
     window.removeEventListener("online", handleOnline);
     window.removeEventListener("offline", handleOffline);
   };
 }, [dispatch]);

 const isOnline = useSelector(selectIsOnline);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="justify-center flex flex-col  ">
        {!isOnline && (
          <div className=" flex flex-col items-center justify-center gap-6">
            <img
              src="/images/Network.png"
              alt=""
              className="w-20 mt-8 h-20 md:w-52 md:h-52"
            />
            <p className="font-semibold text-center text-lg	 md:text-4xl">
              Connection lost
            </p>
            <p className="md:text-xl text-sm font-normal text-center">
              We’ve lost connection to the internet. <br />
              Try to reconnect to the internet, or
            </p>
            <button onClick={() => window.location.reload()} className="text-sm p-2 rounded-full text-white mx-auto font-medium bg-[#EF363A] w-11/12  md:w-1/3">
              <p className="text-white font-medium text-center">Relod Page</p>
            </button>
            <Footer />
          </div>
        )}
      </div>
      {/* Rest of your component */}
    </div>
  );
}

export default ConnectionStatus