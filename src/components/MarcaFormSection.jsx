import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function MarcaFormSection() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.target);

    // Datos básicos
    const data = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      ciudad: formData.get("ciudad"),
      marca: formData.get("marca"),
      rubro: formData.get("rubro"),
      logo: formData.get("logo-si-no"),
      disenio: formData.get("disenio"),
      metaAds: formData.get("meta-ads"),
      mensaje: formData.get("mensaje"),
      fecha: Timestamp.now(),
    };

    try {
      // Guardar en Firestore
      await addDoc(collection(db, "consultas-marca"), data);

      alert("Consulta enviada correctamente.");
      e.target.reset();
    } catch (err) {
      console.error("❌ Error guardando consulta:", err);
      alert("Error al enviar el formulario.");
    }

    setSending(false);
  };

  return (
    <section id="consulta-marca" className="section">
      <div className="container">
        <h2 className="section-title">Consulta de Disponibilidad de Marca</h2>

        <form className="form-box" onSubmit={handleSubmit}>
          
          <label>Nombre y apellido *</label>
          <input name="nombre" type="text" required />

          <label>Email *</label>
          <input name="email" type="email" required />

          <label>WhatsApp *</label>
          <input name="whatsapp" type="text" required />

          <label>Ciudad / Provincia *</label>
          <input name="ciudad" type="text" required />

          <label>Nombre de la marca que querés registrar *</label>
          <input name="marca" type="text" required />

          <label>Rubro / actividad principal *</label>
          <textarea name="rubro" rows="3" required />

          <label>¿Tenés logo definido? </label>
          <label>Si tenés logo, envianos un mensaje de Whatsapp con el mismo.</label>
          <select name="logo-si-no">
            <option>No</option>
            <option>Sí</option>
          </select>

          <label>¿Te gustaría crear o renovar tu identidad visual?</label>
          <select name="disenio">
            <option>No</option>
            <option>Sí</option>
          </select>

          <label>¿Te interesa recibir asesoramiento en publicidad digital (Meta Ads)?</label>
          <select name="meta-ads">
            <option>No</option>
            <option>Sí</option>
          </select>

          <label>Mensaje adicional</label>
          <textarea name="mensaje" rows="3" />

          <button className="btn-accent" type="submit" disabled={sending}>
            {sending ? "Enviando..." : "Enviar consulta"}
          </button>

        </form>
      </div>
    </section>
  );
}




