import { useState, useEffect } from "react";

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-center">
        <a href="#" className="font-heading text-2xl md:text-3xl tracking-wider text-gold-gradient">
          Deyvison Tatto
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
