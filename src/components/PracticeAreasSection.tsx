import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";

const areas = [
  "DUI & Traffic Offenses",
  "Drug Charges",
  "Assault & Violent Crimes",
  "Theft & Property Crimes",
  "Federal Charges",
  "Juvenile Defense",
  "Probation Violations",
  "Expungements",
];

const PracticeAreasSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="practice" className="relative py-24 bg-secondary noise-overlay">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Practice Areas
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {areas.map((area) => (
            <div
              key={area}
              className="border border-border rounded-lg px-5 py-4 text-center font-accent text-xs tracking-[0.15em] uppercase text-foreground/90 hover:border-primary hover:text-primary transition-all duration-300"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
};

export default PracticeAreasSection;
