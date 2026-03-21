import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";
import nacda2020 from "@/assets/nacda-2020.png";
import nacda2021 from "@/assets/nacda-2021.png";
import nacda2022 from "@/assets/nacda-2022.png";
import nacda2023 from "@/assets/nacda-2023.png";
import nacda2024 from "@/assets/nacda-2024.png";
import businessrate2025 from "@/assets/businessrate-2025.png";

const awards = [
  { src: businessrate2025, alt: "Best of BusinessRate 2025 - Attorney, Sarpy County Nebraska" },
  { src: nacda2024, alt: "NACDA Top Ten Ranking 2024" },
  { src: nacda2023, alt: "NACDA Top Ten Ranking 2023" },
  { src: nacda2022, alt: "NACDA Top Ten Ranking 2022" },
  { src: nacda2021, alt: "NACDA Top Ten Ranking 2021" },
  { src: nacda2020, alt: "NACDA Top Ten Ranking 2020" },
];

const AwardsSection = () => {
  const ref = useScrollFadeIn();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % awards.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + awards.length) % awards.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) => (current + offset + awards.length) % awards.length;

  return (
    <section className="relative py-20 noise-overlay">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          Awards & Recognition
        </h2>
        <p className="font-body text-lg text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
          Nationally recognized for excellence in criminal defense
        </p>

        <div className="relative flex items-center justify-center gap-2 md:gap-6 max-w-4xl mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 z-10 p-2 text-primary/60 hover:text-primary transition-colors"
            aria-label="Previous award"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Left small */}
            <div className="hidden md:flex w-28 h-28 items-center justify-center opacity-40 transition-all duration-500">
              <img
                src={awards[getIndex(-1)].src}
                alt={awards[getIndex(-1)].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Center large */}
            <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center transition-all duration-500">
              <img
                src={awards[current].src}
                alt={awards[current].alt}
                className="max-w-full max-h-full object-contain drop-shadow-[0_0_30px_hsl(43_52%_54%_/_0.3)]"
              />
            </div>

            {/* Right small */}
            <div className="hidden md:flex w-28 h-28 items-center justify-center opacity-40 transition-all duration-500">
              <img
                src={awards[getIndex(1)].src}
                alt={awards[getIndex(1)].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-10 p-2 text-primary/60 hover:text-primary transition-colors"
            aria-label="Next award"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {awards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-primary/30"
              }`}
              aria-label={`Go to award ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
};

export default AwardsSection;
