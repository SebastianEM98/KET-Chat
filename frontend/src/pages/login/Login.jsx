import React from 'react'

export const Login = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center min-vw-100 min-vh-100 mx-auto'>
            <div className='w-50 p-5 rounded-4 shadow-lg bg-dark'>
                <h1 className='fw-semibold text-center text-white text-gray-300'>
                    Iniciar Sesión
                    <span className='text-warning text-blue-500'> KET-Chat</span>
                </h1>

                <form className='mt-3'>
                    <div class="mb-3">
                        <label for="username" class="form-label text-white-50">Usuario</label>
                        <input type="username" class="form-control" id="username" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label text-white-50">Contraseña</label>
                        <input type="password" class="form-control" id="password" />
                    </div>
                    <a href='#' className='small text-white'>¿No tienes una cuenta? Registrate</a>
                    <button type="submit" class="btn btn-warning w-100 mt-3">Ingresar</button>
                </form>
            </div>
        </div>
    )
}