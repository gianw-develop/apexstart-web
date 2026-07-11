"use client";

import {
  Building2,
  Landmark,
  CreditCard,
  FileText,
  BarChart3,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "LLC en EE.UU.",
    desc: "Cualquiera de los 50 estados. Artículos, Operating Agreement, EIN y Registered Agent incluidos.",
  },
  {
    icon: Landmark,
    title: "Cuenta bancaria USD",
    desc: "Mercury, Relay o Chase. Apertura 100% online, sin SSN y sin visitar EE.UU.",
  },
  {
    icon: CreditCard,
    title: "Stripe configurado",
    desc: "Cobrá a clientes de todo el mundo con tarjeta, transferencia o ACH desde el día uno.",
  },
  {
    icon: FileText,
    title: "ITIN ante el IRS",
    desc: "Tramitamos tu número de contribuyente personal para operar legalmente sin SSN.",
  },
  {
    icon: Globe,
    title: "Web profesional",
    desc: "Diseño, dominio .com, hosting en EE.UU. y email corporativo para tu marca.",
  },
  {
    icon: BarChart3,
    title: "Contabilidad",
    desc: "P&L automático, recordatorios fiscales y declaraciones ante el IRS sin sorpresas.",
  },
];

export default function Benefits() {
  return (
    <section id="servicios" className="py-28 px-6 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="tag mb-5">Servicios</div>
            <h2
              className="text-display"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
            >
              Todo lo que necesitás
              <br />
              <span className="text-gradient">para operar legal.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base leading-relaxed text-[#64748B]">
              Desde la formación de la LLC hasta la contabilidad anual. Un
              único proveedor, un único punto de contacto, un único panel para
              manejar tu empresa americana.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card p-7 group">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ background: "rgba(34,211,238,0.1)" }}
                  >
                    <Icon size={18} className="text-[#0A2540] group-hover:text-[#22D3EE] group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)] transition-all" />
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#94A3B8] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-[#A855F7] transition-all group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]"
                  />
                </div>
                <h3 className="font-semibold text-base mb-2 text-[#0F172A]">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#64748B]">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
