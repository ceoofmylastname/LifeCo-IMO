import React from "react";

/**
 * LIFECO CARRIER LOGOS — Inserted for both rows
 * You can rearrange them anytime.
 */
const CARRIERS_ROW1 = [
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d516d7e9b293d0b7d9e26.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d516d7e9b292aa47d9e25.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d516dce99892f5f7679f6.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d516d6d309e2866328d5e.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d516d6d309e8871328d5d.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d516dce998948627679f5.png",
];

const CARRIERS_ROW2 = [
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d516dce998922617679f4.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d516dcdf2313ec7bd0e4e.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d516dcdf23108afbd0e4f.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d516d7e9b299af97d9e27.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d516d4b75355b4548aad2.png",
];

/** Utility to loop the logo rows */
const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

export const OurCarriers: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm">
          🛡️ Our Carriers
        </span>

        {/* Headline */}
        <h2 className="text-4xl lg:text-6xl font-bold font-oswald tracking-tight text-slate-900">
          Powered by the Industry’s Most Trusted Carriers
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto font-light">
          LifeCo partners with leading insurance carriers to deliver stability, credibility, and unmatched opportunity to our agents.
        </p>

        {/* Scrolling Logo Carousel */}
        <div className="mt-20 overflow-hidden relative pb-2">

          {/* Row 1 */}
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left hover:[animation-play-state:paused]">
            {repeatedIcons(CARRIERS_ROW1, 4).map((src, i) => (
              <div
                key={`row1-${i}`}
                className="h-24 w-36 flex-shrink-0 bg-white rounded-2xl shadow-lg shadow-gray-100 flex items-center justify-center border border-gray-100 group"
              >
                <img
                  src={src}
                  alt="carrier"
                  className="h-16 w-auto object-contain !grayscale-0 !opacity-100 !brightness-100 !contrast-100 transition-all duration-300 hover:scale-105 hover:brightness-110"
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-10 whitespace-nowrap mt-8 animate-scroll-right hover:[animation-play-state:paused]">
            {repeatedIcons(CARRIERS_ROW2, 4).map((src, i) => (
              <div
                key={`row2-${i}`}
                className="h-24 w-36 flex-shrink-0 bg-white rounded-2xl shadow-lg shadow-gray-100 flex items-center justify-center border border-gray-100 group"
              >
                <img
                  src={src}
                  alt="carrier"
                  className="h-16 w-auto object-contain !grayscale-0 !opacity-100 !brightness-100 !contrast-100 transition-all duration-300 hover:scale-105 hover:brightness-110"
                />
              </div>
            ))}
          </div>

          {/* Gradient fade sides */}
          <div className="absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        </div>
      </div>
    </section>
  );
};