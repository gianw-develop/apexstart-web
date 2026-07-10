"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Franco Caputo",
    role: "CEO, Wonder Up",
    country: "Argentina",
    text: "Excelente servicio. Nacho es una de las personas más trabajadoras y honestas que conocí en el rubro. Una coincidencia afortunada.",
  },
  {
    name: "José Milani",
    role: "CEO, Ser Óptimo",
    country: "Argentina",
    text: "El proceso fue más simple de lo que pensaba. En menos de dos semanas tuve mi LLC activa y la cuenta bancaria lista.",
  },
  {
    name: "Matías Bottero",
    role: "Youtuber",
    country: "Argentina",
    text: "Tenía problemas con los pagos de YouTube. Con la LLC lo resolvimos en 7 días hábiles.",
  },
  {
    name: "Mateo Sánchez",
    role: "Emprendedor",
    country: "Colombia",
    text: "Gran calidad y servicio rápido. Siempre responden cuando necesitás algo. 100% recomendable.",
  },
  {
    name: "Gastón Gallardo",
    role: "Founder",
    country: "Chile",
    text: "Cumplieron con todo lo que nos dijeron en tiempo y forma. Súper recomendable.",
  },
  {
    name: "Martín Poblet",
    role: "Founder",
    country: "Uruguay",
    text: "Excelentes profesionales. El proceso fue súper rápido y sin complicaciones.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="tag mb-5">Reseñas</div>
            <h2
              className="text-display mb-5"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
            >
              1,400+ emprendedores
              <br />
              <span className="text-gradient">confían en nosotros.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className="text-[#D92B1F] fill-[#D92B1F]"
                style={{ filter: "drop-shadow(0 0 6px rgba(217,43,31,0.75))" }}
              />
            ))}
            <span className="text-sm font-medium text-[#0F172A]">4.9 Trustpilot</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-6">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="text-[#D92B1F] fill-[#D92B1F]"
                    style={{ filter: "drop-shadow(0 0 5px rgba(217,43,31,0.7))" }}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-[#475569] mb-6">
                “{t.text}”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white bg-[#0A2540]"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#94A3B8]">
                    {t.role} · {t.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
