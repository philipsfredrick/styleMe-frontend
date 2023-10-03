import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/landingPage";
import SignupForm from "./pages/SignUp/SignupForm";
import Wardrobe from "./pages/wardrobe/Wardrobe";
import Login from "./pages/loginPage/login";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/signup" element={<SignupForm />} />
				<Route path="/" element={<LandingPage />} />
				<Route path="/wardrobe" element={<Wardrobe />} />
				<Route path="/login" element={<Login />}/>
			</Routes>
		</div>
	);
}

export default App;
