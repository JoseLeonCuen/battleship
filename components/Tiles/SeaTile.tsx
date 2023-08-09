"use client";

import React, { useContext } from "react";
import styled from "styled-components";

const Tile = styled.div<{ attacked?: boolean; }>`
  box-sizing: border-box;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  color: white;

  grid-column-start: span 1;

  button {
    width: 100%;
    height: 100%;
    padding: 0;
    display: grid;
    background-color: ${props => props.attacked ? "rgb(90,90,150);" : "rgb(120,120,255);"}
    color: white;
    border: 0;
  }
  button:hover{
    background-color: ${props => props.attacked ? "" : "red"};
  }
`;

const Ship = styled.div<{ attacked: boolean; player: boolean;}>`
  width: ${props => props.player || props.attacked ? "70%;" : "0;"}
  height: ${props => props.player || props.attacked ? "70%;" : "0;"}
  border-radius: 10px;
  justify-self: center;
  align-self: center;
  color: black;
  font-size: 1.6rem;
  background-color: ${props => props.attacked ? "rgb(170,70,70);" : "rgb(20,20,20);"};
  border: ${props => props.attacked ? "2px solid rgb(20, 20, 20);" : ""}
`;

interface SeaTileProps {
  id: string;
  onClick: (id: string) => void;
  player?: boolean;
  ship?: boolean;
  attacked?: boolean;
  sunk?: boolean;
}

const SeaTile: React.FC<SeaTileProps> = ({
  id,
  onClick,
  player = false,
  attacked = false,
  ship = false,
  sunk = false
}) => {  
  return (
    <Tile attacked={attacked}>
      <button disabled={attacked} onClick={() => onClick(id)}>
        {ship && <Ship player={player} attacked={attacked}>{sunk && "X"}</Ship>}
      </button>
    </Tile>
  )
}
export default SeaTile;