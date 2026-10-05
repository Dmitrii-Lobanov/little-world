import { stickers, type StickerOption } from "./studio-data";

type Props = {
  onAdd: (sticker: StickerOption) => void;
};

export function StickerPicker({ onAdd }: Props) {
  return (
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
          <button
            key={sticker.name}
            type="button"
            onClick={() => onAdd(sticker)}
            className="flex aspect-square items-center justify-center rounded-2xl bg-cream text-3xl text-coral transition hover:-translate-y-1 hover:bg-sky/40 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-violet"
            aria-label={`Add ${sticker.name} sticker`}
          >
            <span aria-hidden="true">{sticker.symbol}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
