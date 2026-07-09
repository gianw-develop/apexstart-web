"use client";
import { Zap, Mail, Globe, Send } from "lucide-react";

const links = {
  Servicios: [
    { label: "Formación de LLC", href: "#servicios" },
    { label: "Cuenta Bancaria USA", href: "#servicios" },
    { label: "Web Profesional", href: "#servicios" },
    { label: "Configuración Stripe", href: "#servicios" },
    { label: "ITIN Number", href: "#servicios" },
    { label: "Contabilidad", href: "#servicios" },
  ],
  Empresa: [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Precios", href: "#precios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "FAQ", href: "#faq" },
  ],
  Legal: [
    { label: "Términos de servicio", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Política de reembolso", href: "#" },
  ],
};

const countries = ["🇦🇷 Argentina", "🇲🇽 México", "🇨🇴 Colombia", "🇨🇱 Chile", "🇵🇪 Perú", "🇺🇾 Uruguay", "🇻🇪 Venezuela", "🇧🇴 Bolivia"];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-6" style={{background:'#F5F7FA', borderTop:'1px solid #E5E9EF'}}>
      <div className="max-w-7xl mx-auto">
        {/* Countries */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {countries.map((c) => (
            <span key={c} className="px-4 py-1.5 rounded-full text-xs" style={{background:'#FFFFFF', border:'1px solid #E5E9EF', color:'rgba(17,24,39,0.5)'}}>
              {c}
            </span>
          ))}
        </div>

        <div className="section-divider mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg glow-button flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight" style={{color:'#111827'}}>
                Apex<span style={{color:'#002868'}}>Start</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6" style={{color:'rgba(17,24,39,0.5)'}}>
              Tu socio estratégico para establecer y operar tu empresa en EE.UU. desde LATAM.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@apexstart.us"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{background:'#FFFFFF', border:'1px solid #E5E9EF', color:'rgba(17,24,39,0.5)'}}
              >
                <Mail size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{background:'#FFFFFF', border:'1px solid #E5E9EF', color:'rgba(17,24,39,0.5)'}}
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{background:'#FFFFFF', border:'1px solid #E5E9EF', color:'rgba(17,24,39,0.5)'}}
              >
                <Send size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-5" style={{color:'#111827'}}>{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm transition-colors" style={{color:'rgba(17,24,39,0.5)'}}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{color:'rgba(17,24,39,0.35)'}}>
          <p>© 2025 ApexStart. Todos los derechos reservados.</p>
          <p>info@apexstart.us · apexstart.us</p>
          <p>Servicio disponible para toda Latinoamérica</p>
        </div>
      </div>
    </footer>
  );
}
