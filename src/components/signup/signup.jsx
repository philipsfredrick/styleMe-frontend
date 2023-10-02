import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { slides } from "../landingPage/data";
import Carousel from "../landingPage/carousel";
import { FcGoogle } from "react-icons/fc";
import { Input } from "../common/input/input";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import {
  first_name_validation,
  last_name_validation,
  email_validation,
  password_validation,
} from "../common/input/inputValidations";
import axios from "axios";
import SignupSuccess from "./signupSuccess";
import Swal from "sweetalert2";

const Signup = () => {
  const methods = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState("");

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      // Send data to backend API here using Axios
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/signup",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data sent successfully", response.data);
      localStorage.setItem("emailForOTP", response.data.email);
      setTimeout(() => {
        setSubmitSuccess(true);
      }, 2000);
    } catch (error) {
      if (error.response) {
        if (error.response.status) {
          console.log(error.response.data.message);
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${error.response.data.message}`,
            confirmButtonText: "Retry",
            confirmButtonColor: "#FCA311",
            timer: 3000,
          });
          setEmailErrMsg(error.response.data);
        }
      }
      console.log("Error submitting data:", error);
    } finally {
      console.error("form validation failed");
      setIsSubmitting(false);
    }
  });

  // const password = methods.watch("password", "");

  return (
    // Main container
    <div className="flex items-center w-full h-screen sm:flex sm:overflow-hidden">
      {/* Side bar  1st div*/}
      <div
        className="hidden sm:flex sm:flex-col 
      sm:justify-between sm:h-full sm:items-start sm:w-1/3"
      >
        <a className="absolute z-[1] top-8 left-8" href="/">
          {" "}
          <img src={Logo} className="flex-shrink-0 h-14 w-24" />
        </a>
        <Carousel autoSlide={true} autoSlideInterval={11500}>
          {slides.map((s, id) => (
            <video
              key={id}
              className="w-full h-full object-cover"
              src={s}
              autoPlay
              muted
              loop
              playsInline
            />
          ))}
        </Carousel>
      </div>
      {/* content or form second div */}
      <div
        className="inline-flex flex-col overflow-auto 
      pt-4 items-center gap-2 mx-auto w-2/3 bg-[#fff]"
      >
        <div className="flex flex-col items-center gap-2">
          <h2
            className="text-[#14213D] font-['Manrope'] 
          text-2xl not-italic font-bold leading-[1.2rem] text-center"
          >
            Let's get started
          </h2>
          <p className="text-[#FCA311] font-['Manrope'] text-xs not-italic font-bold leading-5">
            Create your StyleMe account
          </p>
        </div>
        <div
          className="flex flex-col items-center gap-4 p-2 
          rounded-lg bg-white border border-gray-400"
        >
          <FormProvider {...methods}>
            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate
              autoComplete="off"
              className="flex flex-col gap-2"
            >
              <Input {...first_name_validation} />
              <Input {...last_name_validation} />
              <Input {...email_validation} />
              <Input {...password_validation} />
              <div className="flex items-center content-center gap-2 flex-wrap">
                <p
                  className="flex-shrink-0 text-[#9CA3AF] font-['Inter']
                 text-[0.65rem] not-italic font-normal leading-3"
                >
                  Password must include:
                </p>
                <p
                  className="flex py-[0.2rem] px-[0.3rem] 
                items-start gap-1 rounded-xl
                 bg-[#F3F5F6] text-[#848F9F] font-['Inter'] 
                 text-xs not-italic font-normal leading-3"
                >
                  Uppercase letters
                </p>
                <p
                  className="flex py-[0.2rem] px-[0.3rem] 
                items-start gap-1 rounded-xl bg-[#F3F5F6] 
                text-[#848F9F] font-['Inter'] text-xs 
                not-italic font-normal leading-3"
                >
                  Lowercase letters
                </p>
              </div>
              <div className="flex items-center content-center gap-2 flex-wrap">
                <p
                  className="flex py-[0.2rem] px-[0.3rem] 
                items-start gap-1 rounded-xl bg-[#F3F5F6] 
                text-[#848F9F] font-['Inter'] text-xs 
                not-italic font-normal leading-3"
                >
                  Special characters
                </p>
                <p
                  className="flex py-[0.2rem] px-[0.3rem] 
                items-start gap-1 rounded-xl bg-[#F3F5F6] 
                text-[#848F9F] font-['Inter'] text-xs 
                not-italic font-normal leading-3"
                >
                  Numeric characters
                </p>
              </div>
              <div className="flex items-center content-center gap-2 flex-wrap">
                <p
                  className="flex py-[0.2rem] px-[0.3rem] 
                items-start gap-1 rounded-xl bg-[#F3F5F6] 
                text-[#848F9F] font-['Inter'] text-xs 
                not-italic font-normal leading-3"
                >
                  At least 8 characters long
                </p>
              </div>
              {/* sign up button div */}
              <div
                onClick={onSubmit}
                className={`${
                  isSubmitting
                    ? "bg-[#322103] cursor-not-allowed"
                    : "bg-[#FCA311] hover:bg-[#7e5209]"
                } flex p-2 justify-center items-center gap-4
            border rounded-full border-[#FCA31122] opacity-50 cursor-pointer
             focus:outline-none focus:shadow-outline `}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-[#14213D] font-['Manrope'] text-base font-bold not-italic leading-5"
                >
                  Signup
                </button>
              </div>
              {SignupSuccess(localStorage.getItem("emailForOTP"))}

              {/* sign up with google div */}
              <div
                className="flex py-2 px-4 justify-center items-center gap-4
            border rounded-[2.4rem] border-[#F39B2B] opacity-50 bg-[#FFF] cursor-pointer  "
              >
                <div className="flex w-6 h-6 p-[0.5rem] justify-center items-center flex-shrink-0 border-[0.1rem] bg-white">
                  <FcGoogle size={15} className="flex-shrink-0  " />
                </div>
                <button className="text-[#F39B2B] font-['Manrope'] text-sm font-medium not-italic leading-normal">
                  Sign up with Google
                </button>
              </div>
              <p className="text-[#14213D] text-center font-['Manrope'] text-sm not-italic font-medium">
                Already have an account?
                <a
                  className="text-[#FCA311] font-['Manrope'] text-sm not-italic font-semibold cursor-pointer"
                  href="/login"
                >
                  Sign in
                </a>
              </p>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Signup;
