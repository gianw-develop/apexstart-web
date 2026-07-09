"use client";
import { ArrowRight, Check, Shield, Clock, Globe2 } from "lucide-react";

const stats = [
  { v: "500+", l: "Empresas formadas" },
  { v: "7 días", l: "Tiempo promedio" },
  { v: "12", l: "Países de LATAM" },
  { v: "100%", l: "Online" },
];

const services = [
  "LLC formada (Wyoming / Delaware / NM)",
  "Cuenta bancaria USD — Mercury o Relay",
  "EIN ante el IRS incluido",
  "Reporte BOI ante FinCEN",
  "Soporte en español 24hs",
];

const badges = [
  { icon: Shield,  text: "Proceso 100% legal" },
  { icon: Clock,   text: "Listo en 7 días" },
  { icon: Globe2,  text: "Desde cualquier país" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20 px-6"
      style={{ background: "#FFFFFF" }}
    >
      {/* Subtle blue tint top-right */}
      <div
        className="absolute top-0 right-0 w-[50%] h-[70%] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(0,40,104,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[3px] w-8 rounded-full" style={{ background: "#002868" }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#002868" }}>
            Formación de LLC · 100% online
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-black tracking-tighter leading-[0.9] mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", color: "#111827" }}
        >
          Tu empresa en EE.UU.
          <br />
          <span style={{ color: "#002868" }}>lista en 7 días.</span>
        </h1>

        {/* Sub + content row */}
        <div className="grid md:grid-cols-2 gap-12 mb-14 items-start">
          <div>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(17,24,39,0.55)" }}>
              Abrimos tu LLC y tu cuenta bancaria en USD desde cero.
              Sin viajes, sin burocracia, en español.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#precios"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "#002868", boxShadow: "0 4px 20px rgba(0,40,104,0.25)" }}
              >
                Formar mi LLC ahora
                <ArrowRight size={16} />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all duration-200"
                style={{ border: "1.5px solid rgba(0,40,104,0.2)", color: "#002868" }}
              >
                Ver cómo funciona
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.text}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: "rgba(0,40,104,0.05)", border: "1px solid rgba(0,40,104,0.1)", color: "rgba(17,24,39,0.6)" }}
                  >
                    <Icon size={11} style={{ color: "#002868" }} />
                    {b.text}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Checklist card */}
          <div
            className="rounded-2xl p-6"
            style={{ background: "#F5F7FA", border: "1px solid rgba(0,40,104,0.1)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#002868" }}>
              Incluido en todos los planes
            </p>
            <ul className="space-y-3 mb-5">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,40,104,0.08)", border: "1px solid rgba(0,40,104,0.18)" }}
                  >
                    <Check size={11} style={{ color: "#002868" }} />
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#111827" }}>{s}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex items-center gap-2" style={{ borderTop: "1px solid rgba(0,40,104,0.08)" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs" style={{ color: "rgba(17,24,39,0.45)" }}>Servicio activo · Respuesta en 24hs</span>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 divide-x overflow-hidden rounded-2xl"
          style={{ background: "#002868" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="flex flex-col items-center justify-center py-7 px-4 text-center"
              style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
            >
              <span className="text-3xl font-black mb-1" style={{ color: "#FFFFFF" }}>{s.v}</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{s.l}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
