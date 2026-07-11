"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Necesito viajar a EE.UU. para abrir mi LLC?",
    a: "No. Todo el proceso es 100% online. No necesitás viajar, ni visa, ni presencia física. Solo tu pasaporte vigente.",
  },
  {
    q: "¿Cuánto tiempo tarda en estar lista?",
    a: "LLC en 3-5 días hábiles. EIN del IRS en 7-15 días hábiles. Cuenta bancaria en 1-2 días. Total: 5 a 7 días hábiles.",
  },
  {
    q: "¿Qué bancos abren para no residentes?",
    a: "Mercury y Relay, 100% online, sin SSN y sin comisiones ocultas. Gestionamos todo el proceso por vos.",
  },
  {
    q: "¿Qué es el EIN y para qué sirve?",
    a: "Es el número fiscal de tu empresa ante el IRS. Lo necesitás para abrir cuentas bancarias, usar Stripe y declarar impuestos.",
  },
  {
    q: "¿Qué es el ITIN y lo necesito?",
    a: "El ITIN es tu número de contribuyente personal ante el IRS. No es obligatorio, pero lo recomendamos si vas a operar frecuentemente.",
  },
  {
    q: "¿Tengo que pagar impuestos en EE.UU.?",
    a: "Generalmente no pagás impuestos federales si sos no residente y operás fuera de EE.UU. Igual tenés obligaciones de reporte que manejamos por vos.",
  },
  {
    q: "¿En qué estados puedo registrar mi LLC?",
    a: "En cualquiera de los 50 estados. Los más elegidos son Wyoming, Delaware, New Mexico, Montana y Florida.",
  },
  {
    q: "¿Puedo usar Stripe desde LATAM?",
    a: "Sí. Con una LLC americana accedés a Stripe para cobrar a clientes de todo el mundo sin las restricciones de tu país.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 px-6 bg-[#F8F9FB]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="tag justify-center mb-5">Preguntas frecuentes</div>
          <h2
            className="text-display mb-5"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Todo lo que necesitás
            <br />
            <span className="text-gradient">saber.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
              }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium text-sm leading-snug text-[#0F172A]">
                  {faq.q}
                </span>
                <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: open === i ? "rgba(168,85,247,0.15)" : "#F1F5F9", boxShadow: open === i ? "0 0 12px rgba(168,85,247,0.35)" : "none" }}
                >
                  {open === i ? (
                    <Minus size={12} style={{ color: "#A855F7", filter: "drop-shadow(0 0 3px rgba(168,85,247,0.8))" }} />
                  ) : (
                    <Plus size={12} className="text-[#0A2540]" />
                  )}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <div
                    className="h-px w-full mb-4"
                    style={{ background: "#E2E8F0" }}
                  />
                  <p className="text-sm leading-relaxed text-[#64748B]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-[#94A3B8] mb-2">¿Tenés más preguntas?</p>
          <a
            href="mailto:info@apexstart.us"
            className="font-medium text-sm text-[#0A2540] hover:opacity-80 transition-opacity"
          >
            info@apexstart.us →
          </a>
        </div>
      </div>
    </section>
  );
}
