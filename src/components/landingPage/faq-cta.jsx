import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { BiMinusCircle } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import CtaCentre from "../../assets/img/cta-images/cta-centre.png";
import CtaRight from "../../assets/img/cta-images/cta-right.png";
import CtaLeft from "../../assets/img/cta-images/cta-left.png";

const data = [
  {
    id: 1,
    question: "How does one know when to start",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa ut sequi, in nostrum, deserunt assumenda accusamus voluptatum, maiores quae beatae eveniet magni veritatis ducimus quod deleniti autem exercitationem eligendi!",
  },
  {
    id: 2,
    question: "What is StyleMe",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa ut sequi, in nostrum, deserunt assumenda accusamus voluptatum, maiores quae beatae eveniet magni veritatis ducimus quod deleniti autem exercitationem eligendi!",
  },
  {
    id: 3,
    question: "Can StyleMe help me with my fashion sense?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa ut sequi, in nostrum, deserunt assumenda accusamus voluptatum, maiores quae beatae eveniet magni veritatis ducimus quod deleniti autem exercitationem eligendi!",
  },
  {
    id: 4,
    question: "How do i register on StyleMe?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa ut sequi, in nostrum",
  },
  {
    id: 5,
    question: "Can i have my personal wardrobe on StyleMe?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa ut sequi, in nostrum, deserunt assumenda accusamus voluptatum, maiores quae beatae eveniet magni veritatis ducimus quod deleniti autem exercitationem eligendi!",
  },
];

const FAQCTA = () => {
  // const [show, setShow] = useState({
  //   1: false,
  //   2: false,
  //   3: false,
  // });

  const [plus, setPlus] = useState(true);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setPlus(!plus);
    setShow(!show);
  };

  // const handleClick = (id) => {
  //   setShow((prevState) => ({
  //     ...prevState,
  //     [id]: !prevState[id],
  //   }));
  // };

  return (
    <div
      className="max-auto w-full bg-[#E1E6EF] px-8 sm:px-6  md:px-8 lg:px-12
  scroll-m-20 sm:scroll-m-24 xl:scroll-m-32"
    >
      <div className="mx-auto flex flex-col items-center gap-3 pt-10">
        <h2 className="text-[#08123B] font-['Manrope'] text-2xl not-italic font-extrabold leading-8">
          Frequently asked questions
        </h2>
        <p className="text-[#08123B] font-['Manrope'] text-xs not-italic font-medium leading-4">
          Everything you need to know about StyleMe
        </p>
      </div>
      {/* FAQ sections */}

      <div className="flex flex-col mt-16 border  border-green-600 overflow-y-auto box-border">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between border-b-2 px-10 py-10 md:mx-[15rem]"
          >
            <span className="text-[#08123B] font-['Manrope'] text-sm not-italic font-extrabold leading-8">
              {item.question}
            </span>

            <span onClick={() => handleClick(item.id)}>
              {plus ? (
                <BiPlusCircle
                  size={20}
                  className="flex items-center justify-end"
                />
              ) : (
                <BiMinusCircle
                  size={20}
                  className="flex items-center justify-end"
                />
              )}
            </span>
            {show && (
              <p
                key={item.id}
                className="text-sm text-[#414141] font-['Manrope'] py-2
          not-italic font-medium leading-5 mb-[2.4rem]"
              >
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Call To Action section */}
      <div
        className="flex flex-col mx-auto w-full justify-center items-center gap-8 
      py-[2rem] px-[4rem] rounded-3xl 
      border border-[#D1D7F0] bg-[#FFF] mt-[5.4rem]"
      >
        <div className="flex flex-col gap-2">
          <figure className="flex flex-shrink-0 items-center justify-center relative">
            <img
              className="w-[2.8rem] absolute"
              src={CtaCentre}
              alt="Centre image for a smiling lady"
            />
            <img
              className="w-[3rem]"
              src={CtaLeft}
              alt="Left side image also with a smiling lady"
            />
            <img
              className="w-[3rem]"
              src={CtaRight}
              alt="Right side image with a smiling lady"
            />
          </figure>
          <h2 className="text-[#14213DE5] text-center font-['Manrope'] text-2xl not-italic font-extrabold leading-7 tracking-tighter md:text-left">
            Keep up with fashion trends by joining StyleMe
          </h2>
          <p className="text-[#1B1B1BCC] font-['Manrope'] text-center text-sm not-italic font-medium leading-5 md:text-left">
            Can’t find the answer you’re looking for? Please chat with our
            friendly team
          </p>
        </div>
        <div className="text-center sm:text-left">
          <button
            href="#"
            className="inline-flex px-4 py-2 justify-center items-center gap-1 rounded-2xl border border-[#fca31122]
             bg-[#14213d] text-[#fca311] font-['Manrope'] not-italic font-bold leading-normal text-sm
             transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-[#434d64] duration-300 mt-[2.6rem] mb-6"
          >
            Get Started <BiRightArrowAlt size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQCTA;
