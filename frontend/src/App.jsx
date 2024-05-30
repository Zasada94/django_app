import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import EditPost from "./pages/EditPost";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout";

function RegisterAndLogout() {
	localStorage.clear();
	return <Register />;
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/register" element={<RegisterAndLogout />} />
				<Route path="/posts/:postId/edit" element={<EditPost />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
