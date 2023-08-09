import { ShipType } from "./types"
import { getShip, getShipName } from "./utils";

export const isShipSunk = (id: string, ships: ShipType[]): boolean => {
  const shipName = getShipName(id, ships);
  if (shipName) {
    return getShip(shipName, ships).HP === 0;
  }
  return false;
};

export const attackShip = (name: string, ships: ShipType[], setShips: (ships: ShipType[]) => void) => {
  const hurtShip = getShip(name, ships);
  const newShips = ships;
  const shipIndex = ships.findIndex(ship => ship.name === name);
  newShips.splice(shipIndex, 1, {
    ...hurtShip,
    HP: hurtShip.HP - 1
  });
  setShips(newShips);
}