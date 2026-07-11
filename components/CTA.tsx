"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="tag justify-center mb-5">Empezá hoy</div>

        <h2
          className="text-display mb-6"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
        >
          Tu empresa en EE.UU. lista
          <br />
          <span className="text-gradient">en menos de una semana.</span>
        </h2>

        <p className="text-base text-[#64748B] mb-10 max-w-xl mx-auto">
          1,400+ emprendedores de LATAM ya operan con ApexStart. Sin viajes,
          sin burocracia, en español.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#precios" className="btn-primary px-8 py-3 text-sm">
            Ver planes
            <ArrowRight size={16} />
          </a>
          <a
            href="mailto:info@apexstart.us"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{
              background: "#FF6B6B",
              color: "#FFFFFF",
              boxShadow: "0 0 18px #FF6B6B, 0 0 34px rgba(255,107,107,0.45)",
            }}
          >
            Hablar con ventas
          </a>
        </div>
      </div>
    </section>
  );
}
