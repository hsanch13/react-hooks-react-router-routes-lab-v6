import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({title, id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {/* Add a link to a movie page */}
        <Link to={`/movies/${id}`}>View Movie</Link>
    </article>
  );
};

export default MovieCard;