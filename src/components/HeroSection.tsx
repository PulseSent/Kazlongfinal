import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import grizzlyBear from "@/assets/grizzly-bear.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Radial gold glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-20">
        {/* Bear graphic */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-80">
          <img src={grizzlyBear} alt="Grizzly bear logo" className="w-full h-full object-contain drop-shadow-[0_0_40px_hsl(43_52%_54%_/_0.3)]" />
        </div>

        {/* Text */}
        <div className="text-center lg:text-left space-y-6">
          <div>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-primary leading-none tracking-tight">
              KAZ LONG
            </h1>
            <p className="font-accent text-lg md:text-2xl tracking-[0.4em] text-foreground/70 mt-2">
              LAW OFFICE
            </p>
          </div>

          <p className="font-body text-xl md:text-2xl text-foreground/80 max-w-lg leading-relaxed">
            When everything is on the line, you need a defender who won't back down.
          </p>

          <p className="font-accent text-xs tracking-[0.3em] text-primary/80 uppercase">
            Fierce Defense. Proven Results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href="tel:4026817294">
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call Now: 402-681-7294
              </Button>
            </a>
            <a href="#contact">
              <Button variant="goldOutline" size="xl" className="w-full sm:w-auto" onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}>
                <MessageSquare className="w-5 h-5" />
                Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gold divider */}
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
};

export default HeroSection;
