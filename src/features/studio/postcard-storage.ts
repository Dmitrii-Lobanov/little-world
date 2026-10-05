import type { PlacedSticker } from "./studio-data";

const STORAGE_KEY = "little-world-postcards";

export type SavedPostcard = {
  id: string;
  createdAt: string;
  backgroundIndex: number;
  stickers: PlacedSticker[];
};

export function getPostcardsRaw(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

export function parsePostcards(raw: string | null): SavedPostcard[] {
  if (!raw) return [];

  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value) ? (value as SavedPostcard[]) : [];
  } catch {
    return [];
  }
}

export function readPostcards(): SavedPostcard[] {
  return parsePostcards(getPostcardsRaw());
}

export function subscribePostcards(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  window.addEventListener("little-world-postcards-changed", onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("little-world-postcards-changed", onChange);
  };
}

export function savePostcard(postcard: SavedPostcard): void {
  const postcards = readPostcards();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([postcard, ...postcards]));
  window.dispatchEvent(new Event("little-world-postcards-changed"));
}
