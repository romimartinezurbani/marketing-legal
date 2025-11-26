import React from "react";

export default function MarcaFormSection() {
  return (
    <section id="consulta-marca" className="section">
      <div className="container">
        <h2 className="section-title">Consulta de Disponibilidad de Marca</h2>

        <p style={{ maxWidth: "800px", margin: "0 auto 2rem" }}>
          Completá este formulario para que podamos realizar una evaluación inicial de disponibilidad 
          de tu marca. Esto nos permite identificar si el nombre que querés usar tiene posibilidades 
          reales de registro. Recibirás un análisis preliminar dentro de 48 horas hábiles.
        </p>

        <form className="form-box">

          <label>Nombre y apellido *</label>
          <input type="text" required />

          <label>Email *</label>
          <input type="email" required />

          <label>WhatsApp *</label>
          <input type="text" required />

          <label>Ciudad / Provincia *</label>
          <input type="text" required />

          <label>Nombre de la marca que querés registrar *</label>
          <input type="text" required />

          <label>Rubro / actividad principal *</label>
          <textarea rows="3" required />

          <label>¿Tenés logo definido?</label>
          <select>
            <option>No</option>
            <option>Sí (adjuntar archivo)</option>
          </select>

          <label>Si tenés logo, subí el archivo:</label>
          <input type="file" accept="image/png, image/jpeg" />

          <label>¿Te gustaría crear o renovar tu identidad visual?</label>
          <select>
            <option>No</option>
            <option>Sí</option>
          </select>

          <label>¿Te interesa recibir asesoramiento en publicidad digital (Meta Ads)?</label>
          <select>
            <option>No</option>
            <option>Sí</option>
          </select>

          <label>Mensaje adicional</label>
          <textarea rows="3" />

          <button type="submit" className="btn-accent">
            Enviar consulta
          </button>

        </form>
      </div>
    </section>
  );
}


