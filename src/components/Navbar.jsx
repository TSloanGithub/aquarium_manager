import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
    <>
        <div>
            <Link to="/">Home</Link>
            <Link to="account">Account</Link>
            <Link to="aquarium">Aquarium</Link>
            <Link to="/fish">Fish</Link>
        </div>
    </>
    )
}