import React from "react";
import "./Movies.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import Show from "./Show";
import { IoMdStar } from "react-icons/io";
import jailer from "../images/jailer.jpeg";
import jawaan from "../images/jawaan.jpeg";
import kushi from "../images/kushi.jpeg";
import markantony from "../images/markantony.jpeg";
import missshetty from "../images/missshetty.jpeg";
import rdx from "../images/rdx.jpeg";
import adiye from "../images/adiye.jpeg";
import kingofkotha from "../images/kingofkotha.jpeg";

const moviesData = [
  {
    title: "Jailer",
    genre: "Scifi-Action",
    rating: "8.7",
    backgroundImage: jailer,
  },
  {
    title: "Jawaan",
    genre: "Action-Drama",
    rating: "7.8",
    backgroundImage: jawaan,
  },
  {
    title: "Kushi",
    genre: "Drama",
    rating: "9.2",
    backgroundImage: kushi,
  },
  {
    title: "Mark Antony",
    genre: "Scifi-Action",
    rating: "8.9",
    backgroundImage: markantony,
  },
  {
    title: "Miss Shetty Mr Polishetty",
    genre: "War-Drama",
    rating: "9.2",
    backgroundImage: missshetty,
  },
  {
    title: "Rdx",
    genre: "Scifi-Action",
    rating: "8.9",
    backgroundImage: rdx,
  },
  {
    title: "Adiye",
    genre: "War-Drama",
    rating: "9.2",
    backgroundImage: adiye,
  },
  {
    title: "King of Kotha",
    genre: "Scifi-Action",
    rating: "8.9",
    backgroundImage: kingofkotha,
  },
];

const Movies = () => {
  return (
    <>
      <div class="section">
        <h1 class="title">Movies For You</h1>
      </div>

      <Row xs={1} md={2} lg={3} xl={4}>
        {moviesData.map((movie, index) => (
          <Col key={index}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>

      <Show />
    </>
  );
};

const MovieCard = ({ movie }) => {
  return (
    <Col>
      <Card style={{ width: "18rem", margin: "1rem" }}>
        <Card.Img
          variant="top"
          src={movie.backgroundImage}
          alt={movie.title}
          style={{ height: "380px" }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>Genre: {movie.genre}</Card.Text>{" "}
          <Row>
            <Col>
              <Button variant="danger">Book</Button>
            </Col>
            <Col>
              <p>
                <IoMdStar style={{ fontSize: "30px" }} /> {movie.rating}/10
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Movies;
