import React from "react";
import Button from 'react-bootstrap/Button';
import { Link, useParams } from "react-router-dom";

const MovieDetails = ({ movieList }) => {
  console.log(movieList); 

  const params = useParams()
  console.log('params', params)

  const movie = movieList.find((el)=> el.title == params.title)
  console.log('movie', movie)
  return (
    <div className="Details">
      <h1> {movie.title} </h1>
      <h2> {movie.Description}</h2>

      <h1> {<iframe width="560" height="315" src="https://www.youtube.com/embed/s3BpRyA8yaA?si=KphJ6Q91C6PHtrB9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} </h1>
      <Button variant="dark" >
        <Link to='/'> Back to Home </Link>
      </Button>
    </div>
  );
};

export default MovieDetails;
