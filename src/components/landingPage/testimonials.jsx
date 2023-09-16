import React from "react";
import LeadImage from "../../assets/img/testimonial/odinaka.jpg";
import Stars from "../../assets/img/testimonial/stargroup.png";
import Gallery1 from "../../assets/img/gallery-images/gallery1.png";
import Gallery2 from "../../assets/img/gallery-images/gallery2.png";
import Gallery3 from "../../assets/img/gallery-images/gallery3.png";
import Gallery4 from "../../assets/img/gallery-images/gallery4.png";
import Gallery5 from "../../assets/img/gallery-images/gallery5.png";

const Testimonials = () => {
  return (
    <div className="mx-auto w-full overflow-hidden pt-14 px-8 flex-shrink-0 bg-[#FFF8EB] lg:px-12">
      {/* Flex layout with 2 divs */}
      <div className="flex items-center gap-8 sm:flex sm:flex-row md:flex md:flex-row lg:flex lg:flex-row">
        {/* First div */}
        <div className="flex flex-col items-start justify-center w-1/2">
          <img src={Stars} alt="Group of stars" />
          <div className="inline-flex flex-col items-start justify-center gap-3">
            <h2
              className="text-[#414141] font-['Manrope'] text-2xl not-italic
            font-extrabold leading-9"
            >
              Our Testimony
            </h2>

            <figure className="flex flex-col items-center justify-center">
              <blockquote
                className="mx-auto text-[#808080] font-['Manrope'] pb-28
        text-xs not-italic font-medium leading-4 md:text-base  md:leading-6 "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, aliquid sint vitae beatae quisquam molestias, quia
                consectetur nulla cumque nemo expedita consequuntur impedit
                similique culpa reiciendis eius? Distinctio, suscipit ea.
              </blockquote>
              {/* <div className="flex flex-col items-end justify-center">
                <img
                  className="w-[5.6rem] h-[5.6rem] flex-shrink-0 rounded-full"
                  src={LeadImage}
                  alt="Team Lead Picture"
                />
              </div> */}
              {/* <figcaption className="flex items-center flex-col justify-center">
                <p className="text-[#000] font-['Manrope'] text-base not-italic font-extrabold leading-8">
                  Team Lead
                </p>
                <p className="text-[#000] font-['Manrope'] text-xs not-italic font-medium leading-4">
                  Obeleagu Odinaka
                </p>
              </figcaption> */}
            </figure>
          </div>
        </div>
        {/* Second div */}
        <div className="flex flex-col  w-1/2 gap-2 sm:w-1/2 md:w-1/2 lg:w-1/2">
          <div className="flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-end md:justify-center">
            <img
              className="w-28 h-24 md:w-32 md:h-24"
              src={Gallery1}
              alt="A young man on earphones"
            />
            <img
              className="w-32 h-36 md:w-36 md:h-48"
              src={Gallery2}
              alt="A young beautifully dressed  caucasian lady posing for picture"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 md:flex md:flex-row md:items-start md:justify-center md:overflow-hidden">
            <img
              className="w-32 md:w-36"
              src={Gallery3}
              alt="A black woman facial image endowned with a flowery head tie"
            />
            <img
              className="w-32 h-36 md:w-36 md:h-48"
              src={Gallery4}
              alt="A picture of a lady with a casual shirt wear and accompanying glasses"
            />
            <img
              className="w-32 md:w-36"
              src={Gallery5}
              alt="A possibly middle eastern lady in a flowery scarf popularly known as `hijab`"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
