"use client";

import React from "react";
import styled from "styled-components";
import { Orientation } from "../../utils/types";
interface TextTileProps {
  text: string;
  orientation: "horizontal" | "vertical";
}

const Tile = styled.div<{orientation: Orientation}>`
box-sizing: border-box;
width: 40px;
height: 40px;
color: white;
${props => props.orientation == "horizontal" ? (
  "border-right: 1px solid black;" 
) : (
  "border-top: 1px solid black;"
)}
grid-column-start: span 1;

div {
  padding: 10px;
  text-align: center;
}
`;

const TextTile: React.FC<TextTileProps> = ({text, orientation}) => {
  return (
    <Tile orientation={orientation}>
      { text && (
        <div>
          {text}
        </div>
      )}
    </Tile>
  )
}

export default TextTile;