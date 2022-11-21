import React, { useEffect, useState } from "react";

export default function Main(props) {
    const [meme, setMeme] = useState({topText: "TOP TEXT", bottomText: "BOTTOM TEXT", imageUrl: "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif"});
    function handleClick() {
        const randomNumber = Math.floor(Math.random() * props.memesArray.length);
        setMeme(prevMeme => ({...prevMeme, imageUrl: props.memesArray[randomNumber].url}))
    }
    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({...prevMeme, [name]: value}));
    }
    return (
        <div className="main-container">
            <div className="form">
                <input type="text" name="topText" className="topText" placeholder="Top text" onChange={handleChange}/>
                <input type="text" name="bottomText" className="bottomText" placeholder="Bottom text" onChange={handleChange}/>
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} className="meme--image" />
                <h2 className="meme--top-text">{meme.topText}</h2>
                <h2 className="meme--bottom-text">{meme.bottomText}</h2>
            </div>
        </div>
    );
}