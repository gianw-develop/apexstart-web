"use client";

import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Para emprendedores que empiezan",
    price: "599",
    stateFee: true,
    features: [
      "LLC en Wyoming, Delaware, NM, MT o FL",
      "Cuenta bancaria Mercury o Relay",
      "EIN incluido",
      "Registered Agent 1 año",
      "Plataforma 3 meses gratis",
      "Soporte 24/7 en español",
    ],
    cta: "Empezar con Starter",
  },
  {
    name: "Pro",
    tagline: "Para operar en serio",
    price: "850",
    stateFee: true,
    popular: true,
    features: [
      "Todo lo de Starter",
      "LLC en cualquier estado",
      "Plataforma 1 año incluida",
      "Facturación USD + Contabilidad IA",
      "Biblioteca legal + Roadmap LLC",
      "Asistencia con Stripe",
    ],
    cta: "Empezar con Pro",
  },
];

const enterpriseFeatures = [
  "Declaraciones 1120 + 5472 o 1065",
  "Contabilidad mensual 12 meses",
  "Renovación anual + fee del estado",
  "Dedicated Account Manager",
  "Asesoría tributaria 60 min",
  "Plataforma 2 años incluida",
];

const states = [
  { name: "Wyoming", fee: "$100" },
  { name: "Delaware", fee: "$90" },
  { name: "New Mexico", fee: "$50" },
  { name: "Montana", fee: "$35" },
  { name: "Florida", fee: "$125" },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-28 px-6 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto">
        {
          /* Header */
        }
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="tag justify-center mb-5">Precios claros</div>
          <h2
            className="text-display mb-5"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Elige tu plan y
            <br />
            <span className="text-gradient">comenzá esta semana.</span>
          </h2>
          <p className="text-base text-[#64748B]">
            Sin costos ocultos. Sin pagos mensuales sorpresa. Soporte en
            español incluido.
          </p>
        </div>

        {
          /* Plans */
        }
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="card p-8 flex flex-col relative"
              style={
                plan.popular
                  ? {
                      background: "#FFFFFF",
                      border: "1.5px solid #0A2540",
                      boxShadow: "0 24px 60px rgba(10,37,64,0.08)",
                    }
                  : {}
              }
            >
              {plan.popular && (
                <span
                  className="absolute -top-3 left-8 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white"
                  style={{
                    background: "#FF6B6B",
                    boxShadow: "0 0 18px #FF6B6B, 0 0 30px rgba(255,107,107,0.55)",
                  }}
                >
                  Más elegido
                </span>
              )}

              <div className="mb-6">
                <p className="text-sm font-semibold text-[#0F172A] mb-1">
                  {plan.name}
                </p>
                <p className="text-xs text-[#94A3B8]">{plan.tagline}</p>
              </div>

              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-xs text-[#94A3B8] mb-1.5">USD</span>
                <span className="font-mono text-5xl font-semibold text-[#0A2540]">
                  ${plan.price}
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] mb-8">
                {plan.stateFee
                  ? "+ tasa del estado"
                  : "Tasa estatal incluida"}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={14} className="mt-0.5 shrink-0 text-[#22D3EE]" style={{ filter: "drop-shadow(0 0 3px rgba(34,211,238,0.6))" }} />
                    <span className="text-sm text-[#475569]">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:info@apexstart.us?subject=Plan%20${plan.name}`}
                className="flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={
                  plan.popular
                    ? {
                        background: "#0A2540",
                        color: "#fff",
                        boxShadow: "0 0 18px rgba(255,107,107,0.35)",
                      }
                    : {
                        background: "#FFFFFF",
                        color: "#0A2540",
                        border: "1px solid #E2E8F0",
                      }
                }
              >
                {plan.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {
          /* Enterprise */
        }
        <div
          className="rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 neon-border"
          style={{ background: "#0A2540" }}
        >
          <div className="text-white">
            <p className="text-xs font-medium tracking-widest uppercase opacity-60 mb-2">
              Premium / Enterprise
            </p>
            <p className="text-2xl font-semibold mb-1">$1,450 USD</p>
            <p className="text-sm opacity-70">
              Solución anual completa. Contáctanos y armamos tu propuesta.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/80">
            {enterpriseFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <Check size={14} className="opacity-60" />
                {f}
              </div>
            ))}
          </div>
          <a
            href="mailto:info@apexstart.us?subject=Plan%20Premium"
            className="px-6 py-3 rounded-full text-sm font-semibold bg-[#22D3EE] text-[#0A2540] text-center hover:bg-[#67E8F9] transition-colors"
            style={{ boxShadow: "0 0 22px #22D3EE, 0 0 36px rgba(34,211,238,0.35)" }}
          >
            Consultar Premium →
          </a>
        </div>

        {
          /* State fees */
        }
        <div
          className="rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-[#94A3B8] uppercase tracking-widest">
              Tasas estatales
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {states.map((s) => (
                <div key={s.name} className="text-xs"
                >
                  <span className="text-[#64748B]">{s.name}</span>
                  <span className="font-mono font-medium text-[#0A2540] ml-1">{s.fee}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#64748B]">
            <Check size={12} /> Sin costos ocultos
          </div>
        </div>
      </div>
    </section>
  );
}
