"use client";
import { ArrowRight, Mail } from "lucide-react";

const facts = [
  { value: "500+", label: "empresas formadas" },
  { value: "7d",   label: "tiempo promedio" },
  { value: "12",   label: "países de LATAM" },
];

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F5F7FA" }}
    >
      <div className="gold-line w-full" style={{ borderRadius: 0 }} />

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="gold-line w-6" />
            <span className="tag">Empieza hoy</span>
          </div>

          <h2
            className="font-black leading-[0.9] tracking-tighter mb-8"
            style={{ fontSize: "clamp(2.8rem,6vw,5rem)", color: "#111827" }}
          >
            Tu empresa<br />
            en EE.UU.<br />
            <span className="gradient-text">te espera.</span>
          </h2>

          <div className="flex flex-wrap gap-4 mb-10">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-xl px-5 py-3"
                style={{ background: "#FFFFFF", border: "1px solid #E5E9EF" }}
              >
                <div className="text-2xl font-black" style={{ color: "#002868" }}>{f.value}</div>
                <div className="text-xs" style={{ color: "rgba(17,24,39,0.45)" }}>{f.label}</div>
              </div>
            ))}
          </div>

          <p className="text-base leading-relaxed max-w-md" style={{ color: "rgba(17,24,39,0.5)" }}>
            Más de 500 emprendedores de LATAM ya operan en EE.UU. con ApexStart.
            Sin viajes, sin burocracia, en español.
          </p>
        </div>

        {/* Right - action card */}
        <div
          className="rounded-3xl p-8"
          style={{ background: "#FFFFFF", border: "1px solid #E5E9EF" }}
        >
          <p className="font-black text-2xl mb-2 leading-snug" style={{ color: "#111827" }}>
            ¿Listo para arrancar?
          </p>
          <p className="text-sm mb-8" style={{ color: "rgba(17,24,39,0.45)" }}>
            Respondemos en menos de 24 horas. Sin compromiso.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="#precios"
              className="gold-button flex items-center justify-center gap-2 py-4 rounded-xl text-sm"
            >
              <span>Formar mi LLC ahora</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:info@apexstart.us"
              className="flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                border: "1.5px solid #E5E9EF",
                color: "#002868",
              }}
            >
              <Mail size={15} />
              Hablar con un asesor
            </a>
          </div>

          <div
            className="mt-8 pt-6"
            style={{ borderTop: "1px solid #E5E9EF" }}
          >
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["100% online", "Soporte en español", "Docs en 24hs", "Sin visitar EE.UU."].map((item) => (
                <span key={item} className="text-xs" style={{ color: "rgba(17,24,39,0.35)" }}>
                  · {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
