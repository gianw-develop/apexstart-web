"use client";

import { ArrowRight, Mail, Globe, MapPin, Sparkles } from "lucide-react";

const links = {
  Servicios: [
    { label: "Formación de LLC", href: "#servicios" },
    { label: "Cuenta Bancaria USA", href: "#servicios" },
    { label: "Stripe", href: "#servicios" },
    { label: "ITIN", href: "#servicios" },
    { label: "Contabilidad", href: "#servicios" },
  ],
  Empresa: [
    { label: "Plataforma", href: "#plataforma" },
    { label: "Precios", href: "#precios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "FAQ", href: "#faq" },
  ],
};

const countries = [
  "Argentina",
  "México",
  "Colombia",
  "Chile",
  "Perú",
  "Uruguay",
  "Venezuela",
  "Bolivia",
];

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white overflow-hidden">
      {
        /* CTA strip */
      }
      <div className="border-b border-[rgba(255,255,255,0.1)]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "#22D3EE" }}
              >
                Comenzá hoy
              </p>
              <h3
                className="font-extrabold tracking-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 0.95 }}
              >
                Tu empresa en EE.UU.
                <br />
                Lista en una semana.
                <span className="hidden lg:inline-flex items-center align-top ml-3">
                  <Sparkles size={36} className="text-[#D92B1F]" style={{ filter: "drop-shadow(0 0 10px rgba(217,43,31,0.55))" }} />
                </span>
              </h3>
              <p className="text-sm text-[rgba(255,255,255,0.6)]">
                1,400+ emprendedores de LATAM ya operan con ApexStart.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="#precios"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-[#22D3EE] text-[#0A2540] transition-transform hover:-translate-y-0.5"
                style={{ boxShadow: "0 0 18px #22D3EE, 0 0 32px rgba(34,211,238,0.4)" }}
              >
                Ver planes
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:info@apexstart.us"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-transparent text-white border border-[rgba(255,255,255,0.2)] hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors"
              >
                <Mail size={16} />
                info@apexstart.us
              </a>
            </div>
          </div>
        </div>
      </div>

      {
        /* Main footer */
      }
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {
            /* Brand */
          }
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5">
              <img
                src="./logo.png"
                alt="ApexStart"
                className="w-8 h-8 object-contain"
              />
              <span className="font-semibold text-lg">ApexStart</span>
            </a>
            <p className="text-sm leading-relaxed mb-6 text-[rgba(255,255,255,0.55)]">
              Tu socio para establecer y operar tu empresa en EE.UU. desde
              LATAM.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="mailto:info@apexstart.us"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.6)] hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors"
              >
                <Mail size={15} />
              </a>
              <a
                href="https://apexstart.us"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.6)] hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors"
              >
                <Globe size={15} />
              </a>
            </div>
          </div>

          {
            /* Links */
          }
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-xs uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-[rgba(255,255,255,0.7)] hover:text-[#22D3EE] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {
            /* Contact */
          }
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-5">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-[rgba(255,255,255,0.7)]">
              <a
                href="mailto:info@apexstart.us"
                className="block hover:text-[#22D3EE] transition-colors"
              >
                info@apexstart.us
              </a>
              <a
                href="https://apexstart.us"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#22D3EE] transition-colors"
              >
                apexstart.us
              </a>
              <div className="flex items-center gap-1.5 text-xs text-[rgba(255,255,255,0.5)] mt-4">
                <MapPin size={12} />
                LATAM · Miami, FL
              </div>
            </div>
          </div>
        </div>

        {
          /* Countries */
        }
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8 mb-8">
          <p className="text-xs font-medium text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-4">
            Disponible en
          </p>
          <div className="flex flex-wrap gap-3">
            {countries.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.15)]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {
          /* Bottom */
        }
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[rgba(255,255,255,0.4)]">
          <p>© 2025 ApexStart. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#22D3EE] transition-colors">Términos</a>
            <a href="#" className="hover:text-[#22D3EE] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#22D3EE] transition-colors">Reembolso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
