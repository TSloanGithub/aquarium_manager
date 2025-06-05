import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){
    return(
    <>
        <nav className="navbar-container">
            <Link to="/">Home</Link>
            <Link to="/account">Account</Link>
            <Link to="/aquarium">Aquarium</Link>
            <Link to="/fish">Fish</Link>
        </nav>
    </>
    )
}