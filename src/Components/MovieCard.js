import { Rating } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Card className="movie-card" style={{ width: "15rem", height: "30rem" }}>
        <Card.Img className="cardImg" variant="top" src={movie.posterURL} />
        <Card.Body className="movie-card-body">
          <Card.Title>{movie.title}</Card.Title>
          <Rating
            name="read-only"
            value={movie.rating}
            readOnly
            style={{ color: "#66fcf1" }}
          />
          <Card.Text className="movie-card-description">
            <h5>Overview:</h5>
            <p>{movie.description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default MovieCard;
