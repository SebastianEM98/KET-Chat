import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Global } from '../Global';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
	const navigate = useNavigate();

	const login = async (username, password) => {
		const success = handleInputErrors(username, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch(`${Global.url}/auth/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.message);
			}

			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
			navigate("/");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Por favor llena los campos");
		return false;
	}

	return true;
}
