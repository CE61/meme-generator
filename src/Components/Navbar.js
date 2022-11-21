import React from "react";
import TrollFace from "../Images/TrollFace.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={TrollFace} height="32px" width="32px" />
            <span className="navbar--text">Meme Generator</span>
        </nav>
    );
}