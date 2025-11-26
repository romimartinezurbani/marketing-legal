import React from "react";

export default function ContactButton() {
  const waLink = "https://wa.me/543586001318?text=Hola!%20Quiero%20coordinar%20una%20reunión%20con%20Marketing%20Legal.";
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="contact-button"
      aria-label="Contactar por WhatsApp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M...Z" fill="white" />
      </svg>
      <span>Contactanos</span>
    </a>
  );
}
