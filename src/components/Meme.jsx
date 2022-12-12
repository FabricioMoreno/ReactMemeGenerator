import React, { useState } from "react";
import memesData from "../memesData";

function Meme(){
    const [memeImage, setMemeImage] = useState("")

    function getRandomMeme(){
        const memeData = memesData.data.memes
        let max = memeData.length
        const randomNumber = Math.floor(Math.random() * memeData.length);

        setMemeImage(memeData[randomNumber].url)
    }
    return(
        <main>
            <div action="" className="form">
                <div className="form--inputs">
                    <input type="text" 
                    placeholder=""/>
                    <input type="text" />                
                </div>

                <button className="form--submit" onClick={getRandomMeme}>
                Get a new meme image  🖼
                </button>
            </div>
            <img src={memeImage} className="memeImage"/>
        </main>
        

    )
}

export default Meme;