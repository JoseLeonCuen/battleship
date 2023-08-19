import { ShipType } from "./types"
import { attackShip, isShipSunk, isGameOver } from "./combat";

const simulateClick = (location: string) => {
  const cellToAttack = document.getElementById(location);

  console.log("CELL!!", cellToAttack);
}

function CPUBattle () {
  let shipFound = false;

  
}