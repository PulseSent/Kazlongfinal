import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";
import kazCourtroom from "@/assets/kaz-courtroom.jpeg";
import kazLibrary from "@/assets/kaz-library.jpeg";

const AboutSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="relative py-24 noise-overlay">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Photos */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="w-64 h-80 rounded-lg border-2 border-primary/40 overflow-hidden shadow-lg shadow-primary/10">
              <img
                src={kazCourtroom}
                alt="Kaz Long in the courtroom"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-64 h-80 rounded-lg border-2 border-primary/40 overflow-hidden shadow-lg shadow-primary/10 sm:mt-12">
              <img
                src={kazLibrary}
                alt="Kaz Long in the law library"
                className="w-full h-full object-cover object-top"
              />
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
