"use client";

const steps = [
  {
    number: "01",
    title: "Completás el formulario",
    description:
      "Tus datos y los de tu negocio en menos de 5 minutos. Sin apostillas.",
    time: "5 min",
  },
  {
    number: "02",
    title: "Registramos tu LLC",
    description:
      "Presentamos tu empresa ante el estado y solicitamos el EIN al IRS.",
    time: "3-5 días",
  },
  {
    number: "03",
    title: "Abrimos tu banco",
    description:
      "Gestionamos tu cuenta en Mercury o Relay. 100% online, sin viajar.",
    time: "1-2 días",
  },
  {
    number: "04",
    title: "Empezás a operar",
    description:
      "Accedés a tu panel, documentos, facturación y soporte en español.",
    time: "7 días total",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {
            /* Left */
          }
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="tag mb-5">Cómo funciona</div>
            <h2
              className="text-display mb-6"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
            >
              De LATAM a EE.UU.
              <br />
              <span className="text-gradient">En 4 pasos.</span>
            </h2>
            <p className="text-base leading-relaxed text-[#64748B]">
              Sin burocracia, sin papelería física, sin viajes. Todo se gestiona
              desde tu computadora en tiempo récord.
            </p>
          </div>

          {
            /* Right steps */
          }
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.number} className="card p-6 flex items-start gap-5 group">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-mono text-sm font-semibold"
                    style={{ color: "#D92B1F", textShadow: "0 0 10px #D92B1F, 0 0 22px rgba(217,43,31,0.55)" }}
                  >{step.number}</span>
                  {i < steps.length - 1 && (
                    <div className="w-px h-10" style={{ background: "linear-gradient(180deg, #D92B1F, transparent)", boxShadow: "0 0 10px rgba(217,43,31,0.35)" }} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-base text-[#0F172A]">
                      {step.title}
                    </h3>
                    <span className="text-[10px] font-mono font-medium px-2 py-1 rounded transition-colors group-hover:text-[#D92B1F] group-hover:drop-shadow-[0_0_4px_rgba(217,43,31,0.6)]"
                      style={{ background: "#F1F5F9", color: "#64748B" }}
                    >
                      {step.time}
                    </span>
                  </div>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
