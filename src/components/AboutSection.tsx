import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";

const AboutSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="relative py-24 noise-overlay">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="w-72 h-96 rounded-lg border-2 border-primary/40 bg-card flex items-center justify-center overflow-hidden">
              <div className="text-center space-y-3 px-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading text-3xl text-primary font-bold">KL</span>
                </div>
                <p className="font-accent text-xs tracking-[0.2em] text-muted-foreground uppercase">Attorney Photo</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              Meet Kaz Long
            </h2>
            <p className="font-body text-xl text-foreground/80 leading-relaxed">
              Kaz Long is a Nebraska criminal defense attorney known for his fierce advocacy and personal commitment to every client. Whether you're facing a first offense or serious felony charges, Kaz brings the strength and strategy to fight for the best possible outcome.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 py-2">
              <p className="font-body text-2xl italic text-primary/90">
                "Everyone deserves a fearless defender."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
};

export default AboutSection;
