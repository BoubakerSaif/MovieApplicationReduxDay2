import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
  const { movies } = useSelector((state) => state.movieRed);

  const { id } = useParams();
  let specificMovie = movies.filter((el) => el.id == id);
  console.log(specificMovie);
  return (
    <div>
      <Card style={{ width: "800px", margin: "auto" }}>
        <iframe
          src={specificMovie[0].trailerUrl}
          width="650px"
          height="400px"
        ></iframe>
        <Card.Body>
          <Card.Title> {specificMovie[0].title} </Card.Title>
          <Card.Text>{specificMovie[0].description}</Card.Text>
          <Rating
            name="read-only"
            readOnly
            max={10}
            value={specificMovie[0].rating}
          />
          <Link to={"/"}>
            <Button variant="primary" style={{ display: "block" }}>
              Back Home
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
