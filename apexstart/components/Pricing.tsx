"use client";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    num: "01",
    price: "599",
    stateFee: true,
    highlight: false,
    pill: null,
    promise: "LLC activa + cuenta bancaria en 7 días",
    features: [
      "LLC en Wyoming, Delaware o New Mexico",
      "EIN (número fiscal ante el IRS)",
      "Operating Agreement + Artículos",
      "Registered Agent 1 año",
      "Dirección comercial USA 1 año",
      "Cuenta bancaria Mercury o Relay",
      "Reporte BOI ante FinCEN",
      "Soporte en español",
    ],
    cta: "Empezar con Starter",
  },
  {
    name: "Pro",
    num: "02",
    price: "999",
    stateFee: true,
    highlight: true,
    pill: "Más popular",
    promise: "Empresa operativa lista para cobrar globalmente",
    features: [
      "Todo lo de Starter",
      "Web profesional 3 páginas (.com USA)",
      "Hosting USA + SSL 1 año",
      "Email corporativo @tudominio.com",
      "Stripe configurado (cobros globales)",
      "ITIN Number tramitado ante el IRS",
      "Soporte prioritario 24/7",
      "Asesoría fiscal 30 min",
    ],
    cta: "Empezar con Pro",
  },
  {
    name: "Elite",
    num: "03",
    price: "1,799",
    stateFee: false,
    highlight: false,
    pill: "Todo incluido",
    promise: "Operación y cumplimiento fiscal por 12 meses",
    features: [
      "Todo lo de Pro",
      "Contabilidad mensual 12 meses",
      "Declaración de impuestos anual",
      "Account Manager dedicado",
      "Renovación anual + fee del estado",
      "Asesoría tributaria 90 min",
      "Soporte VIP ilimitado",
      "Tasa estatal incluida",
    ],
    cta: "Empezar con Elite",
  },
];

const states = [
  { name: "Wyoming", fee: "$100" },
  { name: "Delaware", fee: "$90" },
  { name: "New Mexico", fee: "$50" },
  { name: "Florida", fee: "$125" },
  { name: "Michigan", fee: "$50" },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 px-6 overflow-hidden" style={{ background: "#F5F7FA" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line w-6" />
              <span className="tag">Precios · Sin costos ocultos</span>
            </div>
            <h2
              className="font-black leading-[0.9] tracking-tighter"
              style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "#111827" }}
            >
              Elige tu plan y<br />
              <span className="gradient-text">empieza esta semana</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed md:text-right" style={{ color: "rgba(17,24,39,0.45)" }}>
            Soporte en español · Documentos digitales · Sin burocracia
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col overflow-hidden"
              style={
                plan.highlight
                  ? { background: "#002868", borderRadius: "1.5rem", boxShadow: "0 24px 80px rgba(0,40,104,0.25)" }
                  : { background: "#FFFFFF", borderRadius: "1.5rem", border: "1px solid rgba(0,0,0,0.07)" }
              }
            >
              {/* Top accent bar */}
              <div
                className="h-[3px] w-full"
                style={{ background: plan.highlight ? "linear-gradient(90deg,#002868,#0A3A8A)" : "rgba(0,40,104,0.06)" }}
              />

              <div className="p-7 flex flex-col flex-1">
                {/* Plan number + badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-black text-5xl leading-none"
                    style={{ color: plan.highlight ? "rgba(255,255,255,0.08)" : "rgba(0,40,104,0.06)" }}
                  >
                    {plan.num}
                  </span>
                  {plan.pill && (
                    <span
                      className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full"
                      style={
                        plan.highlight
                          ? { background: "#002868", color: "#fff" }
                          : { background: "rgba(0,40,104,0.08)", color: "#002868", border: "1px solid rgba(0,40,104,0.2)" }
                      }
                    >
                      {plan.pill}
                    </span>
                  )}
                </div>

                {/* Name */}
                <div className="text-2xl font-black mb-1" style={{ color: plan.highlight ? "#FFFFFF" : "#111827" }}>
                  {plan.name}
                </div>

                {/* Price */}
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="text-[11px] font-semibold mb-1" style={{ color: plan.highlight ? "rgba(255,255,255,0.4)" : "rgba(17,24,39,0.4)" }}>
                    USD
                  </span>
                  <span className="text-5xl font-black leading-none" style={{ color: plan.highlight ? "#FFFFFF" : "#111827" }}>
                    ${plan.price}
                  </span>
                </div>
                <div className="text-[11px] mb-5" style={{ color: plan.highlight ? "rgba(255,255,255,0.35)" : "rgba(17,24,39,0.35)" }}>
                  {plan.stateFee ? "+ tasa del estado" : "tasa del estado incluida"}
                </div>

                {/* Promise box */}
                <div
                  className="rounded-xl px-4 py-3 mb-6 text-xs font-medium leading-snug"
                  style={
                    plan.highlight
                      ? { background: "rgba(0,40,104,0.08)", border: "1px solid rgba(0,40,104,0.18)", color: "#002868" }
                      : { background: "rgba(0,40,104,0.06)", border: "1px solid rgba(0,40,104,0.15)", color: "#002868" }
                  }
                >
                  ✓ {plan.promise}
                </div>

                {/* Features */}
                <ul className="space-y-2 flex-1 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={13} className="mt-0.5 shrink-0" style={{ color: plan.highlight ? "#002868" : "#002868" }} />
                      <span className="text-sm leading-snug" style={{ color: plan.highlight ? "rgba(255,255,255,0.65)" : "rgba(17,24,39,0.55)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="mailto:info@apexstart.us"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all duration-200"
                  style={
                    plan.highlight
                      ? { background: "linear-gradient(135deg,#002868,#0A3A8A)", color: "#fff", boxShadow: "0 4px 20px rgba(0,40,104,0.3)" }
                      : { background: "#002868", color: "#fff" }
                  }
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* State fees + guarantees strip */}
        <div
          className="rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          <div>
            <p className="tag mb-2">Tasas estatales adicionales</p>
            <div className="flex flex-wrap gap-4">
              {states.map((s) => (
                <div key={s.name} className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold" style={{ color: "#111827" }}>{s.name}</span>
                  <span className="text-sm font-bold" style={{ color: "#002868" }}>{s.fee}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            {["Sin costos ocultos", "Soporte en español", "Docs digitales 24hs"].map((g) => (
              <div key={g} className="flex items-center gap-1.5">
                <Check size={13} style={{ color: "#002868" }} />
                <span className="text-xs font-medium" style={{ color: "rgba(17,24,39,0.5)" }}>{g}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
