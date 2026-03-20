import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    text: "Kaz was a great Lawyer he was always willing and able to answer any questions I had and walk me step by step through the process. He was also very professional but relatable which made him easy to talk to and work with, if you need representation this is the guy you want if you want it done correctly, fast, easy and to your desired outcome (within reason). Overall 10/10 I would recommend to anyone",
    name: "Gage",
    stars: 5,
    time: "3 months ago",
  },
  {
    text: "Mr. Kaz Long went above and beyond what I imagine any other attorney would do for a client. He truly believes in justice for his clients and he fought for our family when we didn't know where to turn or what to do. He is an amazing attorney and he is more than that. He is a good man. Thank you Kaz",
    name: "Ryan Elliott",
    stars: 5,
    time: "2 months ago",
  },
  {
    text: "When my husband needed an attorney, Kaz was quick to respond and went right to work on his case. Even if I had a question or concern he addressed them quickly. Had a great outcome to the case, if you need an attorney that listens to your questions and answers quickly and very knowledgeable I would advise giving Kaz a call",
    name: "Angie McAlevy",
    stars: 5,
    time: "4 months ago",
  },
  {
    text: "Kaz was knowledgeable about the laws surrounding my case, and was able to successfully help me get it dropped. I have used him two times now, both times winning my case. I highly recommend using him for criminal or civil defense.",
    name: "Aaron Locatis",
    stars: 5,
    time: "a month ago",
  },
  {
    text: "Kaz is amazing to work with. Was always quick to respond to any questions or concerns I or my wife had. If you need a great attorney in your corner, I highly recommend you give him a call.",
    name: "David McAlevy",
    stars: 5,
    time: "4 months ago",
  },
  {
    text: "Kaz represented me in my case and helped me with my mistake. He got my felony charge down to a misdemeanor and a fine instead of prison time. He was available all hours to assist no matter what time or day I texted him and was not only professional, but friendly. Literally the best lawyer I have ever met and I am beyond glad I chose to hire him for my case. I would recommend Kaz to anyone looking for a good lawyer with decent rates to actually help them fix their mistakes.",
    name: "Amber Herrle",
    stars: 5,
    time: "6 months ago",
  },
  {
    text: "Kaz Long has been a blessing to our family. I have been impressed with his professionalism, attention to detail, and most importantly, his compassion in a situation that seemed to defy a quick solution. I can highly recommend him as an attorney and appreciate him as a caring man who puts his clients first.",
    name: "Judith Shabram",
    stars: 5,
    time: "6 months ago",
  },
  {
    text: "Kaz took on my case while I was being falsely accused and he told me based on the facts of the case, it was winnable. He was kind but firm made sure I got fair treatment, and that I understood everything that was happening with my case. He did exactly what he said he would and was there through every step of the process.",
    name: "Rosie M",
    stars: 5,
    time: "5 months ago",
  },
  {
    text: "It meant a lot to me when I called Kaz regarding my case and he jumped right on it and helped me in so many ways. Highly recommend. Thank you Kaz.",
    name: "Josie Ro",
    stars: 5,
    time: "a week ago",
  },
  {
    text: "Great experience, Kaz was awesome throughout the whole process of my case and even got it dismissed completely for me! I went from being worried about jail time to putting it in my rearview. Worth every penny.",
    name: "Steven Salgado",
    stars: 5,
    time: "3 months ago",
  },
  {
    text: "Kaz did an amazing job for me! He was very responsive and went out of his way to meet me. Very friendly and kept me updated as I needed.",
    name: "Jeremy Mcallister",
    stars: 5,
    time: "4 months ago",
  },
  {
    text: "This dude does not shed a single fear and has no hesitation to fight for what's right. I've been worshipping this guy for five years for something that did not happen 5 years ago. No one wanted to make my video evidence relevant, but this guy did!!!",
    name: "Jared",
    stars: 5,
    time: "2 months ago",
  },
  {
    text: "If you're looking for someone that will be fully committed to your case, I would go with Kaz Long Law Office. I felt nothing less than confident stepping into the courts with my lawyer. Excellent service, I am very pleased.",
    name: "Solomen Scott",
    stars: 5,
    time: "4 months ago",
  },
  {
    text: "Kaz was awesome! Communicative, attentive and understanding to the needs of my case. I couldn't have asked for someone better to help guide me through a time where I was very unsure. Would recommend Kaz to anyone else that needs legal counsel!",
    name: "Jacob",
    stars: 5,
    time: "7 months ago",
  },
  {
    text: "Called Kaz on a Sunday with a last minute case Monday morning for a family member. Not only did he answer on Sunday, he offered great advice and as soon as I paid the retainer he had a visit to the jail scheduled within a couple hours that same day. Eventually got all charges dropped! Will definitely recommend him to anyone.",
    name: "Craig Watson",
    stars: 5,
    time: "7 months ago",
  },
  {
    text: "Kaz Long is an outstanding attorney. He helped me through a driving while barred charge with professionalism, honesty, and real care. He explained everything clearly, always kept me informed, and fought hard for the best outcome. Thanks to him, my case turned out far better than I expected. Highly recommend!",
    name: "Uriel Almanza",
    stars: 5,
    time: "8 months ago",
  },
  {
    text: "I first hired Kaz approximately 6 years ago. His work was exceptional, and I have continued to use him since that time. He does great work, and is always available. I've been more than pleased! I would highly recommend.",
    name: "Steven",
    stars: 5,
    time: "a year ago",
  },
  {
    text: "Attorney Kaz Long provided outstanding representation for my brother, who was charged with first-degree sexual assault and faced a potential 20-year prison sentence. Kaz fought tirelessly on his behalf, and thanks to his dedication and expertise, we were able to get the charges reduced to a misdemeanor. Kaz is one of the best Criminal Defense Attorneys that I have worked with personally and professionally.",
    name: "Erica Swain",
    stars: 5,
    time: "a year ago",
  },
    time: "3 months ago",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollFadeIn();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = testimonials.length - itemsPerView;

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section className="relative py-24 bg-secondary noise-overlay">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          What Clients Say
        </h2>
        <p className="font-body text-lg text-foreground/60 text-center mb-16">
          Real reviews from real clients
        </p>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={() => { prev(); setIsAutoPlaying(false); }}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-primary/40 bg-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => { next(); setIsAutoPlaying(false); }}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-primary/40 bg-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-card border border-border rounded-lg p-8 relative hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                    <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6 italic flex-grow">
                      "{t.text}"
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <p className="font-accent text-xs tracking-[0.2em] text-primary uppercase">
                        — {t.name}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">{t.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
};

export default TestimonialsSection;
