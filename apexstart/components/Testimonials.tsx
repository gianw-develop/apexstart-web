"use client";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    country: "🇦🇷 Argentina",
    role: "Fundador",
    company: "TuEmpresa.com",
    web: "https://tuempresa.com",
    text: "En menos de una semana tenía mi LLC activa y la cuenta bancaria en Mercury lista. El proceso fue increíblemente simple y el soporte estuvo presente en cada paso.",
    stars: 5,
  },
  {
    name: "Valentina Torres",
    country: "🇨🇴 Colombia",
    role: "CEO",
    company: "MiNegocioUSA.com",
    web: "https://minegociousa.com",
    text: "Tenía miedo de que fuera complicado desde Colombia, pero ApexStart lo hizo todo. La cuenta en Relay funcionando, Stripe integrado y mi web lista en tiempo récord.",
    stars: 5,
  },
  {
    name: "Rodrigo Salas",
    country: "🇨🇱 Chile",
    role: "Emprendedor",
    company: "DigitalStartup.io",
    web: "https://digitalstartup.io",
    text: "El plan Pro vale cada centavo. Web profesional, Stripe configurado y mi LLC en Wyoming. Ahora facturo a clientes de todo el mundo sin problemas.",
    stars: 5,
  },
  {
    name: "Ana Gutiérrez",
    country: "🇲🇽 México",
    role: "Freelancer",
    company: "FreelanceProMX.com",
    web: "https://freelancepromx.com",
    text: "Necesitaba cobrar por Stripe desde México y me lo resolvieron todo. LLC, cuenta bancaria y Stripe en 7 días. 100% recomendable.",
    stars: 5,
  },
  {
    name: "Diego Ramírez",
    country: "🇺🇾 Uruguay",
    role: "Founder",
    company: "TechVentureUY.com",
    web: "https://techventureuy.com",
    text: "Excelente servicio. Profesionales, rápidos y siempre disponibles. Mi empresa en Delaware con cuenta Mercury funcionando al 100%.",
    stars: 5,
  },
  {
    name: "Sofía Herrera",
    country: "🇵🇪 Perú",
    role: "E-commerce",
    company: "ShopGlobalPE.com",
    web: "https://shopglobalpe.com",
    text: "El plan Elite fue la mejor decisión. Tienen mi contabilidad al día, me avisaron de todos los vencimientos y el ITIN lo tramitaron sin problemas.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-28 px-6 relative overflow-hidden" style={{background:'#F5F7FA'}}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
      <div className="absolute left-0 top-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(0,40,104,0.04)'}} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest mb-4 block" style={{color:'#002868'}}>
            Más de 500 emprendedores confían en nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{color:'#111827'}}>
            Lo que dicen
            <br />
            <span className="gradient-text">nuestros clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between card card-hover"
            >
              <div>
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{color:'rgba(17,24,39,0.55)'}}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm" style={{color:'#111827'}}>{t.name}</div>
                  <div className="text-xs" style={{color:'rgba(17,24,39,0.4)'}}>{t.role} · {t.country}</div>
                </div>
                <a
                  href={t.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 gold-badge px-3 py-1.5 rounded-full text-xs hover:opacity-80 transition-opacity"
                >
                  <ExternalLink size={11} />
                  {t.company}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
