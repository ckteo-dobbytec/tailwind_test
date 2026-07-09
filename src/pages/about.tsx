import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="mx-auto max-w-4xl">
        {/* Nav */}
        <nav className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"
          >
            ← Back to Home
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-[42px] font-bold tracking-tight text-black dark:text-white mb-4">
            About This Page
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            This is the second page — navigate here using the Next.js{" "}
            <code className="text-[15px] font-mono">&lt;Link&gt;</code> component.
          </p>
        </div>

        <section className="mb-12">
          <div className="bg-white dark:bg-zinc-900 rounded-[12px] p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Client-side navigation
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-[1.6]">
              Clicking the link back to Home does not trigger a full page reload —
              Next.js swaps the content on the client, just like a single-page app.
              The first time you loaded either page, though, it was rendered on the
              server.
            </p>
          </div>
        </section>

        <footer className="text-center text-zinc-500 text-sm py-8 border-t border-zinc-200 dark:border-zinc-800">
          <p>Tailwind CSS v4 Arbitrary Values Demo</p>
        </footer>
      </main>
    </div>
  );
}
