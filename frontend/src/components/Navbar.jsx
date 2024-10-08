import React from 'react';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a className="navbar-brand mx-4" href="#">KET-Chat</a>

                <button className="btn btn-outline-light mx-4" type="button">
                    Cerrar sesión
                </button>
            </nav>
        </>
    );
};
