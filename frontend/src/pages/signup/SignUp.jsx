import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup';

export const SignUp = () => {

    const [inputs, setInputs] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };


    return (
        <div className='d-flex flex-column align-items-center justify-content-center min-vw-100 min-vh-100 mx-auto'>
            <div className='w-50 p-5 rounded-4 shadow-lg bg-dark'>
                <h1 className='fw-semibold text-center text-white text-gray-300'>
                    Registro
                    <span className='text-warning text-blue-500'> KET-Chat</span>
                </h1>

                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-white-50">Nombre Completo</label>
                        <input type="name" className="form-control" id="name" value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label text-white-50">Usuario</label>
                        <input type="username" className="form-control" id="username" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-white-50">Contraseña</label>
                        <input type="password" className="form-control" id="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label text-white-50">Confirmar Contraseña</label>
                        <input type="password" className="form-control" id="confirmPassword" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>
                    <Link to='/login' className='small text-white'>¿Ya tienes una cuenta? Inicia Sesión</Link>

                    <button type="submit" className='btn btn-warning w-100 mt-3' disabled={loading}>
                        {loading ? (<div className="spinner-border m-0 p-0" role="status"></div>) : "Registrarse"}
                    </button>
                </form>
            </div>
        </div>
    )
}