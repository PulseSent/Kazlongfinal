import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";
import nacda2020 from "@/assets/nacda-2020.png";
import nacda2021 from "@/assets/nacda-2021.png";
import nacda2022 from "@/assets/nacda-2022.png";
import nacda2023 from "@/assets/nacda-2023.png";
import nacda2024 from "@/assets/nacda-2024.png";
import businessrate2025 from "@/assets/businessrate-2025.png";

const awards = [
  { src: nacda2020, alt: "NACDA Top Ten Ranking 2020" },
  { src: nacda2021, alt: "NACDA Top Ten Ranking 2021" },
  { src: nacda2022, alt: "NACDA Top Ten Ranking 2022" },
  { src: nacda2023, alt: "NACDA Top Ten Ranking 2023" },
  { src: nacda2024, alt: "NACDA Top Ten Ranking 2024" },
  { src: businessrate2025, alt: "Best of BusinessRate 2025 - Attorney, Sarpy County Nebraska" },
];

const AwardsSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="relative py-20 noise-overlay">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          Awards & Recognition
        </h2>
        <p className="font-body text-lg text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
          Nationally recognized for excellence in criminal defense
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto">
          {awards.map((award) => (
            <div
              key={award.alt}
              className="w-32 h-40 md:w-40 md:h-48 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <img
                src={award.src}
                alt={award.alt}
                className="max-w-full max-h-full object-contain drop-shadow-[0_0_20px_hsl(43_52%_54%_/_0.2)]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
};

export default AwardsSection;
