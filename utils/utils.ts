import { ShipType } from "./types"


export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export const getShip = (id: string, ships: ShipType[]): ShipType | undefined => (
  ships.find(ship => ship.locations.some(location => location == id))
);

export const isShipHere = (id: string, ships: ShipType[]): boolean => (
  ships.some(ship => (
    ship.locations.some(location => location == id)
  ))
);