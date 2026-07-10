"use client";

import {
  FileSpreadsheet,
  Calculator,
  BookOpen,
  Bell,
  ArrowUpRight,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: FileSpreadsheet,
    title: "Facturación en USD",
    desc: "Creá, enviá y gestioná facturas profesionales desde un único panel.",
  },
  {
    icon: Calculator,
    title: "Contabilidad con IA",
    desc: "P&L automático y balance de ganancias y pérdidas en tiempo real.",
  },
  {
    icon: BookOpen,
    title: "Biblioteca legal",
    desc: "Contratos y plantillas listos para firmar, en inglés y español.",
  },
  {
    icon: Bell,
    title: "Recordatorios fiscales",
    desc: "Annual Report, BOI y Form 5472. Cero multas ni vencimientos.",
  },
];

export default function Platform() {
  return (
    <section
      id="plataforma"
      className="py-28 px-6 bg-[#0A2540] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {
            /* Left copy */
          }
          <div className="lg:col-span-5">
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium neon-border"
              style={{
                background: "rgba(34,211,238,0.08)",
                color: "#22D3EE",
              }}
            >
              <Layers size={12} className="neon-text" />
              Tu panel de control
            </div>

            <h2
              className="font-extrabold tracking-tight mb-6 text-white"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", lineHeight: 0.95 }}
            >
              Manejá tu empresa
              <br />
              desde un solo lugar.
            </h2>

            <p className="text-base leading-relaxed text-[rgba(255,255,255,0.65)] mb-8">
              Otras empresas te dejan con un PDF y un email. ApexStart te da un
              panel para facturar, contabilizar y cumplir con el IRS sin
              depender de terceros.
            </p>

            <a
              href="#precios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#22D3EE] hover:gap-3 transition-all group"
            >
              Ver planes con plataforma incluida
              <ArrowUpRight size={16} className="group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            </a>
          </div>

          {
            /* Right mockup */
          }
          <div className="lg:col-span-7">
            <div
              className="rounded-2xl p-6 md:p-8 neon-border"
              style={{
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {
                /* Fake dashboard header */
              }
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#D92B1F", boxShadow: "0 0 12px #D92B1F, 0 0 22px rgba(217,43,31,0.6)" }}></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <span className="text-xs font-mono text-[#22D3EE] neon-text">
                  panel.apexstart.io
                </span>
              </div>

              {
                /* Stats row */
              }
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Balance", value: "$24.6k" },
                  { label: "Facturas", value: "$8.2k" },
                  { label: "Próx. venc.", value: "14 días" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(34,211,238,0.35)",
                      boxShadow: "0 0 20px rgba(34,211,238,0.08)",
                    }}
                  >
                    <p className="text-[10px] uppercase tracking-wider text-[rgba(255,255,255,0.4)] mb-1">
                      {s.label}
                    </p>
                    <p className="font-mono text-lg font-semibold text-white">{s.value}</p>
                  </div>
                ))}
              </div>

              {
                /* Feature list */
              }
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="flex items-start gap-3 rounded-xl p-4 transition-colors hover:bg-[rgba(255,255,255,0.05)]"
                      style={{ border: "1px solid rgba(34,211,238,0.35)", boxShadow: "0 0 20px rgba(34,211,238,0.06)" }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(34,211,238,0.15)" }}
                      >
                        <Icon size={16} className="text-[#22D3EE]" style={{ filter: "drop-shadow(0 0 4px rgba(34,211,238,0.7))" }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-0.5">
                          {f.title}
                        </p>
                        <p className="text-xs text-[rgba(255,255,255,0.5)] leading-snug">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
