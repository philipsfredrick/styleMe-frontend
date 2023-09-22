import { FcGoogle } from "react-icons/fc";
import "../loginPage/login.css";
// import frame_one from "../loginPage/images/frame_one.png";
import frame_one from "../loginPage/images/frame_one.svg";
import frame_two from "../loginPage/images/frame_two.svg";
import frame_three from "../loginPage/images/frame_three.svg";
import Carousel from "../loginPage/Carousel.jsx";

const Login = () => {

  const images = [frame_one, frame_two, frame_three]
  const tags = ["Personal wardrobe", "Showcase your style", "Trending outfits"]

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
                  <input type="text" placeholder="Enter your email address"/>
                </div>
                <div className="loginform-form">
                  <label>Enter Password</label>
                  <input type="password" placeholder="Enter your password"/>
                </div>
              </div>
              <div className="loginform-signin">
                  <button>Sign In</button>
                  <div className="dont">
                    <p>Don&apos;t have an account?</p>
                    <a>Sign up</a>
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
