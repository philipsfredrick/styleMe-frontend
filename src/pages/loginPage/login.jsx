import { FcGoogle } from "react-icons/fc";
import "../loginPage/login.css";
import frame_one from "../loginPage/images/frame_one.svg";
import frame_two from "../loginPage/images/frame_two.svg";
import frame_three from "../loginPage/images/frame_three.svg";
import Carousel from "../loginPage/Carousel.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {

  let navigate = useNavigate()

  const images = [frame_one, frame_two, frame_three]
  const tags = ["Personal wardrobe", "Showcase your style", "Trending outfits"]
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const [userInput, setUserInput] = useState({})
  const [fieldError, setFieldError] = useState(
      {
          email: {message: "", error: false},
          password: {message: "", error: false}
      }
  )

  const handleChange = (e) => {
      setUserInput({...userInput, [e.target.name] : [e.target.value]});
      checkFieldStatus(e)
  }

  const checkFieldStatus = (e) => {
      switch (e.target.name) {
          case "email":
              if (e.target.value === "") {
                  setFieldError({
                      ...fieldError, [e.target.name]: {
                          message: "Please enter an email address",
                          error: true
                      }
                  })
              } else {
                  setFieldError({
                      ...fieldError, [e.target.name]: {
                          message: "",
                          error: false
                      }
                  })
              }
              break;
          case "password":
              if (e.target.name === "password") {
                  setFieldError({
                      ...fieldError, [e.target.name]: {
                          message: "Please enter a password",
                          error: true
                      }
                  })
              } else {
                  setFieldError({
                      ...fieldError, [e.target.name]: {
                          message: "",
                          error: false
                      }
                  })
              }
              break;
          default:
              break;
      }
  }

  const payload = {
    email: email,
    password: password,
  };

  const handleClick = (e) => {
    
      axios.post(`http://localhost:8080/api/v1/auth/login`, payload)
          .then((response) => {
              console.log(response)
              response.data[0].password === userInput["password"] && navigate("/dashboard")
          })
          .catch((error) => console.log(error))
  }
  
  return (
    <div className="loginpage-container">
        {/* <div>
          <h1>navbar</h1>
        </div> */}
        <div className="loginbody-container">
          <div className="loginright-container">
            <div className="loginright-welcome">
              <h1>Welcome Back!</h1>
            </div>
            <div className="loginoptions-container">
              <button >
                <FcGoogle size={20}/>
                Continue with google
              </button>
              <div className="loginoptions-or">
                  <p className="loginoptions-hr-text"><span>OR</span></p>
              </div>
              <div className="loginform-container">
                <p className="loginform-text">Enter your details to get started</p>
                <div className="loginform-form">
                  <label>Email Address</label>
                  <input name="email" type="text" placeholder="Enter your email address"
                          handleChange={handleChange} fieldError={fieldError}
                          onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="loginform-form">
                  <label>Enter Password</label>
                  <input name="password" type="password" placeholder="Enter your password"
                          handleChange={handleChange} fieldError={fieldError}
                          onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="loginform-signin">
                  <button onClick={handleClick}>Sign In</button>
                  <div className="dont">
                    <p>Don&apos;t have an account?</p>
                    <a onClick={()=>navigate("/register")}>
                      Sign up
                    </a>
                  </div>
              </div>
            </div>
          </div>
          <div className="loginleft-container">
              <Carousel images={images} tags={tags} m/>
          </div>
        </div>
    </div>
  );
};

export default Login;
