const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <span className="font-heading text-2xl font-bold text-primary">KAZ LONG</span>
          <span className="text-border">|</span>
          <span className="font-accent text-xs tracking-[0.3em] text-muted-foreground uppercase">Law Office</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 font-body text-base text-foreground/70">
          <a href="tel:4026817294" className="hover:text-primary transition-colors">402-681-7294</a>
          <span className="text-border">|</span>
          <a href="mailto:kazclong@gmail.com" className="hover:text-primary transition-colors">kazclong@gmail.com</a>
        </div>

        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto">
          This website is for informational purposes only and does not constitute legal advice.
        </p>

        <p className="font-body text-sm text-muted-foreground">
          © 2025 Kaz Long Law Office. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
