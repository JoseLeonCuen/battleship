"use client";

import React, { useState } from "react";
import styled from "styled-components";

interface SeaTileProps {
  id: string;
  onClick: (id: string) => void;
  ship?: boolean;
  attacked?: boolean;
  sunk?: boolean;
}
const SeaTile: React.FC<SeaTileProps> = ({
  id,
  onClick,
  attacked = false,
  ship = false,
  sunk = false
}) => {
  const Tile = styled.div`
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
      ${attacked ? (
        `background-color: rgb(100,100,150);`
        ) : (
        `background-color: rgb(120,120,255);`
      )}
      color: white;
      border: 0;
    }

    ${!attacked && `
      button:hover{
        background-color: red;
      }
    `}
  `;
  
  const Ship = styled.div`
      width: 70%;
      height: 70%;
      border-radius: 10px;
      justify-self: center;
      align-self: center;
      color: black;
      font-size: 1.6rem;
      ${attacked ? (
        "background-color: rgb(170,70,70);"
        ) : (
          "background-color: rgb(20,20,20);"
          )}
      ${attacked && (
        "border: 2px solid rgb(20, 20, 20);"
      )}
  `;

  return (
    <Tile>
      <button onClick={() => onClick(id)}>
      {/* <button onClick={() => attack(id)}> */}
        {ship && <Ship>{sunk && "X"}</Ship>}
      </button>
    </Tile>
  )
}
export default SeaTile;