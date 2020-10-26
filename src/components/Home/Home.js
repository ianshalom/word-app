import React from "react";
import styled from "styled-components";

function Home() {
  const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: palevioletred;
  `;

  return (
    <div>
      <Title>Home</Title>
      <h3>Find, learn, save, review.</h3>
    </div>
  );
}

export default Home;
