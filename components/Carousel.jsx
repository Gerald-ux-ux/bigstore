import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slide({ src, alt }) {
  return <img src={src} alt={alt} />;
}

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  const images = [
    { src: "/images/img1.png", alt: "slider 1" },
    { src: "/images/img2.png", alt: "slider 2" },
    { src: "/images/img3.png", alt: "slider 3" },
  ];

  return (
    <>
      <div className="relative ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <Slide src={image.src} alt={image.alt} key={index} />
          ))}
        </Slider>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-3 h-3  rounded-full ${
                activeIndex === index ? "bg-white" : "bg-gray-300"
              } inline-block mx-2`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
