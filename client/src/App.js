import { Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import UserAccount from "./components/UserAccount";
import StartupAccount from "./components/StartupAccount";
import Startup from "./components/Startup";
import Profile from "./components/Profile";
import StartupView from "./components/StartupView";
import MyNetwork from "./components/MyNetwork";
import Notifi from "./components/Notifi";
// import Main from "./components/Main";
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />

			
			<Route path="/useraccount" exact element={<UserAccount />} />
			<Route path="/startupaccount" exact element={<StartupAccount />} />
			<Route path="/profile" exact element={<Profile />} />
			<Route path="/mynetwork" exact element={<MyNetwork />} />
			<Route path="/notifi" exact element={<Notifi />} />
			<Route path="/startup" exact element={<Startup />} />
			<Route path="/startupview/:id" exact element={<StartupView />} />
			
		
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
};

export default App;

