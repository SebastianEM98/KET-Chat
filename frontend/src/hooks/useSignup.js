import React, { useState } from 'react'
import { useAuthContext } from "../context/AuthContext";
import toast from 'react-hot-toast';
import { Global } from '../Global';

export const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ name, username, password, confirmPassword }) => {
        const success = handleInputErrors({ name, username, password, confirmPassword });

        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch(`${Global.url}/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, username, password, confirmPassword, type: "estudiante"}),
            });

            const data = await res.json();
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
}

function handleInputErrors({ name, username, password, confirmPassword }) {
    if (!name || !username || !password || !confirmPassword) {
        toast.error("Por favor llena todos los campos");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Las contraseñas no coinciden");
        return false;
    }

    if (password.length < 4) {
        toast.error("La contraseña debe tener al menos 4 characters");
        return false;
    }

    return true;
}