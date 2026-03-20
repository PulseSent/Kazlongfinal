import { useState } from "react";
import { Clock, Send, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";
import { useToast } from "@/hooks/use-toast";

const hours = [
  { day: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "9:00 AM – 6:00 PM" },
];

const ContactSection = () => {
  const ref = useScrollFadeIn();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you! Kaz will be in touch soon.",
    });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 noise-overlay">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Hours */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
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

            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <p className="font-body text-lg text-foreground/80">
                <span className="text-primary font-semibold">Phone:</span> <a href="tel:4026817294" className="hover:text-primary transition-colors">402-681-7294</a>
              </p>
              <p className="font-body text-lg text-foreground/80">
                <span className="text-primary font-semibold">Email:</span> <a href="mailto:kazclong@gmail.com" className="hover:text-primary transition-colors">kazclong@gmail.com</a>
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <p className="font-body text-sm italic">All consultations are confidential.</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "name" as const, label: "Name", type: "text" },
              { name: "phone" as const, label: "Phone", type: "tel" },
              { name: "email" as const, label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="font-accent text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="font-accent text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">
                Brief Description of Your Situation
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-lg text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <Button variant="gold" size="lg" type="submit" className="w-full">
              <Send className="w-4 h-4" />
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
};

export default ContactSection;
