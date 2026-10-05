export const backgrounds = [
  {
    name: "Sunny meadow",
    swatch: "bg-sky",
    sky: "#A9DDF3",
    sun: "#FFD56C",
    farHill: "#B6DC99",
    middleHill: "#8ACB88",
    nearHill: "#5EA776",
    roof: "#F28C79",
  },
  {
    name: "Peach sunset",
    swatch: "bg-coral",
    sky: "#F6B39F",
    sun: "#FFE4A3",
    farHill: "#D8B6C8",
    middleHill: "#A997BE",
    nearHill: "#786B9C",
    roof: "#A85472",
  },
  {
    name: "Quiet forest",
    swatch: "bg-grass",
    sky: "#B9D9C6",
    sun: "#F5E6AA",
    farHill: "#A5C59C",
    middleHill: "#79AA82",
    nearHill: "#4D846A",
    roof: "#C87965",
  },
] as const;

export const stickers = [
  { name: "Sun", symbol: "☀" },
  { name: "Flower", symbol: "✿" },
  { name: "Star", symbol: "★" },
  { name: "Heart", symbol: "♥" },
];

export type Background = (typeof backgrounds)[number];
export type StickerOption = (typeof stickers)[number];

export type PlacedSticker = {
  id: string;
  name: string;
  symbol: string;
  x: number;
  y: number;
};
