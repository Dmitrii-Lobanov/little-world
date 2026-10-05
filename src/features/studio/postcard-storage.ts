import type { DrawingStroke, PostcardDraft } from "./postcard-model";
import type { PlacedSticker } from "./studio-data";

export type SavedPostcard = PostcardDraft & {
  id: string;
  createdAt: string;
};

const STORAGE_KEY = "little-world-postcards";

export function getPostcardsRaw(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

export function parsePostcards(raw: string | null): SavedPostcard[] {
  if (!raw) return [];

  try {
    const value: unknown = JSON.parse(raw);

    if (!Array.isArray(value)) return [];

    return value.flatMap((item: unknown): SavedPostcard[] => {
      if (!item || typeof item !== "object") return [];

      const record = item as Record<string, unknown>;

      if (
        typeof record.id !== "string" ||
        typeof record.createdAt !== "string"
      ) {
        return [];
      }

      return [
        {
          schemaVersion: 1,
          id: record.id,
          createdAt: record.createdAt,
          backgroundIndex:
            typeof record.backgroundIndex === "number"
              ? record.backgroundIndex
              : 0,
          stickers: Array.isArray(record.stickers)
            ? (record.stickers as PlacedSticker[])
            : [],
          message: typeof record.message === "string" ? record.message : "",
          strokes: Array.isArray(record.strokes)
            ? (record.strokes as DrawingStroke[])
            : [],
        },
      ];
    });
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
