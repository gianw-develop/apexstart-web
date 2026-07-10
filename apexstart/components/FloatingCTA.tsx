"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <a
      href="https://wa.me/17869354213?text=Hola%2C%20quiero%20abrir%20mi%20LLC%20en%20EE.UU."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
      style={{
        background: "#25D366",
        boxShadow: "0 0 18px #25D366, 0 0 32px rgba(37,211,102,0.45)",
      }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
