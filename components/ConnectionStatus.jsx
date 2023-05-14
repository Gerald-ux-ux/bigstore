import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setOnlineStatus } from "../actions/appActions";
import { selectIsOnline } from "../selectors/appSelcetors";
import Navbar from './Navbar';
import Footer from './Footer';
import BigstorePartners from './BigstorePartners';



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
    <div className="">
      <Navbar />
      <div className="w-11/12">
        {!isOnline && (
          <div className=" flex flex-col items-center space-y-4">
            <img src="" alt="" />
            <p className="font-semibold text-4xl">Connection lost</p>
            <p className="font-normal text-xl">
              We’ve lost connection to the internet. <br />
              Try to reconnect to the internet, or
            </p>
            <button className="p-4 w-2/12 bg-[#EF363A] rounded-full">
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