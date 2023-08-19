"use client";

import React, { useContext } from "react";
import styled from "styled-components";
import { ShipType } from "../../utils/types";

const Tile = styled.div<{ id: string; attacked?: boolean; }>`
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
  onClick: (id: string, ship: ShipType | undefined) => void;
  disabled: boolean;
  player?: boolean;
  ship?: ShipType;
  sunk?: boolean;
}

const SeaTile: React.FC<SeaTileProps> = ({
  id,
  onClick,
  player = false,
  disabled = false,
  ship,
  sunk = false
}) => {  
  return (
    <Tile id={id} attacked={disabled}>
      <button disabled={disabled} onClick={() => onClick(id, ship)}>
        {ship && <Ship player={player} attacked={disabled}>{sunk && "X"}</Ship>}
      </button>
    </Tile>
  )
}
export default SeaTile;