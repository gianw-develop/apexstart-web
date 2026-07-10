"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={
        scrolled
          ? {
              background: "rgba(248,249,251,0.92)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid #E2E8F0",
            }
          : { background: "transparent" }
      }
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
            style={{ background: "#22D3EE", boxShadow: "0 0 12px rgba(34,211,238,0.45)" }}
          >
            <span className="text-[#0A2540] font-black text-xs">A</span>
          </div>
          <span className="font-semibold text-lg tracking-tight text-[#0F172A]">
            ApexStart
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#64748B] hover:text-[#0A2540] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:info@apexstart.us"
            className="text-sm font-medium text-[#64748B] hover:text-[#0A2540] transition-colors"
          >
              Contacto
          </a>
          <a href="#precios" className="btn-primary text-sm px-5 py-2">
            Comenzar
          </a>
        </div>

        <button
          className="md:hidden p-2 text-[#64748B]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 px-6 py-5 flex flex-col gap-4"
          style={{
            background: "rgba(248,249,251,0.98)",
            borderTop: "1px solid #E2E8F0",
            backdropFilter: "blur(20px)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#64748B] hover:text-[#0A2540] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#precios"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm px-5 py-3 text-center mt-2"
          >
            Comenzar
          </a>
        </div>
      )}
    </header>
  );
}
