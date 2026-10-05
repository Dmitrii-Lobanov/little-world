import Link from "next/link";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-10 text-slate-900">
      <Link href="/" className="font-semibold underline underline-offset-4">
        ← Back to Little World
      </Link>

      <h1 className="mt-12 text-center text-4xl font-bold">Postcard Studio</h1>

      <p className="mt-4 text-center text-lg">Your creative space is ready.</p>
    </main>
  );
}
