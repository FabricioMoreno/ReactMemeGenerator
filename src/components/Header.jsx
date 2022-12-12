import React from "react";
import trollFace from "../images/TrollFace.png"

function Header(){
    return(
        <header className="header">
            <div className="header--logo">
                <img src={trollFace} />
                <span>Meme Generator</span>
            </div>
            <p>React Course - Project 3</p>
        </header>
    )
}

export default Header