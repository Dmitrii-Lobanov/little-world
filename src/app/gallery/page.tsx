"use client";

import { useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { PostcardCanvas } from "@/features/studio/PostcardCanvas";
import { backgrounds } from "@/features/studio/studio-data";
import {
  getPostcardsRaw,
  parsePostcards,
  subscribePostcards,
} from "@/features/studio/postcard-storage";

export default function GalleryPage() {
  const raw = useSyncExternalStore(
    subscribePostcards,
    getPostcardsRaw,
    () => null,
  );
  const postcards = useMemo(() => parsePostcards(raw), [raw]);

  return (
    <main className="min-h-screen bg-cream px-5 py-8 text-ink lg:px-10">
      <header className="mx-auto flex max-w-375 flex-wrap items-center justify-between gap-4">
        <Link
          href="/studio"
          className="rounded-full px-4 py-2 font-semibold hover:bg-paper focus-visible:outline-3 focus-visible:outline-violet"
        >
          ← Postcard Studio
        </Link>
        <Link href="/" className="font-semibold underline underline-offset-4">
          Little World
        </Link>
      </header>

      <section className="mx-auto mt-12 max-w-375">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">
          Made by you
        </p>
        <h1 className="mt-2 text-4xl font-bold">My postcards</h1>
        <p className="mt-3 text-ink/65">
          Every little adventure has a place here.
        </p>

        {postcards.length === 0 ? (
          <div className="mt-10 rounded-4xl border-2 border-dashed border-ink/20 bg-paper p-10 text-center">
            <p className="text-xl font-semibold">No postcards yet</p>
            <p className="mt-2 text-ink/65">
              Make your first one in the Postcard Studio.
            </p>
            <Link
              href="/studio"
              className="mt-6 inline-block rounded-full bg-violet px-6 py-3 font-semibold text-white"
            >
              Make a postcard
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 xl:grid-cols-2">
            {postcards.map((postcard) => {
              const background =
                backgrounds[postcard.backgroundIndex] ?? backgrounds[0];

              return (
                <article
                  key={postcard.id}
                  className="rounded-4xl border-2 border-ink/10 bg-[#f3e9d3] p-5 sm:p-8"
                >
                  <PostcardCanvas
                    background={background}
                    placedStickers={postcard.stickers}
                    message={postcard.message}
                  />
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <h2 className="text-xl font-bold">{background.name}</h2>
                    <time
                      dateTime={postcard.createdAt}
                      className="text-sm text-ink/65"
                    >
                      {new Date(postcard.createdAt).toLocaleDateString()}
                    </time>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
