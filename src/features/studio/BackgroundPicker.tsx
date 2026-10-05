import { backgrounds } from "./studio-data";

type Props = {
  selectedBackground: number;
  onSelect: (index: number) => void;
};

export function BackgroundPicker({ selectedBackground, onSelect }: Props) {
  return (
    <section className="rounded-[28px] border-2 border-ink/10 bg-paper p-5 shadow-[0_6px_0_#29354a12]">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet">
        Step 1
      </p>
      <h2 className="mt-1 text-xl font-bold">Pick a place</h2>
      <p className="mt-1 text-sm leading-relaxed text-ink/65">
        Where will your postcard come from?
      </p>

      <div className="mt-5 grid grid-cols-3 gap-3 lg:grid-cols-1">
        {backgrounds.map((option, index) => (
          <button
            key={option.name}
            type="button"
            onClick={() => onSelect(index)}
            aria-pressed={selectedBackground === index}
            className={`flex items-center gap-3 rounded-2xl border-2 p-2 text-left transition hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-violet ${
              selectedBackground === index
                ? "border-violet bg-violet/5"
                : "border-transparent bg-cream"
            }`}
          >
            <span
              className={`h-12 w-14 shrink-0 rounded-xl ${option.swatch}`}
              aria-hidden="true"
            />
            <span className="hidden text-sm font-semibold lg:inline">
              {option.name}
            </span>
            <span className="sr-only lg:hidden">{option.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
