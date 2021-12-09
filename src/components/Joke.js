import React from "react";
import { useState, useEffect } from "react";
import './Joke.css';

function Joke() {
    const [joke, setJoke] = useState([]);

    useEffect(() =>{
        getJoke();
    }, []);

    async function getJoke(){
        const res = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
        const data = await res.json();
        setJoke(data.joke)
    }

    return (
        <div className="joke">
            <p>Joke: {joke}</p>
        </div>
    );
}

export default Joke;