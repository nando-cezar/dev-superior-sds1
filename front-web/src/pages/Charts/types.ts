import { Plaform } from "../Records/types";

export type Game = {
  id: number;
  title: string;
  platform: Plaform;
}

export type ChartItem = {
  x: string;
  y: number;
}