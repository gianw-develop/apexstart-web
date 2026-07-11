"use client";

import { Check, X } from "lucide-react";

const rows = [
  { feature: "LLC en cualquier estado", us: true, solo: false, other: false },
  { feature: "Cuenta bancaria USD incluida", us: true, solo: false, other: true },
  { feature: "100% online, sin viajes", us: true, solo: false, other: true },
  { feature: "Panel con facturación + contabilidad", us: true, solo: false, other: false },
  { feature: "Soporte en español 24/7", us: true, solo: false, other: false },
  { feature: "Stripe configurado", us: true, solo: false, other: false },
];

export default function Comparison() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="tag justify-center mb-5">Comparación</div>
          <h2
            className="text-display mb-5"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Por qué ApexStart
            <br />
            <span className="text-gradient">vs. las otras opciones.</span>
          </h2>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: "#F8F9FB", border: "1px solid #E2E8F0" }}
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
                <th className="p-5 text-xs font-medium text-[#94A3B8] uppercase tracking-widest">
                  Característica
                </th>
                <th className="p-5 text-center text-sm font-semibold text-[#0A2540]" style={{ background: "rgba(34,211,238,0.08)" }}>
                  ApexStart
                </th>
                <th className="p-5 text-center text-sm font-medium text-[#64748B]">
                  Hacerlo solo
                </th>
                <th className="p-5 text-center text-sm font-medium text-[#64748B]">
                  Otras agencias
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  style={{ borderTop: i === 0 ? "none" : "1px solid #E2E8F0" }}
                >
                  <td className="p-5 text-sm text-[#0F172A] font-medium">{r.feature}</td>
                  <td className="p-5 text-center" style={{ background: "rgba(34,211,238,0.04)" }}>
                    <span
                      className="w-6 h-6 rounded-full inline-flex items-center justify-center"
                      style={{ background: "#0A2540", boxShadow: "0 0 12px #22D3EE, 0 0 22px rgba(34,211,238,0.45)" }}
                    >
                      <Check size={12} className="text-[#22D3EE]" style={{ filter: "drop-shadow(0 0 3px rgba(34,211,238,0.8))" }} />
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    <Value value={r.solo} />
                  </td>
                  <td className="p-5 text-center">
                    <Value value={r.other} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10">
          <a href="#precios" className="btn-primary px-7 py-3 text-sm">
            Ver planes →
          </a>
        </div>
      </div>
    </section>
  );
}

function Value({ value }: { value: boolean }) {
  return value ? (
    <span className="w-6 h-6 rounded-full inline-flex items-center justify-center bg-[#0A2540]"
    >
      <Check size={12} className="text-[#22D3EE]" style={{ filter: "drop-shadow(0 0 3px rgba(34,211,238,0.8))" }} />
    </span>
  ) : (
    <span className="w-6 h-6 rounded-full inline-flex items-center justify-center"
      style={{ background: "rgba(255,107,107,0.12)", boxShadow: "0 0 10px #FF6B6B, 0 0 20px rgba(255,107,107,0.35)" }}
    >
      <X size={12} style={{ color: "#FF6B6B", filter: "drop-shadow(0 0 3px rgba(255,107,107,0.8))" }} />
    </span>
  );
}
