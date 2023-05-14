import React from "react";

const partners = [
  {
    src: "/images/Home/bigstore.co.ke/image1.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image2.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image3.png",
  },
  // {
  //   src: "/images/Home/bigstore.co.ke/image4.png",
  // },
  {
    src: "/images/Home/bigstore.co.ke/image5.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image6.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image7.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image8.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image9.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image10.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image11.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image12.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image13.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image14.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image15.png",
  },

  {
    src: "/images/Home/bigstore.co.ke/image16.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image17.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image18.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image19.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image20.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image21.png",
  },
  {
    src: "/images/Home/bigstore.co.ke/image22.png",
  },
];

function BigstorePartners() {
  return (
    <div className=" flex-row w-11/12 grid grid-cols-5 mt-4 mb-4  md:grid-cols-7">
      {partners.map((partner, index) => (
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
          <img src={partner.src} alt="" />
        </div>
      ))}
    </div>
  );
}

export default BigstorePartners;
