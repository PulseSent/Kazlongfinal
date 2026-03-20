import { Shield, Scale, HandHeart } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";

const reasons = [
  {
    icon: Shield,
    title: "Relentless Defense",
    desc: "Kaz fights for you with the tenacity of a grizzly. No plea until every option is exhausted.",
  },
  {
    icon: Scale,
    title: "Criminal Defense Expertise",
    desc: "Deep knowledge of Nebraska criminal law, from misdemeanors to serious felonies.",
  },
  {
    icon: HandHeart,
    title: "Personal Attention",
    desc: "You're not a case number. Kaz knows your name and your story.",
  },
];

const WhyKazSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="relative py-24 noise-overlay">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Why Choose Kaz Long?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/60 transition-all duration-300 gold-glow-hover group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <r.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{r.title}</h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
};

export default WhyKazSection;
