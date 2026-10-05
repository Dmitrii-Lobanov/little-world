"use client";

import { useState } from "react";
import Link from "next/link";
import { StickerPicker } from "@/features/studio/StickerPicker";
import { PostcardCanvas } from "@/features/studio/PostcardCanvas";
import { BackgroundPicker } from "@/features/studio/BackgroundPicker";
import { usePostcardEditor } from "@/features/studio/usePostcardEditor";
import { savePostcard } from "@/features/studio/postcard-storage";

export default function StudioPage() {
  const {
    background,
    selectedBackground,
    setSelectedBackground,
    placedStickers,
    addSticker,
    startDragging,
    moveSticker,
    endDragging,
    handleStickerKey,
  } = usePostcardEditor();

  const [saveStatus, setSaveStatus] = useState("");

  function handleSave() {
    try {
      savePostcard({
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        backgroundIndex: selectedBackground,
        stickers: placedStickers,
      });
      setSaveStatus("Postcard saved!");
    } catch {
      setSaveStatus("Could not save your postcard. Please try again.");
    }
  }

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

        <Link
          href="/gallery"
          className="rounded-full bg-sky/40 px-4 py-2 text-sm font-semibold hover:bg-sky/70 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-violet"
        >
          My postcards
        </Link>
      </header>

      <div className="mx-auto grid max-w-375 gap-6 px-5 py-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
        <aside className="space-y-5" aria-label="Postcard tools">
          <BackgroundPicker
            selectedBackground={selectedBackground}
            onSelect={setSelectedBackground}
          />
          <StickerPicker onAdd={addSticker} />
        </aside>

        <section className="flex min-w-0 flex-col rounded-4xl border-2 border-ink/10 bg-[#f3e9d3] p-4 shadow-[0_8px_0_#29354a12] sm:p-6 lg:min-h-175 lg:p-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">A postcard from your world</h2>
            <p className="mt-1 text-sm text-ink/65">
              Your masterpiece will appear here.
            </p>
          </div>

          <PostcardCanvas
            background={background}
            placedStickers={placedStickers}
            onPointerDown={startDragging}
            onPointerMove={moveSticker}
            onPointerEnd={endDragging}
            onKeyDown={handleStickerKey}
          />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-paper/75 p-3">
            <span
              role="status"
              className="px-3 text-sm font-medium text-ink/65"
            >
              {saveStatus || "Your postcard is ready to decorate"}
            </span>

            <div className="flex gap-2">
              <span className="rounded-full border-2 border-ink/15 px-5 py-3 font-semibold text-ink/55">
                Undo
              </span>
              <button
                type="button"
                onClick={handleSave}
                className="rounded-full bg-violet px-6 py-3 font-semibold text-white hover:bg-violet/90 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-violet"
              >
                Save postcard
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
