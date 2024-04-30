import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "../components/NavBar";

function Movie() {

  const [movie, setMovie] = useState({})
  const params = useParams();
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(r => r.json())
      .then(movieData => setMovie(movieData))
      .catch(error => console.error(error))
  }, [movieId])

  if(!movie.title){
    return <h1>Loading...</h1>;
  };
  
  const movieGenre = movie.genres.join(", ");
  
  return (
    <>
      <header>
        {<NavBar/>}
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        <span>{movieGenre}</span> 
      </main>
    </>
  );
};

export default Movie;
