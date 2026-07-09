"use client";
import { ClipboardList, UserCheck, Landmark, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Completás el formulario",
    description: "Ingresás tus datos personales y los de tu negocio en menos de 5 minutos. Sin apostillas ni trámites presenciales.",
    time: "5 minutos",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Registramos tu LLC",
    description: "Presentamos tu empresa ante el estado que elegiste y solicitamos tu EIN (Tax ID) al IRS. Te enviamos todos los documentos digitales.",
    time: "3-5 días hábiles",
  },
  {
    number: "03",
    icon: Landmark,
    title: "Abrimos tu cuenta bancaria",
    description: "Con tu EIN en mano, gestionamos la apertura de tu cuenta en Mercury o Relay. 100% online, sin moverte de tu país.",
    time: "1-2 días hábiles",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "¡Listo para operar!",
    description: "Tu empresa americana está activa. Accedés a tu panel con todos los documentos, tu cuenta en USD y todos los servicios adicionales.",
    time: "7 días en total",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 px-6 relative overflow-hidden" style={{background:'#FFFFFF'}}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{background:'rgba(0,40,104,0.04)'}} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest mb-4 block" style={{color:'#002868'}}>
            Simple y rápido
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{color:'#111827'}}>
            Tu LLC lista en{" "}
            <span className="gradient-text">4 pasos</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color:'rgba(17,24,39,0.5)'}}>
            Sin burocracia, sin papelería física, sin viajes a EE.UU. Todo desde tu computadora.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px" style={{background:'linear-gradient(90deg, transparent, rgba(0,40,104,0.15), transparent)'}} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center group">
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300" style={{background:'#FFFFFF', border:'1px solid rgba(0,40,104,0.18)', boxShadow:'0 2px 12px rgba(0,40,104,0.07)'}}>
                      <Icon size={26} style={{color:'#002868'}} />
                    </div>
                    <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full text-xs font-black flex items-center justify-center" style={{background:'#002868', color:'#FFFFFF'}}>
                      {i + 1}
                    </span>
                  </div>
                  <div className="gold-badge px-3 py-1 rounded-full text-xs font-medium mb-4">
                    ⏱ {step.time}
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{color:'#111827'}}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'rgba(17,24,39,0.45)'}}>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#precios"
            className="glow-button text-white font-bold px-8 py-4 rounded-full text-lg inline-flex items-center gap-2"
          >
            Empezar mi proceso →
          </a>
        </div>
      </div>
    </section>
  );
}
