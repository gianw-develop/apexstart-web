"use client";
import { Building2, Landmark, Globe, CreditCard, FileText, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    num: "01",
    title: "Formación de LLC",
    desc: "Wyoming · Delaware · New Mexico. EIN, Operating Agreement y Artículos incluidos.",
    dark: true,
    wide: false,
  },
  {
    icon: Landmark,
    num: "02",
    title: "Cuenta bancaria en USD",
    desc: "Mercury o Relay, 100% online. Sin visitar EE.UU., sin SSN.",
    dark: false,
    wide: false,
  },
  {
    icon: Globe,
    num: "03",
    title: "Web .com profesional",
    desc: "Diseño, dominio .com, hosting USA, email corporativo.",
    dark: false,
    wide: true,
  },
  {
    icon: CreditCard,
    num: "04",
    title: "Stripe configurado",
    desc: "Cobros globales con tarjeta desde el primer día.",
    dark: false,
    wide: false,
  },
  {
    icon: FileText,
    num: "05",
    title: "ITIN ante el IRS",
    desc: "Operá legalmente en EE.UU. sin número de seguro social.",
    dark: true,
    wide: false,
  },
  {
    icon: BarChart3,
    num: "06",
    title: "Contabilidad mensual",
    desc: "Cumplimiento con el IRS, declaraciones anuales. Sin multas.",
    dark: false,
    wide: false,
  },
];

export default function Benefits() {
  return (
    <section id="servicios" className="py-24 px-6 subtle-grid" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line w-6" />
              <span className="tag">Servicios · Todo en un lugar</span>
            </div>
            <h2
              className="font-black leading-[0.9] tracking-tighter"
              style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "#111827" }}
            >
              El kit completo para<br />
              <span className="gradient-text">operar en EE.UU.</span>
            </h2>
          </div>
          <a
            href="#precios"
            className="inline-flex items-center gap-2 text-sm font-semibold shrink-0"
            style={{ color: "#002868" }}
          >
            Ver precios <ArrowRight size={14} />
          </a>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`rounded-2xl p-7 flex flex-col justify-between group transition-all duration-300 ${s.wide ? "sm:col-span-2 lg:col-span-1" : ""}`}
                style={
                  s.dark
                    ? { background: "#002868", minHeight: "200px" }
                    : { background: "#F5F7FA", border: "1px solid rgba(0,40,104,0.1)", minHeight: "200px" }
                }
              >
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={
                      s.dark
                        ? { background: "rgba(0,40,104,0.15)", border: "1px solid rgba(0,40,104,0.3)" }
                        : { background: "rgba(0,40,104,0.07)", border: "1px solid rgba(0,40,104,0.15)" }
                    }
                  >
                    <Icon size={18} style={{ color: s.dark ? "#002868" : "#002868" }} />
                  </div>
                  <span
                    className="text-xs font-black tracking-widest"
                    style={{ color: s.dark ? "rgba(255,255,255,0.1)" : "rgba(0,40,104,0.08)" }}
                  >
                    {s.num}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-black text-lg mb-2 leading-snug"
                    style={{ color: s.dark ? "#FFFFFF" : "#111827" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: s.dark ? "rgba(255,255,255,0.5)" : "rgba(17,24,39,0.5)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
