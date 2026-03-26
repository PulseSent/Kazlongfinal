import { Clock, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";

const hours = [
  { day: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "9:00 AM – 6:00 PM" },
];

const ContactSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="contact" className="relative py-24 noise-overlay">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Get in Touch
        </h2>

        <div className="max-w-lg mx-auto space-y-8 text-center">
          <div>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-2xl font-bold text-foreground">Office Hours</h3>
            </div>
            <div className="space-y-3">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between font-body text-lg text-foreground/80 border-b border-border/50 pb-2">
                  <span>{h.day}</span>
                  <span className="text-primary">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="tel:4026817294">
            <Button variant="gold" size="xl" className="w-full mt-6">
              <Phone className="w-5 h-5" />
              Call Now: 402-681-7294
            </Button>
          </a>

          <a href="mailto:kazclong@gmail.com" className="block font-body text-lg text-foreground/80 hover:text-primary transition-colors">
            kazclong@gmail.com
          </a>

          <div className="flex items-center gap-2 text-muted-foreground justify-center">
            <Lock className="w-4 h-4" />
            <p className="font-body text-sm italic">All consultations are confidential.</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
};

export default ContactSection;
