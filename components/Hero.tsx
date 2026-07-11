"use client";

import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Star } from "lucide-react";

const stats = [
  { v: "1,400+", l: "Empresas formadas" },
  { v: "5-7 días", l: "Tiempo promedio" },
  { v: "4.9", l: "Trustpilot", star: true },
];

const highlights = [
  "LLC formada en 50 estados",
  "Cuenta bancaria Mercury/Relay",
  "EIN incluido",
  "Plataforma de operación",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 bg-[#F8F9FB] overflow-hidden">
      {
        /* American background — Statue of Liberty */
      }
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&w=1920&q=60')",
          backgroundPosition: "center right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.28,
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #F8F9FB 0%, rgba(248,249,251,0.85) 40%, rgba(248,249,251,0.55) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {
          /* Top eyebrow */
        }
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium neon-border"
            style={{
              background: "rgba(34,211,238,0.1)",
              color: "#0A2540",
            }}
          >
            <CheckCircle2 size={12} className="text-[#22D3EE]" style={{ filter: "drop-shadow(0 0 4px rgba(34,211,238,0.7))" }} />
            100% online — sin residencia ni viajes
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#FF6B6B", boxShadow: "0 0 10px #FF6B6B, 0 0 18px rgba(255,107,107,0.7)" }}
            />
          </span>
          <span className="text-xs text-[#94A3B8]">
            info@apexstart.us
          </span>
        </div>

        {
          /* Headline */
        }
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1
              className="text-display mb-8"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
            >
              Tu LLC en USA + Cuenta en USD
              <br />
              Lista en 7 días.
              <span className="hidden lg:inline-flex items-center align-top ml-3">
                <Sparkles size={42} className="text-[#22D3EE]" style={{ filter: "drop-shadow(0 0 10px rgba(34,211,238,0.55))" }} />
              </span>
            </h1>

            <p className="text-lg leading-relaxed mb-10 max-w-2xl text-[#64748B]">
              Formamos tu empresa, abrimos tu cuenta bancaria en USD y te damos
              la plataforma para facturar, contabilizar y crecer. Todo en
              español, desde cualquier país de LATAM.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#precios" className="btn-primary px-7 py-3 text-sm">
                Comenzar ahora
                <ArrowRight size={16} />
              </a>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-7 py-3 text-sm"
              >
                Agendar llamada
              </a>
            </div>

            {
              /* Stats */
            }
            <div className="flex flex-wrap gap-10">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-mono text-2xl font-semibold text-[#0A2540]">
                    {s.v}
                    {s.star && (
                      <Star size={20} className="ml-1 inline-block text-[#22D3EE]" style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,0.5))", fill: "#22D3EE" }} />
                    )}
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {
            /* Dashboard mockup */
          }
          <div className="lg:col-span-4">
            <div
              className="rounded-2xl p-5 relative overflow-hidden card neon-border"
              style={{
                background: "#FFFFFF",
              }}
            >
              {
                /* Header bar */
              }
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF6B6B", boxShadow: "0 0 10px #FF6B6B, 0 0 18px rgba(255,107,107,0.7)" }}></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                </div>
                <span className="text-[10px] text-[#22D3EE] font-mono neon-text">
                  apexstart.io
                </span>
              </div>

              {
                /* Balance */
              }
              <div className="mb-6">
                <p className="text-xs text-[#94A3B8] mb-1">Balance LLC</p>
                <p className="font-mono text-3xl font-semibold text-[#0A2540]">
                  $24,580.00
                </p>
                <p className="text-xs text-[#10B981] mt-1">+12.4% este mes</p>
              </div>

              {
                /* Chart bars */
              }
              <div className="flex items-end gap-2 h-20 mb-6">
                {[35, 52, 28, 64, 48, 78, 62, 88, 74, 96, 58, 82].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 11 ? "#22D3EE" : "#E2E8F0",
                      boxShadow:
                        i === 11 ? "0 0 14px #22D3EE, 0 0 24px rgba(34,211,238,0.6)" : "none",
                    }}
                  />
                ))}
              </div>

              {
                /* Quick actions */
              }
              <div className="grid grid-cols-2 gap-3 mb-5">
                {highlights.map((h) => (
                  <div
                    key={h}
                    className="rounded-lg px-3 py-2.5 text-xs font-medium text-[#0F172A]"
                    style={{ background: "#F8F9FB" }}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#22D3EE] mr-1.5"
                      style={{ boxShadow: "0 0 8px #22D3EE, 0 0 14px rgba(34,211,238,0.7)" }}
                    />
                    {h}
                  </div>
                ))}
              </div>

              {
                /* CTA in mockup */
              }
              <a
                href="#plataforma"
                className="flex items-center justify-between text-xs font-medium text-[#0A2540] hover:text-[#22D3EE] transition-colors group"
              >
                Ver plataforma completa
                <ArrowUpRight size={14} className="group-hover:text-[#22D3EE]" style={{ filter: "drop-shadow(0 0 4px rgba(34,211,238,0.6))" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
