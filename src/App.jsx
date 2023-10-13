// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import LandingPage from "./pages/LandingPage/landingPage";
// import Wardrobe from "./pages/wardrobe/Wardrobe";
// import ResetPassword from "./components/login/reset";

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/wardrobe" element={<Wardrobe />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/otp-input" element={<OtpInput />} />
//         <Route path="/login" element={<SignIn />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Route, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Dashboard from "./Dashboard";
// import Marketplace from "./Marketplace";
// import DryCleaning from "./DryCleaning";
import LandingPage from "./pages/LandingPage/landingPage";
import SignIn from "./pages/loginPage/signin";
import SignUpPage from "./pages/SignUp/SignUpPage";
import OtpInput from "./pages/otpInput/otpInput";
import Layout from "./components/common/Layout";
import Products from "./components/dashboard/Products";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/otp" element={<OtpInput />} />
        <Route path="/home" element={<Layout />}>
          {/* <div className="flex"> */}
          {/* <Sidebar /> */}
          {/* <Route> */}
          <Route index element={<Dashboard />} />
          {/* <Route path="/home/marketplace" component={Marketplace} />
              <Route path="/home/drycleaning" component={DryCleaning} /> */}
          <Route path="/home/products" element={<Products />} />
          {/* </Route> */}
          {/* </div> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
