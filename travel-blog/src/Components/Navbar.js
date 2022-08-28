import React from "react";
import logo from "../images/logo.png"

export default function Navbar(){
    return(
        <nav>
            <img src={logo}></img>
            <p className="navText">My Travel Blog</p>
        </nav>
    )
}