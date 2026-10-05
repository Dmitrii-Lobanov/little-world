type Props = {
  value: string;
  onChange: (value: string) => void;
};

const MAX_LENGTH = 80;

export function MessageEditor({ value, onChange }: Props) {
  return (
    <section className="rounded-[28px] border-2 border-ink/10 bg-paper p-5 shadow-[0_6px_0_#29354a12]">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet">
        Step 3
      </p>

      <label
        htmlFor="postcard-message"
        className="mt-1 block text-xl font-bold"
      >
        Write a message
      </label>

      <p className="mt-1 text-sm leading-relaxed text-ink/65">
        What would you like to say?
      </p>

      <textarea
        id="postcard-message"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        maxLength={MAX_LENGTH}
        rows={3}
        placeholder="Greetings from Little World!"
        aria-describedby="message-length"
        className="mt-5 w-full resize-none rounded-2xl border-2 border-ink/15 bg-cream p-3 text-base outline-none placeholder:text-ink/40 focus:border-violet"
      />

      <p id="message-length" className="mt-2 text-right text-xs text-ink/55">
        {value.length}/{MAX_LENGTH}
      </p>
    </section>
  );
}
