import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addMovie } from "../Redux/movieSlice";

const AddMovie = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    posterURL: "",
    trailerUrl: "",
  });
  const onChangeHandler = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const AddMovieHandler = (e) => {
    e.preventDefault();
    dispatch(addMovie(newMovie));
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title :</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description :</Form.Label>
              <Form.Control
                type="text"
                name="description"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>PosterURL :</Form.Label>
              <Form.Control
                type="text"
                name="posterURL"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> TrailerUrl :</Form.Label>
              <Form.Control
                type="text"
                name="trailerUrl"
                onChange={onChangeHandler}
              />
            </Form.Group>

            <Rating
              max={10}
              name="simple-controlled"
              onChange={(event, newValue) => {
                setNewMovie({ ...newMovie, rating: newValue });
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={AddMovieHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
