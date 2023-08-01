"use client";

import React, { useState } from "react";
import styled from "styled-components";

interface SeaTileProps {
  id: string;
  onClick: (id: string) => void;
  attacked?: boolean;
  ship?: boolean;
}
const SeaTile: React.FC<SeaTileProps> = ({
  id,
  onClick,
  attacked = false,
  ship = false
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
  

  return (
    <Tile>
      <button onClick={() => onClick(id)}>
        {ship && <div>Ship</div>}
      </button>
    </Tile>
  )
}
export default SeaTile;