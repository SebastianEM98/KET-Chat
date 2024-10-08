import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from "../../hooks/useLogin";

export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className='d-flex flex-column align-items-center justify-content-center min-vw-100 min-vh-100 mx-auto'>
            <div className='w-50 p-5 rounded-4 shadow-lg bg-dark'>
                <h1 className='fw-semibold text-center text-white text-gray-300'>
                    Iniciar Sesión
                    <span className='text-warning text-blue-500'> KET-Chat</span>
                </h1>

                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label text-white-50">Usuario</label>
                        <input type="username" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-white-50">Contraseña</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Link to='/signup' className='small text-white'>¿No tienes una cuenta? Registrate</Link>
                    <button type="submit" className='btn btn-warning w-100 mt-3' disabled={loading}>
                        {loading ? (<div className="spinner-border m-0 p-0" role="status"></div>) : "Ingresar"}
                    </button>
                </form>
            </div>
        </div>
    )
}