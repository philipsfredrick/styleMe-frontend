import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/landingPage";
import Wardrobe from "./pages/wardrobe/Wardrobe";
import Login from "./pages/loginPage/login";
import OtpInput from "./pages/otpInput/otpInput";
import SignUpPage from "./pages/SignUp/SignUpPage";
import LoginComponent from "./components/login/loginForm";
import ResetPassword from "./components/login/reset";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/otp-input" element={<OtpInput />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
