"use client";

import {
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  backgrounds,
  type PlacedSticker,
  type StickerOption,
} from "./studio-data";
import { createEmptyPostcard, PostcardDraft } from "./postcard-model";

export function usePostcardEditor() {
  const [draft, setDraft] = useState<PostcardDraft>(createEmptyPostcard);

  const selectedBackground = draft.backgroundIndex;
  const placedStickers = draft.stickers;

  function setSelectedBackground(index: number) {
    if (!backgrounds[index]) return;

    setDraft((current) => ({
      ...current,
      backgroundIndex: index,
    }));
  }

  function updateStickers(
    update: (stickers: PlacedSticker[]) => PlacedSticker[],
  ) {
    setDraft((current) => ({
      ...current,
      stickers: update(current.stickers),
    }));
  }

  const drag = useRef<{ id: string; offsetX: number; offsetY: number } | null>(
    null,
  );

  function addSticker(option: StickerOption) {
    updateStickers((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        name: option.name,
        symbol: option.symbol,
        x: 180 + (current.length % 5) * 85,
        y: 190,
      },
    ]);
  }

  function svgPoint(event: ReactPointerEvent<SVGTextElement>) {
    const svg = event.currentTarget.ownerSVGElement;
    const matrix = svg?.getScreenCTM();

    if (!matrix) return null;

    return new DOMPoint(event.clientX, event.clientY).matrixTransform(
      matrix.inverse(),
    );
  }

  function startDragging(
    event: ReactPointerEvent<SVGTextElement>,
    sticker: PlacedSticker,
  ) {
    const point = svgPoint(event);
    if (!point) return;

    drag.current = {
      id: sticker.id,
      offsetX: point.x - sticker.x,
      offsetY: point.y - sticker.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveSticker(event: ReactPointerEvent<SVGTextElement>, id: string) {
    if (drag.current?.id !== id) return;

    const point = svgPoint(event);
    if (!point) return;

    const { offsetX, offsetY } = drag.current;

    updateStickers((current) =>
      current.map((sticker) =>
        sticker.id === id
          ? {
              ...sticker,
              x: Math.max(35, Math.min(765, point.x - offsetX)),
              y: Math.max(35, Math.min(485, point.y - offsetY)),
            }
          : sticker,
      ),
    );
  }

  function handleStickerKey(
    event: ReactKeyboardEvent<SVGTextElement>,
    id: string,
  ) {
    if (event.key === "Delete" || event.key === "Backspace") {
      event.preventDefault();
      updateStickers((current) =>
        current.filter((sticker) => sticker.id !== id),
      );
      return;
    }

    const step = event.shiftKey ? 20 : 5;
    const movement: Record<string, [number, number]> = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    };
    const delta = movement[event.key];

    if (!delta) return;
    event.preventDefault();

    updateStickers((current) =>
      current.map((sticker) =>
        sticker.id === id
          ? {
              ...sticker,
              x: Math.max(35, Math.min(765, sticker.x + delta[0])),
              y: Math.max(35, Math.min(485, sticker.y + delta[1])),
            }
          : sticker,
      ),
    );
  }

  function endDragging() {
    drag.current = null;
  }

  const background = backgrounds[selectedBackground] ?? backgrounds[0];

  return {
    background,
    draft,
    selectedBackground,
    setSelectedBackground,
    placedStickers,
    addSticker,
    startDragging,
    moveSticker,
    endDragging,
    handleStickerKey,
  };
}
