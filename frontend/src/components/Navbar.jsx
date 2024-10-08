import React from 'react';
import LogoutButton from './LogoutButton';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a className="navbar-brand mx-4" href="#">KET-Chat</a>
                <LogoutButton />
            </nav>
        </>
    );
};
