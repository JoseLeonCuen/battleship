import { ShipType } from "./types"


export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export const getShipName = (id: string, ships: ShipType[]): string => {
  let name= "";
  ships.forEach(ship => {
    if (ship.locations.some(location => location == id)) {
      name = ship.name;
    }
  });
  return name;
};

export const getShip = (name:string, ships: ShipType[]): ShipType => {
  return ships.find( ship => ship.name === name) as ShipType;
}

export const findShip = (id: string, ships: ShipType[]): boolean => (
  ships.some(ship => (
    ship.locations.some(location => location == id)
  ))
);
 
export const isShipSunk = (id: string, ships: ShipType[]): boolean => {
  const shipName = getShipName(id, ships);
  if (shipName) {
    return getShip(shipName, ships).HP === 0;
  }
  return false;
};

export const attackShip = (name: string, ships: ShipType[], setShips: (ships: ShipType[]) => void) => {
  const hurtShip = getShip(name, ships);
  console.log("SHIPS!! ", ships)
  console.log("HURT!! ", hurtShip)
  const shipIndex = ships.findIndex(ship => ship.name === name);
  console.log("INDEX!! ", shipIndex);
  const newShips = ships;
  setShips(newShips.splice(
    shipIndex,
    1,
    {
      ...hurtShip,
      HP: hurtShip.HP - 1
    }
    ))
}