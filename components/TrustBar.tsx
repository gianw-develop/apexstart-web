"use client";

export default function TrustBar() {
  const partners = [
    "Mercury",
    "Relay",
    "Chase",
    "IRS",
    "Stripe",
    "FinCEN",
  ];

  return (
    <section className="py-8 px-6 bg-[#F8F9FB] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-xs font-medium text-[#94A3B8] uppercase tracking-widest">
            Trabajamos con
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {partners.map((p) => (
              <span
                key={p}
                className="text-sm font-semibold text-[#64748B]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
