import { useState, useEffect } from "react";


const RandomDadJokeWithButton = () => {
  const [joke, setJoke] = useState("this is a sample joke.");

  useEffect(() => {
    fetchJoke()
  }, [])

  const fetchJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => setJoke(data.joke))
  }

  return (
    <div className={"component"}>
      <h1>Random Dad Joke.</h1>
      <p>{joke}</p>
      <button onClick={() => fetchJoke()}>Shit Joke, gimme a new one.</button>
    </div>
  )
}


export { RandomDadJokeWithButton };