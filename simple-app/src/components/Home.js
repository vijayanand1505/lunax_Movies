import React from "react";
import "./Home.css";
import { Col, Card, Row, Button } from "react-bootstrap";
import Movies from "./Movies";
import { IoMdStar } from "react-icons/io";
import intersteller from "../images/intersteller.jpg";
import beautifulmind from "../images/beautifulmind.jpeg";
import intothewild from "../images/intothewild.jpeg";
import nineteen from "../images/nineteen.jpeg";
import passengers from "../images/passengers.jpeg";
import trueman from "../images/trueman.jpeg";
import fightclub from "../images/fightclub.jpeg";
import shawshank from "../images/shawshank.jpeg";

const moviesData = [
  {
    title: "Interstellar",
    genre: "Scifi-Action",
    rating: "8.7",
    backgroundImage: intersteller,
  },
  {
    title: "Beautiful Mind",
    genre: "Action-Drama",
    rating: "7.8",
    backgroundImage: beautifulmind,
  },
  {
    title: "Shawshank Redemption",
    genre: "Drama",
    rating: "9.2",
    backgroundImage: shawshank,
  },
  {
    title: "Into the Wild",
    genre: "Scifi-Action",
    rating: "8.9",
    backgroundImage: intothewild,
  },
  {
    title: "1917",
    genre: "War-Drama",
    rating: "9.2",
    backgroundImage: nineteen,
  },
  {
    title: "Passengers",
    genre: "Scifi-Action",
    rating: "8.9",
    backgroundImage: passengers,
  },
  {
    title: "The Truman Show",
    genre: "War-Drama",
    rating: "9.2",
    backgroundImage: trueman,
  },
  {
    title: "Fight Club",
    genre: "Scifi-Action",
    rating: "8.9",
    backgroundImage: fightclub,
  },
];

const Home = () => {
  return (
    <>
      <div class="section">
        <h1 class="title">Recommended Movies</h1>
      </div>

      <Row xs={1} md={2} lg={3} xl={4}>
        {moviesData.map((movie, index) => (
          <Col key={index}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>

      <Movies />
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

export default Home;
