"use client";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={scrolled ? {background:'rgba(255,255,255,0.96)', backdropFilter:'blur(20px)', borderBottom:'1px solid rgba(0,40,104,0.08)'} : {}}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gold-button flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight" style={{color:'#111827'}}>
            Apex<span style={{color:'#002868'}}>Start</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200" style={{color:'rgba(17,24,39,0.6)'}}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:info@apexstart.us"
            className="text-sm font-medium transition-colors duration-200" style={{color:'rgba(17,24,39,0.6)'}}
          >
            Contacto
          </a>
          <a
            href="#precios"
            className="gold-button text-sm px-5 py-2.5 rounded-full"
          >
            Empezar ahora →
          </a>
        </div>

        <button
          className="md:hidden" style={{color:'rgba(17,24,39,0.7)'}}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 px-6 py-4 flex flex-col gap-4" style={{background:'rgba(255,255,255,0.98)', borderTop:'1px solid rgba(0,40,104,0.08)'}}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium transition-colors" style={{color:'rgba(17,24,39,0.7)'}}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#precios"
            onClick={() => setOpen(false)}
            className="gold-button text-sm px-5 py-2.5 rounded-full text-center mt-2"
          >
            Empezar ahora →
          </a>
        </div>
      )}
    </header>
  );
}
