import { ShipType, ShipPrimitive, Orientation } from "./types";
import shipData from "./ships.json";

export const numbers = ["1", "2", "3", "4", "5" ,"6", "7", "8", "9", "10"];
export const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const getOrientation = (): Orientation => Math.random() > 0.5 ? "horizontal" : "vertical";

const getRandomNumber = (): number => Math.floor(Math.random() * 10);

const getStartingPoint = () : string => letters[getRandomNumber()] + numbers[getRandomNumber()];

const doesShipFit = (
  coordenates: string[],
  length: number,
  orientation: Orientation,
  existingShips: ShipType[]
): boolean => {
  let result = true;
  if (coordenates.length == 0) {
    return false;
  }

  if (orientation == "horizontal") {
    let column = Number.parseInt(coordenates[0][1]);
    if (column + length > 11) {
      return false;
    }
  }  
  if (orientation == "vertical") {
    let row = letters.indexOf(coordenates[length-1][0]) + 1;
    if (row == 0) {
      return false;
    }
  }

  existingShips.forEach( ship => {
    ship.locations.some(location => {
      for (let i=0; i < coordenates.length; i++) {
        if (coordenates[i] == location) {
          result = false;
          return true;
        }
      }
    })
  });

  return result;
};

const placeShip = (length: number, existingShips: ShipType[]): string[] => {
  const orientation: Orientation = getOrientation(); 
  let start = "";
  let coordenates: string[] = [];

  while(doesShipFit(coordenates, length, orientation, existingShips) == false) {
    coordenates = [];
    start = getStartingPoint();
    
    if (orientation == "horizontal") {
      const column = Number.parseInt(start[1]);
      const row = start[0];
      for (let i=0; i < length; i++) {
        coordenates.push(row + (column+ i));
      }
    }
    if (orientation == "vertical") {
      const column = start[1];
      const row = start[0];
      const rowIndex = letters.indexOf(row);
      for (let i=0; i < length; i++) {
        coordenates.push(letters[rowIndex + i] + column);
      }
    }
  }

  return coordenates;
};

const newShip = (ship: ShipPrimitive, existingShips: ShipType[]): ShipType => {
  const locations = placeShip(ship.length, existingShips);

  console.log("LOC!!", locations);
  return {
    name: ship.name,
    HP: ship.length,
    locations: locations
  }
}

export const setBoard = (): ShipType[] => {
  const { ships } = shipData; 
  let newShips: ShipType[] = [];

  for (let i=0; i < ships.length; i++) {
    const ship: ShipType = newShip(ships[i], newShips);
    newShips.push(ship);
  }


  return newShips;
};