import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaComments } from "react-icons/fa";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`contact-fab ${open ? "open" : ""}`}>

      {/* Opciones */}
      <a
        href="https://wa.me/543586001318"
        target="_blank"
        rel="noreferrer"
        className="fab-option"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://www.instagram.com/marketinglegal.ok"
        target="_blank"
        rel="noreferrer"
        className="fab-option"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      {/* Botón principal */}
      <button
        className="fab-main"
        onClick={() => setOpen(!open)}
        aria-label="Contacto"
      >
        <FaComments />
      </button>

    </div>
  );
}



