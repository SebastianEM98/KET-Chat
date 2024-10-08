import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;

		if (!token) {
			return res.status(401).json({ error: "No Autorizado - No se proporcionó un Token" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: "No Autorizado - Token invalido" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "Usuario no encontrado" });
		}

		req.user = user;

		next();
	} catch (error) {
		console.log("Error en middleware protectRoute: ", error.message);
		res.status(500).json({ message: "Error interno del servidor" });
	}
};

export default protectRoute;
