import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const OtpInput = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpErrMsg, setOtpErrMSg] = useState("");

  const userEmail = localStorage.getItem("emailForOTP");
  console.log(userEmail, "this is the user email to send otp");

  const handleInputChange = (e, index) => {
    const newOTP = [...otp];
    newOTP[index] = e.target.value;

    parseInt(newOTP.join(""));
    console.log(newOTP, "newOTP here");

    setOTP(newOTP);

    if (index < otp.length - 1 && e.target.value !== "") {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(userEmail, otp.join(""));
    try {
      //   console.log(emailOTP, "emailForOTP");
      const response = await fetch(
        "http://localhost:8080/api/v1/confirm/code",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userEmail, code: otp.join("") }),
        }
      );
      //   const response = await axios.post(
      //     "http://localhost:8080/api/v1/confirm/code",
      //     { email: userEmail, code: otp.join("") }
      //   );
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${response.message}`,
          confirmButtonText: "OK",
          confirmButtonColor: "#FCA311",
          timer: 2000,
        });
      }
      navigate("/login");
    } catch (error) {
      if (error.response) {
        if (error.response.status == 404) {
          console.log(error.response.message);
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${error.response}`,
            confirmButtonText: "Retry",
            confirmButtonColor: "#FCA311",
            timer: 2000,
          });
          // setEmailErrMsg(error.response.data.email);
        }
      }
      console.log("Error submitting data:", error.response);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/confirm/account/email",
        { email: userEmail }
      );
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          //   title: `${response.message}`,
          html: `
            A verification code has been sent to your email: <strong>${localStorage.getItem(
              "emailForOTP"
            )}</strong>
                `,
          confirmButtonText: "OK",
          confirmButtonColor: "#FCA311",
          timer: 3000,
        });
      }
      navigate("/otp-input");
    } catch (error) {
      if (error.response) {
        if (error.response.status) {
          console.log(error.response.data.email);
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${error.response.data.email}`,
            confirmButtonText: "Retry",
            confirmButtonColor: "#FCA311",
            timer: 3000,
          });
          // setEmailErrMsg(error.response.data.email);
        }
      }
      console.log("Error submitting data:", error.response);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-500 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-600">
              <p>
                Please enter the 6-digit verification code sent to your email:
                <strong>{userEmail}</strong>
              </p>
            </div>
          </div>

          <div>
            {/* <form onSubmit={handleSubmit}> */}
            <div className="flex flex-col space-y-16">
              <div className="flex flex-row items-center justify-between mx-auto w-full">
                {otp.map((digit, index) => (
                  <div key={index} className="w-16 h-16 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id={`otp-input-${index}`}
                      value={digit}
                      onChange={(e) => handleInputChange(e, index)}
                      maxLength="1"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-5">
                <div>
                  <button
                    className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-[#FCA311] border-none text-white text-sm shadow-sm"
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    Verify Account
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't recieve code?</p>{" "}
                  <button
                    onClick={handleResend}
                    className="flex flex-row items-center text-blue-600"
                    href="#otp-input"
                    //   target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend
                  </button>
                </div>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpInput;
