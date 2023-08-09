export type Coordenates = {
  [key: string]: boolean;
}

export type ShipType = {
  name: string;
  HP: number;
  locations: string[];
}

export type ShipPrimitive = {
  name: string;
  length: number;
};

export type Orientation = "horizontal" | "vertical";