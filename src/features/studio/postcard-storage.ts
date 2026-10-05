import type { PlacedSticker } from "./studio-data";

const STORAGE_KEY = "little-world-postcards";

export type SavedPostcard = {
  id: string;
  createdAt: string;
  backgroundIndex: number;
  stickers: PlacedSticker[];
};

export function readPostcards(): SavedPostcard[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value) ? (value as SavedPostcard[]) : [];
  } catch {
    return [];
  }
}

export function savePostcard(postcard: SavedPostcard): void {
  const postcards = readPostcards();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([postcard, ...postcards]));
}
