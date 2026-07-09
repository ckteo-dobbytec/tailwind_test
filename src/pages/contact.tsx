import Link from "next/link";

export default function Contact() {
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
            Get in Touch
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Have a question or want to work together? Drop us a line below.
          </p>
        </div>

        <section className="mb-12">
          <div className="bg-white dark:bg-zinc-900 rounded-[12px] p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-[8px] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3 text-black dark:text-white placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-[8px] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3 text-black dark:text-white placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help?"
                  className="rounded-[8px] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3 text-black dark:text-white placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start rounded-[8px] bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <footer className="text-center text-zinc-500 text-sm py-8 border-t border-zinc-200 dark:border-zinc-800">
          <p>Tailwind CSS v4 Arbitrary Values Demo</p>
        </footer>
      </main>
    </div>
  );
}
