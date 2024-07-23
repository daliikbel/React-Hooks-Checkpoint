import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.posterUrl} height="300px" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text style={{"height":"170px"}}>{movie.Description}</Card.Text>

        <div className="text-center display-6 ">
          <StarRatingComponent
            name="rating"
            value={movie.rating} 
          />
        </div>
        <Link to={`/movie/${movie.title}`}>
        <Button variant="dark"> More details </Button>
      </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
