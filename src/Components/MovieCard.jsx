import React, { useState } from "react";
import { Button, Card, Modal, Form } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { deleteMovie, updateMovie } from "../Redux/movieSlice";
import { Link } from "react-router-dom";

const MovieCard = ({ movieInfo }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updatedMovie, setUpdatedMovie] = useState({
    id: movieInfo.id,
    title: movieInfo.title,
    description: movieInfo.description,
    posterURL: movieInfo.posterURL,
    trailerUrl: movieInfo.trailerUrl,
  });
  const onChangeHandler = (e) => {
    setUpdatedMovie({ ...updatedMovie, [e.target.name]: e.target.value });
  };
  const UpdateMovieHandler = (e) => {
    e.preventDefault();
    dispatch(updateMovie({ id: movieInfo.id, updatedMovie: updatedMovie }));
    handleClose();
  };

  return (
    <div style={{ marginBottom: "45px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movieInfo.posterURL} />
        <Card.Body>
          <Card.Title>{movieInfo.title} </Card.Title>
          <Card.Text>{movieInfo.description}</Card.Text>
          <Rating name="read-only" value={movieInfo.rating} readOnly max={10} />
          <div style={{ display: "flex" }}>
            <Link to={`/details/${movieInfo.id}`}>
              <Button variant="primary"> Check Details </Button>
            </Link>
            <Button
              variant="success"
              style={{ marginLeft: "10px" }}
              onClick={handleShow}
            >
              Update Movie
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Update Movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Title :</Form.Label>
                    <Form.Control
                      onChange={onChangeHandler}
                      type="text"
                      name="title"
                      defaultValue={movieInfo.title}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Description :</Form.Label>
                    <Form.Control
                      onChange={onChangeHandler}
                      type="text"
                      name="description"
                      defaultValue={movieInfo.description}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>PosterURL :</Form.Label>
                    <Form.Control
                      onChange={onChangeHandler}
                      type="text"
                      name="posterURL"
                      defaultValue={movieInfo.posterURL}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label> TrailerUrl :</Form.Label>
                    <Form.Control
                      onChange={onChangeHandler}
                      type="text"
                      name="trailerUrl"
                      defaultValue={movieInfo.trailerUrl}
                    />
                  </Form.Group>

                  <Rating
                    max={10}
                    name="simple-controlled"
                    defaultValue={movieInfo.rating}
                    onChange={(event, newValue) => {
                      setUpdatedMovie({ ...updatedMovie, rating: newValue });
                    }}
                  />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={UpdateMovieHandler}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Card.Body>

        <Button
          variant="danger"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            dispatch(deleteMovie(movieInfo.id));
          }}
        >
          Delete
        </Button>
      </Card>
    </div>
  );
};

export default MovieCard;
