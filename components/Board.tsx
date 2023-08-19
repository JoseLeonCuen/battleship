"use client";

import React, { useState, useEffect, useCallback, ReactNode } from "react";
import styled from "styled-components";
import SeaTile from "./Tiles/SeaTile";
import TextTile from "./Tiles/TextTile";

import { ShipType, Coordenates } from "../utils/types";
import { setBoard, letters, numbers } from "../utils/setup";
import { getShip } from "../utils/utils";
import { attackShip, isGameOver, isShipSunk } from "../utils/combat";

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
  const [over, setOver] = useState(false);

  useEffect(() => {
    setShips(setBoard());
  }, []);
  
  const attack = useCallback((id: string, ship: ShipType | undefined) => {
    setAttacks({
      ...attacks,
      [id]: true
    });

    if (ship) {
      console.log("HIT!!");
      attackShip(ship, ships, setShips);

      if(isShipSunk(ship)) {
        console.log("SUNK!!");
      }

      if(isGameOver(ships)) {
        setOver(true);
        turn ? console.log("YOU WIN!!") : console.log("YOU LOSE!!");
      }
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
        let ship = getShip(id, ships);
        let isSunk = isShipSunk(ship);
        tiles.push(
            <SeaTile
              id={id}
              key={id}
              player={player}
              onClick={attack}
              disabled={attacks[id] || over}
              ship={ship}
              sunk={isSunk}
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
