"use client";

import React, { useState, useEffect, useCallback, ReactNode } from "react";
import styled from "styled-components";
import SeaTile from "./Tiles/SeaTile";
import TextTile from "./Tiles/TextTile";

import { ShipType, Coordenates } from "../utils/types";
import { setBoard, letters, numbers } from "../utils/setup";
import { getShipName, attackShip, findShip, isShipSunk } from "../utils/utils";

const Board: React.FC = () => {
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

  const [turn, setTurn] = useState(true);
  const [attacks, setAttacks] = useState({} as Coordenates);
  const [ships, setShips] = useState([] as ShipType[]);

  useEffect(() => {
    setShips(setBoard());
  }, []);

  const columns = ["", ...numbers];
  const attack = (id: string) => {
    setAttacks({
      ...attacks,
      [id]: true
    });

    if (findShip(id, ships)) {
      console.log("HIT!!");
      const name = getShipName(id, ships);
      attackShip(name, ships, setShips);
    }
    setTurn(!turn);
  };

  let tiles: ReactNode[] = [];

  // useEffect(() => {
    for (let i=0; i<11; i++) {
      tiles.push(
        <TextTile text={columns[i]} orientation="horizontal"/>
      );
    }
  
    for (let i=0; i < 10; i++) {
      tiles.push(
        <TextTile text={letters[i]} orientation="vertical"/>
      );
      for (let e=0; e<10; e++) {
        let id = letters[i] + columns[e+1];
        tiles.push(
            <SeaTile
              id={id}
              onClick={attack}
              attacked={attacks[id]}
              ship={findShip(id, ships)}
              sunk={isShipSunk(id, ships)}
            />
        )
      }
    }
  // },[numbers, letters, attacks, ships, tiles, attack])


  return (
    <Board>
      {...tiles}
    </Board>
  )
}

export default Board;
