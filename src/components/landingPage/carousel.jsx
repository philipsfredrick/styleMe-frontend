import React from "react";
// import { testimonials } from "./data";
// import Slider from "react-slick";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ quote, name, role }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* <Slider {...settings}> */}
      <blockquote
        className="mx-auto text-[#808080] font-['Manrope'] 
text-xs not-italic font-medium leading-4 md:text-base  md:leading-6"
      >
        {quote}
      </blockquote>
      <p>{name}</p>
      <p className="pb-4">{role}</p>
      {/* </Slider> */}
    </div>
  );
};

export default Carousel;
