"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Necesito viajar a EE.UU. para abrir mi LLC?",
    a: "No. Todo el proceso es 100% online. No necesitás viajar, no necesitás visa ni presencia física en Estados Unidos. Solo necesitás tu pasaporte vigente y conexión a internet.",
  },
  {
    q: "¿Cuánto tiempo tarda en estar lista mi LLC?",
    a: "El registro de la LLC tarda entre 3 a 5 días hábiles según el estado. El EIN del IRS puede demorar entre 7 a 15 días hábiles adicionales al no tener SSN. La cuenta bancaria se abre en 1 a 2 días hábiles una vez obtenido el EIN.",
  },
  {
    q: "¿Qué bancos abren para no residentes?",
    a: "Trabajamos con Mercury y Relay, los dos mejores bancos digitales de EE.UU. para no residentes. Ambos son 100% online, sin comisiones ocultas y con tarjeta de débito incluida.",
  },
  {
    q: "¿Qué es el EIN y para qué sirve?",
    a: "El EIN (Employer Identification Number) es el número fiscal de tu empresa ante el IRS. Es equivalente al CUIT o RUC de tu país pero para tu LLC americana. Lo necesitás para abrir la cuenta bancaria, usar Stripe y declarar impuestos.",
  },
  {
    q: "¿Qué es el ITIN y lo necesito?",
    a: "El ITIN (Individual Taxpayer Identification Number) es tu número de contribuyente personal ante el IRS. No es obligatorio para abrir la LLC, pero sí te lo recomendamos si vas a tener actividad frecuente en EE.UU., firmar contratos o declarar impuestos personalmente.",
  },
  {
    q: "¿Tengo que pagar impuestos en EE.UU.?",
    a: "Depende de tu estructura. Si sos el único miembro de la LLC y no residís en EE.UU., generalmente no pagás impuestos federales americanos (Pass-through taxation). Sin embargo, hay obligaciones de reporte al IRS que manejamos por vos con nuestro equipo de contabilidad.",
  },
  {
    q: "¿En qué estados puedo registrar mi LLC?",
    a: "Podemos registrar tu LLC en cualquiera de los 50 estados. Los más populares para no residentes son Wyoming (privacidad, sin impuesto estatal), Delaware (prestige empresarial), New Mexico (costo bajo) y Florida.",
  },
  {
    q: "¿Puedo usar Stripe con mi LLC desde LATAM?",
    a: "Sí. Una de las principales razones para abrir una LLC es poder acceder a Stripe desde países de LATAM donde no está disponible o tiene restricciones. Configuramos Stripe en tu LLC americana para que puedas cobrar a clientes de todo el mundo.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 px-6 relative" style={{background:'#FFFFFF'}}>
      <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />
      <div className="absolute right-0 top-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(201,168,76,0.04)'}} />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest mb-4 block" style={{color:'#002868'}}>
            Resolvemos tus dudas
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{color:'#111827'}}>
            Preguntas
            <br />
            <span className="gradient-text">frecuentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden transition-all duration-300 card ${
                open === i ? "" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm md:text-base leading-snug" style={{color:'#111827'}}>
                  {faq.q}
                </span>
                <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center" style={{background:'rgba(0,40,104,0.08)'}}>
                  {open === i ? (
                    <Minus size={14} style={{color:'#002868'}} />
                  ) : (
                    <Plus size={14} style={{color:'#002868'}} />
                  )}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <div className="section-divider mb-5" />
                  <p className="text-sm leading-relaxed" style={{color:'rgba(17,24,39,0.5)'}}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{color:'rgba(17,24,39,0.35)'}}>¿Tenés más preguntas?</p>
          <a
            href="mailto:info@apexstart.us"
            className="font-medium text-sm transition-colors hover:opacity-80" style={{color:'#002868'}}
          >
            Escribinos a info@apexstart.us →
          </a>
        </div>
      </div>
    </section>
  );
}
