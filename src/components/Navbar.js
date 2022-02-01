import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">
            <NavLink className="Navbar-title block" to='/'>Julie Ann Meng</NavLink>
 
            <NavLink className="Navbar-links block" to='/contact'>Contact</NavLink>
            <NavLink className="Navbar-links block" to='/portfolio'>Portfolio</NavLink>
            <NavLink className="Navbar-links block" to='/resume'>Resume</NavLink>
        </div>
    );
}

export default Navbar;