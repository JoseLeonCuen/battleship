"use client";

import React from "react";
import styled from "styled-components";
import Board from "../../components/Board";

export default function Home() {
  const Game = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10%;
    background-color: rgb(20, 80, 150);
  `;
  return (
    <main className="">
      <Game>
        <Board player={true} />
        {/* <Board /> */}
      </Game>
    </main>
  )
}
