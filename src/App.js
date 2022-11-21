import React, {useState, useEffect} from "react";
import NavBar from "./Components/Navbar";
import Main from "./Components/Main";

export default function App() {
    const [memesArray, setMemesArray] = useState([]);
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setMemesArray(data.data.memes));
    }, []);
    console.log(memesArray);
    return (
        <div className="app-container">
            <NavBar />
            <Main memesArray={memesArray}/>
        </div>
    );
}