import { ShipType } from "./types"

export const isGameOver = (ships: ShipType[]): boolean => ships.every(ship => isShipSunk(ship));

export const isShipSunk = (ship?: ShipType): boolean => ship ? ship.HP === 0 : false;

export const attackShip = (hurtShip: ShipType, ships: ShipType[], setShips: (ships: ShipType[]) => void) => {
  const newShips = ships;
  const shipIndex = ships.findIndex(ship => ship.name === hurtShip.name);
  newShips.splice(shipIndex, 1, {
    ...hurtShip,
    HP: hurtShip.HP - 1
  });
  setShips(newShips);
}