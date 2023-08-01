"use client";

import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import SeaTile from "./Tiles/SeaTile";
import TextTile from "./Tiles/TextTile";

export type Coordenates = {
  [key: string]: boolean;
}

const Board: React.FC = () => {
  const numbers = ["", "1", "2", "3", "4", "5" ,"6", "7", "8", "9", "10"];
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const Board = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(11, 40px);
    row-gap: 1px;
    grid-template-columns: repeat(11, 40px);
    column-gap: 1px;
    background-color: rgb(190,190,190);
    border-radius: 10px;
    width: 470px;
    height: 470px;
    color: white;
    padding: 5px;
  `;

  const [attacks, setAttacks] = useState({} as Coordenates);
  const [ships, setShips] = useState({
    B2: true,
    B3: true,
    B4: true
  } as Coordenates);

  const attack = (id: string) => {
    setAttacks({
      ...attacks,
      [id]: true
    }
    )
  }

  let tiles: ReactNode[] = [];
  for (let i=0; i<11; i++) {
    tiles.push(
      <TextTile text={numbers[i]} orientation="horizontal"/>
    );
  }

  for (let i=0; i < 10; i++) {
    tiles.push(
      <TextTile text={letters[i]} orientation="vertical"/>
    );
    for (let e=0; e<10; e++) {
      let id = letters[i] + numbers[e+1];
      tiles.push(
          <SeaTile id={id} onClick={attack} ship={ships[id]} attacked={attacks[id]}/>
      )
    }
  }


  return (
    <Board>
      {...tiles}
    </Board>
  )
}

export default Board;
