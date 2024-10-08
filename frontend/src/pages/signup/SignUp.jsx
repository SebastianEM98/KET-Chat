import React from 'react'

export const SignUp = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center min-vw-100 min-vh-100 mx-auto'>
            <div className='w-50 p-5 rounded-4 shadow-lg bg-dark'>
                <h1 className='fw-semibold text-center text-white text-gray-300'>
                    Registro
                    <span className='text-warning text-blue-500'> KET-Chat</span>
                </h1>

                <form className='mt-3'>
                    <div class="mb-3">
                        <label for="name" class="form-label text-white-50">Nombre Completo</label>
                        <input type="name" class="form-control" id="name" />
                    </div>
                    <div class="mb-3">
                        <label for="username" class="form-label text-white-50">Usuario</label>
                        <input type="username" class="form-control" id="username" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label text-white-50">Contraseña</label>
                        <input type="password" class="form-control" id="password" />
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label text-white-50">Confirmar Contraseña</label>
                        <input type="confirmPassword" class="form-control" id="confirmPassword" />
                    </div>
                    <a href='#' className='small text-white'>¿Ya tienes una cuenta? Inicia Sesión</a>
                    <button type="submit" class="btn btn-warning w-100 mt-3">Registrarse</button>
                </form>
            </div>
        </div>
    )
}