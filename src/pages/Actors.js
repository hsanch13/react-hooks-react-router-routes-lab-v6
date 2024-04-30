import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(actorsData => setActors(actorsData))
  }, [])

  const renderActors = () => {
    return actors.map(actor => (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
        </ul>
      </article>
    ))
  }

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Actors Page</h1>
          {renderActors()}
      </main>
    </>
  );
};

export default Actors;
