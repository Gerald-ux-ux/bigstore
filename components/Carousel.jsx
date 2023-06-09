import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slide({ src, alt, style }) {
  return <img src={src} alt={alt} style={style} />;
}

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // enable autoplay
    autoplaySpeed: 3000, // set interval to 3 seconds (3000 milliseconds)

    beforeChange: (_current, next) => setActiveIndex(next),
  };

  const images = [
    { src: "/images/Home/GO BIG SOUND.png", alt: "slider 1" },
    { src: "/images/Home/GO BIG SMARTPHONES.png", alt: "slider 2" },
    { src: "/images/Home/GO BIG DISCOUNTS.png", alt: "slider 3" },
  ];

  const slideStyle = {
    width: 250,
    height: 250,
  };


  return (
    <>
      <div className="relative md:max-w-full flex flex-col justify-center container">
        <Slider className="" {...settings}>
          {images.map((image, index) => (
            <Slide 
            className=''
              src={image.src}
              style={slideStyle}
              alt={image.alt}
              key={index}
            />
          ))}
        </Slider>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {images.map((_image, index) => (
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
