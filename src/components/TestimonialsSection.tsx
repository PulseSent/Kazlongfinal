import { Star, Quote } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";

const testimonials = [
  {
    text: "Kaz fought for me when I thought all hope was lost. His dedication and expertise turned my case around completely.",
    name: "Client A.",
    stars: 5,
  },
  {
    text: "From the first phone call, I knew I had someone in my corner. Kaz treated me like a person, not just another file on his desk.",
    name: "Client B.",
    stars: 5,
  },
  {
    text: "Professional, relentless, and genuinely caring. I couldn't have asked for a better attorney during the most difficult time of my life.",
    name: "Client C.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="relative py-24 bg-secondary noise-overlay">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-8 relative hover:border-primary/40 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-accent text-xs tracking-[0.2em] text-primary uppercase">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
};

export default TestimonialsSection;
