import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tailwind Arbitrary Values Demo",
  description: "Demonstration of Tailwind CSS arbitrary values syntax",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="mx-auto max-w-4xl">
        {/* Nav */}
        <nav className="mb-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"
          >
            Go to About page →
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-[42px] font-bold tracking-tight text-black dark:text-white mb-4">
            Tailwind Arbitrary Values
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Demo showcasing the square bracket notation for arbitrary values in Tailwind CSS
          </p>
        </div>

        {/* Arbitrary Width & Height */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Width & Height
          </h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-blue-500 h-[120px] w-[80px] rounded"></div>
              <span className="text-sm text-zinc-600">w-[80px] h-[120px]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-green-500 h-[200px] w-[150px] rounded"></div>
              <span className="text-sm text-zinc-600">w-[150px] h-[200px]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-purple-500 h-[75px] w-[75px] rounded-full"></div>
              <span className="text-sm text-zinc-600">w-[75px] h-[75px]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-orange-500 h-[180px] w-[25%] rounded"></div>
              <span className="text-sm text-zinc-600">w-[25%] h-[180px]</span>
            </div>
          </div>
        </section>

        {/* Arbitrary Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Arbitrary Colors
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="w-[120px] h-[80px] bg-[#ff6b6b] rounded flex items-center justify-center">
              <span className="text-white text-sm">[#ff6b6b]</span>
            </div>
            <div className="w-[120px] h-[80px] bg-[#4ecdc4] rounded flex items-center justify-center">
              <span className="text-white text-sm">[#4ecdc4]</span>
            </div>
            <div className="w-[120px] h-[80px] bg-[#45b7d1] rounded flex items-center justify-center">
              <span className="text-white text-sm">[#45b7d1]</span>
            </div>
            <div className="w-[120px] h-[80px] bg-[#96ceb4] rounded flex items-center justify-center">
              <span className="text-black text-sm">[#96ceb4]</span>
            </div>
            <div className="w-[120px] h-[80px] bg-[rgba(255,0,0,0.5)] rounded flex items-center justify-center">
              <span className="text-black text-sm">rgba</span>
            </div>
          </div>
        </section>

        {/* Arbitrary Spacing */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Spacing (Margin & Padding)
          </h2>
          <div className="flex flex-wrap gap-8 items-start">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-red-400 p-[30px]">
                <div className="bg-red-600 w-8 h-8"></div>
              </div>
              <span className="text-sm text-zinc-600">p-[30px]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-yellow-400 m-[25px]">
                <div className="bg-yellow-600 w-8 h-8"></div>
              </div>
              <span className="text-sm text-zinc-600">m-[25px]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-teal-400 px-[40px] py-[15px]">
                <span className="text-teal-900">Text</span>
              </div>
              <span className="text-sm text-zinc-600">px-[40px] py-[15px]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-pink-400 gap-[20px] flex">
                <div className="bg-pink-600 w-6 h-6"></div>
                <div className="bg-pink-600 w-6 h-6"></div>
              </div>
              <span className="text-sm text-zinc-600">gap-[20px]</span>
            </div>
          </div>
        </section>

        {/* Arbitrary Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Typography
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-[18px] text-black dark:text-white">text-[18px] - Custom font size</p>
            </div>
            <div>
              <p className="text-[24px] leading-[1.4] text-black dark:text-white">
                text-[24px] leading-[1.4] - Custom font size with line height
              </p>
            </div>
            <div>
              <p className="text-[16px] tracking-[0.25em] text-black dark:text-white">
                text-[16px] tracking-[0.25em] - Custom letter spacing
              </p>
            </div>
            <div>
              <p className="text-[15px] text-indigo-600 font-[600]">
                text-[15px] font-[600] - Custom font weight
              </p>
            </div>
          </div>
        </section>

        {/* Arbitrary Border Radius */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Border Radius
          </h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-cyan-500 w-16 h-16 rounded-[4px]"></div>
              <span className="text-sm text-zinc-600">rounded-[4px]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-cyan-500 w-16 h-16 rounded-[12px]"></div>
              <span className="text-sm text-zinc-600">rounded-[12px]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-cyan-500 w-16 h-16 rounded-[25px]"></div>
              <span className="text-sm text-zinc-600">rounded-[25px]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-cyan-500 w-16 h-16 rounded-[50%_50%_0_0]"></div>
              <span className="text-sm text-zinc-600">rounded-[50%...]</span>
            </div>
          </div>
        </section>

        {/* Arbitrary Shadows */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Box Shadow
          </h2>
          <div className="flex flex-wrap gap-8 items-end">
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-lg"></div>
              <span className="text-sm text-zinc-600">shadow-[0_4px_6px_...]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] rounded-lg"></div>
              <span className="text-sm text-zinc-600">shadow-[0_10px_25px_...]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] rounded-lg"></div>
              <span className="text-sm text-zinc-600">shadow-[inset_...]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 bg-white shadow-[0_0_20px_rgba(255,215,0,0.6)] rounded-lg"></div>
              <span className="text-sm text-zinc-600">shadow-gold</span>
            </div>
          </div>
        </section>

        {/* Arbitrary Positioning */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Positioning
          </h2>
          <div className="relative h-[180px] w-full bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden">
            <div className="absolute top-[20%] left-[15%] w-16 h-16 bg-red-500 rounded flex items-center justify-center">
              <span className="text-white text-xs">top-[20%]<br/>left-[15%]</span>
            </div>
            <div className="absolute top-[60%] right-[25%] w-16 h-16 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs">top-[60%]<br/>right-[25%]</span>
            </div>
            <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 w-16 h-16 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white text-xs">bottom-[10%]</span>
            </div>
          </div>
        </section>

        {/* Arbitrary Transform */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Transform
          </h2>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-amber-500 rotate-[15deg] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">rotate-[15deg]</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-rose-500 scale-[1.3] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">scale-[1.3]</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-violet-500 translate-x-[30px] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">translate-x-[30px]</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-cyan-500 skew-x-[-12deg] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">skew-x-[-12deg]</span>
              </div>
            </div>
          </div>
        </section>

        {/* Arbitrary Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Grid Columns
          </h2>
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
            <div className="bg-lime-500 p-4 rounded text-center text-white">1fr</div>
            <div className="bg-lime-600 p-4 rounded text-center text-white">2fr</div>
            <div className="bg-lime-500 p-4 rounded text-center text-white">1fr</div>
          </div>
          <p className="mt-4 text-sm text-zinc-600">grid-cols-[1fr_2fr_1fr]</p>
        </section>

        {/* Arbitrary Flex */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Flex Basis
          </h2>
          <div className="flex gap-4">
            <div className="basis-[200px] bg-fuchsia-500 p-4 rounded text-center text-white">
              basis-[200px]
            </div>
            <div className="basis-[300px] bg-fuchsia-600 p-4 rounded text-center text-white">
              basis-[300px]
            </div>
            <div className="flex-1 bg-fuchsia-500 p-4 rounded text-center text-white">
              flex-1
            </div>
          </div>
        </section>

        {/* Arbitrary Z-Index */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Z-Index
          </h2>
          <div className="relative h-32 w-48">
            <div className="absolute inset-0 bg-red-500 rounded-lg flex items-center justify-center z-[1]">
              <span className="text-white">z-[1]</span>
            </div>
            <div className="absolute top-8 left-8 bg-blue-500 rounded-lg flex items-center justify-center w-16 h-16 z-[3]">
              <span className="text-white text-xs">z-[3]</span>
            </div>
            <div className="absolute top-4 left-4 bg-green-500 rounded-lg flex items-center justify-center w-16 h-16 z-[2]">
              <span className="text-white text-xs">z-[2]</span>
            </div>
          </div>
        </section>

        {/* Arbitrary Opacity */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Opacity
          </h2>
          <div className="flex gap-4 items-end">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-indigo-600 opacity-[0.2] rounded"></div>
              <span className="text-sm text-zinc-600">opacity-[0.2]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-indigo-600 opacity-[0.5] rounded"></div>
              <span className="text-sm text-zinc-600">opacity-[0.5]</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-indigo-600 opacity-[0.8] rounded"></div>
              <span className="text-sm text-zinc-600">opacity-[0.8]</span>
            </div>
          </div>
        </section>

        {/* Arbitrary Border Width */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Border Width
          </h2>
          <div className="flex gap-6 items-center">
            <div className="w-24 h-24 bg-white border-[3px] border-red-500 rounded-lg flex items-center justify-center">
              <span className="text-xs text-zinc-600">border-[3px]</span>
            </div>
            <div className="w-24 h-24 bg-white border-[6px] border-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-xs text-zinc-600">border-[6px]</span>
            </div>
            <div className="w-24 h-24 bg-white border-[2px] border-t-green-500 rounded-lg flex items-center justify-center">
              <span className="text-xs text-zinc-600">border-t-[2px]</span>
            </div>
          </div>
        </section>

        {/* Arbitrary Max/Min Width */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Max-Width & Min-Height
          </h2>
          <div className="space-y-4">
            <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded max-w-[300px]">
              <p className="text-sm">max-w-[300px]</p>
            </div>
            <div className="bg-cyan-100 dark:bg-cyan-900 p-4 rounded min-h-[120px]">
              <p className="text-sm">min-h-[120px]</p>
            </div>
          </div>
        </section>

        {/* Arbitrary Blend Mode */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Blend Mode
          </h2>
          <div className="flex gap-6">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-red-500 rounded-full mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-blue-500 rounded-full mix-blend-multiply translate-x-4"></div>
            </div>
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-red-500 rounded-full mix-blend-screen"></div>
              <div className="absolute inset-0 bg-blue-500 rounded-full mix-blend-screen translate-x-4"></div>
            </div>
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-red-500 rounded-full mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-blue-500 rounded-full mix-blend-overlay translate-x-4"></div>
            </div>
          </div>
          <p className="mt-4 text-sm text-zinc-600">mix-blend-multiply | screen | overlay</p>
        </section>

        {/* Arbitrary Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Content
          </h2>
          <div className="flex justify-around">
            <div className="flex items-center gap-2 before:content-['★_'] before:text-[24px] before:text-yellow-500">
              <span className="text-zinc-700 dark:text-zinc-300">Star icon via content-[]</span>
            </div>
            <div className="flex items-center gap-2 before:content-['→_'] before:text-[20px] before:text-blue-500">
              <span className="text-zinc-700 dark:text-zinc-300">Arrow via content-[]</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-zinc-500 text-sm py-8 border-t border-zinc-200 dark:border-zinc-800">
          <p>Tailwind CSS v4 Arbitrary Values Demo</p>
        </footer>
      </main>
    </div>
  );
}
