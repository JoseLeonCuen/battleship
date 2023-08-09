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