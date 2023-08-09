"use client";

import React, { useState, useEffect, useCallback, ReactNode } from "react";
import styled from "styled-components";
import SeaTile from "./Tiles/SeaTile";
import TextTile from "./Tiles/TextTile";

import { ShipType, Coordenates } from "../utils/types";
import { setBoard, letters, numbers } from "../utils/setup";
import { getShipName, findShip } from "../utils/utils";
import { attackShip, isShipSunk } from "../utils/combat";

const PlayerBoard = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(11, 40px);
  row-gap: 1px;
  grid-template-columns: repeat(11, 40px);
  column-gap: 1px;
  background: radial-gradient(ellipse at bottom right, rgba(100,100,100,0.6), rgba(200,220,220, 0.7));
  border-radius: 10px;
  width: 470px;
  height: 470px;
  color: white;
  padding: 5px;
`;

interface BoardProps {
  player?: boolean;
};

const Board: React.FC<BoardProps> = ({player = false}) => {

  const [turn, setTurn] = useState(true);
  const [attacks, setAttacks] = useState({} as Coordenates);
  const [ships, setShips] = useState([] as ShipType[]);

  useEffect(() => {
    setShips(setBoard());
  }, []);
  
  const attack = useCallback((id: string) => {
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
    console.log("PLAYER TURN!!", turn);
  }, [attacks, ships, turn]);

  let tiles: ReactNode[] = [];
  const columns = ["", ...numbers];

    for (let i=0; i<11; i++) {
      tiles.push(
        <TextTile key={columns[i]} text={columns[i]} orientation="horizontal"/>
      );
    }

    for (let i=0; i < 10; i++) {
      tiles.push(
        <TextTile key={letters[i]} text={letters[i]} orientation="vertical"/>
      );
      for (let e=0; e<10; e++) {
        let id = letters[i] + columns[e+1];
        tiles.push(
            <SeaTile
              id={id}
              key={id}
              player={player}
              onClick={attack}
              attacked={attacks[id]}
              ship={findShip(id, ships)}
              sunk={isShipSunk(id, ships)}
            />
        )
      }
    }

  return (
    <PlayerBoard>
      {...tiles}
    </PlayerBoard>
  )
}

export default Board;
