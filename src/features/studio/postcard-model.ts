import type { PlacedSticker } from "./studio-data";

export type DrawingPoint = {
  x: number;
  y: number;
};

export type DrawingStroke = {
  id: string;
  points: DrawingPoint[];
  color: string;
  width: number;
};

export type PostcardDraft = {
  schemaVersion: 1;
  backgroundIndex: number;
  stickers: PlacedSticker[];
  message: string;
  strokes: DrawingStroke[];
};

export function createEmptyPostcard(): PostcardDraft {
  return {
    schemaVersion: 1,
    backgroundIndex: 0,
    stickers: [],
    message: "",
    strokes: [],
  };
}
