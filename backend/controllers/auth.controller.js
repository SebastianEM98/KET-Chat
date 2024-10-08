import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
        const { name, username, password, confirmPassword, type } = req.body;

        if (!name || !username || !password) {
            return res.status(400).json({ message: "Faltan datos por enviar" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Las contraseñas no coinciden" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ message: "El usuario ingresado ya se encuentra registrado" });
        }

        // Password Hash
        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = new User({
            name,
            username,
            password: hashedPassword,
            type: type !== "estudiante" && type !== "moderador" ? "estudiante" : type
        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            return res.status(201).json({
                message: "Usuario registrado con exito",
                user: {
                    _id: newUser._id,
                    name: newUser.name,
                    username: newUser.username,
                    type: newUser.type
                }
            });
        } else {
            return res.status(400).json({ message: "Datos no validos" });
        }

    } catch (error) {
        console.log("Error en el signup controller", error.message);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Nombre de usuario o contraseña incorrectos" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            user: {
                _id: user._id,
                name: user.name,
                username: user.username,
                type: user.type
            }
        });
    } catch (error) {
        console.log("Error en el login controller", error.message);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Sesión cerrada correctamente" });
    } catch (error) {
        console.log("Error en el logout controller", error.message);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};