import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import boatImage from "../assets/boat_cropped.jpg";

const Styles = styled.div``;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Learn by youtube video</p>
      </Container>
    </Jumbo>
  </Styles>
);
