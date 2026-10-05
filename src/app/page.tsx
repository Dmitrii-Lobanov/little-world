import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sky-100 px-6 text-center text-slate-900">
      <span className="mb-4 text-6xl" aria-hidden="true">
        🌈
      </span>

      <h1 className="text-5xl font-bold tracking-tight">Little World</h1>

      <p className="mt-4 max-w-md text-lg">
        A little place to make big things.
      </p>

      <Link
        href="/studio"
        className="mt-8 rounded-full bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-violet-700 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-violet-700"
      >
        Enter the Postcard Studio
      </Link>
    </main>
  );
}
