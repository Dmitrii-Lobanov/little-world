import Link from "next/link";

const backgrounds = [
  { name: "Sunny meadow", colors: "bg-sky" },
  { name: "Peach sunset", colors: "bg-coral" },
  { name: "Quiet forest", colors: "bg-grass" },
];

const stickers = [
  { name: "Sun", symbol: "☀" },
  { name: "Flower", symbol: "✿" },
  { name: "Star", symbol: "★" },
  { name: "Heart", symbol: "♥" },
];

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-cream">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-ink/10 bg-paper px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="rounded-full px-4 py-2 font-semibold hover:bg-cream focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-violet"
        >
          ← Little World
        </Link>

        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet">
            The creative corner
          </p>
          <h1 className="text-2xl font-bold">Postcard Studio</h1>
        </div>

        <span className="rounded-full bg-sky/40 px-4 py-2 text-sm font-semibold">
          My postcards
        </span>
      </header>

      <div className="mx-auto grid max-w-[1500px] gap-6 px-5 py-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
        <aside className="space-y-5" aria-label="Postcard tools">
          <section className="rounded-[28px] border-2 border-ink/10 bg-paper p-5 shadow-[0_6px_0_#29354a12]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet">
              Step 1
            </p>
            <h2 className="mt-1 text-xl font-bold">Pick a place</h2>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">
              Where will your postcard come from?
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3 lg:grid-cols-1">
              {backgrounds.map((background, index) => (
                <div
                  key={background.name}
                  className={`flex items-center gap-3 rounded-2xl border-2 p-2 ${
                    index === 0
                      ? "border-violet bg-violet/5"
                      : "border-transparent bg-cream"
                  }`}
                >
                  <span
                    className={`h-12 w-14 shrink-0 rounded-xl ${background.colors}`}
                    aria-hidden="true"
                  />
                  <span className="hidden text-sm font-semibold lg:inline">
                    {background.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border-2 border-ink/10 bg-paper p-5 shadow-[0_6px_0_#29354a12]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet">
              Step 2
            </p>
            <h2 className="mt-1 text-xl font-bold">Add some magic</h2>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">
              Choose something fun to place.
            </p>

            <div className="mt-5 grid grid-cols-4 gap-2">
              {stickers.map((sticker) => (
                <div
                  key={sticker.name}
                  className="flex aspect-square items-center justify-center rounded-2xl bg-cream text-3xl text-coral"
                  aria-label={sticker.name}
                >
                  {sticker.symbol}
                </div>
              ))}
            </div>
          </section>
        </aside>

        <section className="flex min-w-0 flex-col rounded-[32px] border-2 border-ink/10 bg-[#f3e9d3] p-4 shadow-[0_8px_0_#29354a12] sm:p-6 lg:min-h-[700px] lg:p-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">A postcard from your world</h2>
            <p className="mt-1 text-sm text-ink/65">
              Your masterpiece will appear here.
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-[780px] rotate-[-1deg] rounded-lg bg-paper p-3 shadow-[0_20px_40px_#29354a30] sm:p-5">
              <svg
                viewBox="0 0 800 520"
                className="block h-auto w-full rounded-sm"
                role="img"
                aria-label="Illustration of a sunny meadow with rolling hills and a small house"
              >
                <rect width="800" height="520" fill="#A9DDF3" />
                <circle cx="648" cy="105" r="58" fill="#FFD56C" />
                <ellipse cx="196" cy="115" rx="92" ry="28" fill="#FFFDF6" />
                <ellipse cx="250" cy="102" rx="60" ry="29" fill="#FFFDF6" />
                <ellipse cx="478" cy="170" rx="77" ry="22" fill="#FFFDF6" />
                <path
                  d="M0 332 Q190 210 400 335 T800 300 V520 H0Z"
                  fill="#B6DC99"
                />
                <path
                  d="M0 390 Q230 290 455 390 T800 365 V520 H0Z"
                  fill="#8ACB88"
                />
                <path
                  d="M0 465 Q210 350 430 455 T800 420 V520 H0Z"
                  fill="#5EA776"
                />
                <rect
                  x="291"
                  y="280"
                  width="167"
                  height="150"
                  rx="8"
                  fill="#FFF8E8"
                />
                <path d="M272 291 L374 208 L477 291Z" fill="#F28C79" />
                <rect
                  x="355"
                  y="350"
                  width="42"
                  height="80"
                  rx="20"
                  fill="#7664B7"
                />
                <rect
                  x="313"
                  y="321"
                  width="32"
                  height="34"
                  rx="6"
                  fill="#A9DDF3"
                />
                <rect
                  x="408"
                  y="321"
                  width="32"
                  height="34"
                  rx="6"
                  fill="#A9DDF3"
                />
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
              </svg>

              <div className="flex items-center justify-between gap-4 px-2 pt-4">
                <p className="font-semibold">Greetings from Little World!</p>
                <span className="text-sm text-ink/55">Made by me ✿</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-paper/75 p-3">
            <span className="px-3 text-sm font-medium text-ink/65">
              Your postcard is ready to decorate
            </span>

            <div className="flex gap-2">
              <span className="rounded-full border-2 border-ink/15 px-5 py-3 font-semibold text-ink/55">
                Undo
              </span>
              <span className="rounded-full bg-violet px-6 py-3 font-semibold text-white">
                Save postcard
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
