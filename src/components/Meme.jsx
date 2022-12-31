import React, { useEffect, useState } from "react";
import memesData from "../memesData";

function Meme(){
    const [meme, setMeme] = useState({
        topText:"",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImges, setAllMemeImges] = useState({})

    useEffect(()=>{
        /* fetch("https://api.imgflip.com/get_memes")
        .then(data=> data.json())
        .then(data=>{
            console.log("aaa")
            setAllMemeImges(data)
        })
        console.log("here") */
        async function getMemeDatAPI(){
            let data = await fetch("https://api.imgflip.com/get_memes")
            data = await data.json()

            setAllMemeImges(data)
        }
        getMemeDatAPI()
    },[])

    function getRandomMeme(){
        const memeData = allMemeImges.data.memes
        const randomNumber = Math.floor(Math.random() * memeData.length);

        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                randomImage: memeData[randomNumber].url
            }
        })
    }

    function upadateMemeData(e){
        const {name,value} = e.target

        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                [name] : value
            }
        })
    }
    console.log(meme);
    return(
        <main>
            <div className="form">
                <div className="form--inputs">
                    <input type="text" 
                    placeholder="TopText"
                    value={meme.topText}
                    onChange={upadateMemeData}
                    name="topText"/>

                    <input type="text" 
                    placeholder="BottomText"
                    value={meme.bottomText}
                    onChange={upadateMemeData}
                    name="bottomText"/>                
                </div>

                <button className="form--submit" onClick={getRandomMeme}>
                Get a new meme image  🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="memeImage" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
        

    )
}

export default Meme;