import type {
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from "react";
import type { Background, PlacedSticker } from "./studio-data";

type Props = {
  background: Background;
  placedStickers: PlacedSticker[];
  onPointerDown?: (
    event: ReactPointerEvent<SVGTextElement>,
    sticker: PlacedSticker,
  ) => void;
  onPointerMove?: (
    event: ReactPointerEvent<SVGTextElement>,
    id: string,
  ) => void;
  onPointerEnd?: () => void;
  onKeyDown?: (event: ReactKeyboardEvent<SVGTextElement>, id: string) => void;
};

export function PostcardCanvas({
  background,
  placedStickers,
  onPointerDown,
  onPointerMove,
  onPointerEnd,
  onKeyDown,
}: Props) {
  const editable = Boolean(onPointerDown);

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-195 -rotate-1 rounded-lg bg-paper p-3 shadow-[0_20px_40px_#29354a30] sm:p-5">
        <svg
          viewBox="0 0 800 520"
          className="block h-auto w-full rounded-sm"
          role="group"
          aria-label={`Postcard canvas: ${background.name}`}
        >
          <rect width="800" height="520" fill={background.sky} />
          <circle cx="648" cy="105" r="58" fill={background.sun} />
          <ellipse cx="196" cy="115" rx="92" ry="28" fill="#FFFDF6" />
          <ellipse cx="250" cy="102" rx="60" ry="29" fill="#FFFDF6" />
          <ellipse cx="478" cy="170" rx="77" ry="22" fill="#FFFDF6" />
          <path
            d="M0 332 Q190 210 400 335 T800 300 V520 H0Z"
            fill={background.farHill}
          />
          <path
            d="M0 390 Q230 290 455 390 T800 365 V520 H0Z"
            fill={background.middleHill}
          />
          <path
            d="M0 465 Q210 350 430 455 T800 420 V520 H0Z"
            fill={background.nearHill}
          />
          <rect
            x="291"
            y="280"
            width="167"
            height="150"
            rx="8"
            fill="#FFF8E8"
          />
          <path d="M272 291 L374 208 L477 291Z" fill={background.roof} />
          <rect x="355" y="350" width="42" height="80" rx="20" fill="#7664B7" />
          <rect x="313" y="321" width="32" height="34" rx="6" fill="#A9DDF3" />
          <rect x="408" y="321" width="32" height="34" rx="6" fill="#A9DDF3" />
          <path
            d="M97 430 V344 M97 362 C70 339 64 316 88 307 C103 281 134 293 135 317 C162 337 138 362 97 362Z"
            fill="#5EA776"
            stroke="#477E5B"
            strokeWidth="7"
          />
          <path
            d="M659 410 V318 M659 337 C626 320 634 288 654 287 C675 260 713 279 706 306 C730 332 705 352 659 337Z"
            fill="#5EA776"
            stroke="#477E5B"
            strokeWidth="7"
          />
          <path
            d="M51 480 Q133 425 230 481 M555 482 Q653 425 762 475"
            fill="none"
            stroke="#FFF8E8"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {placedStickers.map((sticker) => (
            <text
              key={sticker.id}
              x={sticker.x}
              y={sticker.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="72"
              fill="#FFF8E8"
              stroke="#29354A"
              strokeWidth="1.5"
              role={editable ? "button" : undefined}
              tabIndex={editable ? 0 : undefined}
              aria-label={
                editable
                  ? `${sticker.name} sticker. Use arrow keys to move; press Delete to remove.`
                  : sticker.name
              }
              className={
                editable
                  ? "cursor-grab select-none focus:stroke-violet focus:stroke-[4px] active:cursor-grabbing"
                  : "select-none"
              }
              style={editable ? { touchAction: "none" } : undefined}
              onPointerDown={
                onPointerDown
                  ? (event) => onPointerDown(event, sticker)
                  : undefined
              }
              onPointerMove={
                onPointerMove
                  ? (event) => onPointerMove(event, sticker.id)
                  : undefined
              }
              onPointerUp={onPointerEnd}
              onPointerCancel={onPointerEnd}
              onKeyDown={
                onKeyDown ? (event) => onKeyDown(event, sticker.id) : undefined
              }
            >
              {sticker.symbol}
            </text>
          ))}
        </svg>

        <div className="flex items-center justify-between gap-4 px-2 pt-4">
          <p className="font-semibold">Greetings from Little World!</p>
          <span className="text-sm text-ink/55">Made by me ✿</span>
        </div>
      </div>
    </div>
  );
}
