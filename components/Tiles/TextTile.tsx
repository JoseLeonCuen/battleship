"use client";

import React from "react";
import styled from "styled-components";

interface TextTileProps {
  text: string;
  orientation: "horizontal" | "vertical";
}

const TextTile: React.FC<TextTileProps> = ({text, orientation}) => {
  const border = orientation == "horizontal" ? (
    "border-right: 1px solid black;"
    ) : (
    "border-top: 1px solid black;"
  )

  const Tile = styled.div`
  box-sizing: border-box;
  // border-radius: 5px;
  width: 40px;
  height: 40px;
  color: white;
  ${border}
  
  grid-column-start: span 1;

  div {
    padding: 10px;
    text-align: center;
  }
  `;

  return (
    <Tile>
      { text && (
        <div>
          {text}
        </div>
      )}
    </Tile>
  )
}

export default TextTile;