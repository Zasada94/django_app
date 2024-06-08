import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
// import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";
import { Link } from "react-router-dom";

function Form({ route, method }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const name = method === "login" ? "Login" : "Register";
	const is_login =
		method === "login" ? "don't have an account?" : "alreaddy have an account?";
	const is_login_button = method === "login" ? "Register" : "Login";

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();

		try {
			const res = await api.post(route, { username, password });
			if (method === "login") {
				localStorage.setItem(ACCESS_TOKEN, res.data.access);
				localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
				navigate("/");
			} else {
				navigate("/login");
			}
		} catch (error) {
			alert(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<h1>{name}</h1>
			<input
				className="form-input"
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username"
			/>
			<input
				className="form-input"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
			/>
			{loading && <LoadingIndicator />}
			<button className="form-button" type="submit">
				{name}
			</button>
			<div className="form-button-reglog">
				<div className="is-login">{is_login}</div>{" "}
				<Link to={method === "login" ? `/register` : `/login`}>
					<button className="is-login-button">{is_login_button}</button>
				</Link>
			</div>
		</form>
	);
}

export default Form;
