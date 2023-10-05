import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/landingPage";
import Wardrobe from "./pages/wardrobe/Wardrobe";
import OtpInput from "./pages/otpInput/otpInput";
import SignUpPage from "./pages/SignUp/SignUpPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/otp-input" element={<OtpInput />} />
      </Routes>
    </div>
  );
}

export default App;
