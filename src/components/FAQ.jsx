import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const data = [
    {
      cat: "Registro de Marca",
      items: [
        { q: "¿Por qué registrar una marca?", a: "Para obtener exclusividad legal sobre tu nombre." },
        { q: "¿Cuánto tarda el registro?", a: "Entre 12 y 18 meses según INPI." },
        { q: "¿Qué significa registrar una marca?", a: "Es obtener el derecho exclusivo de uso." },
        { q: "¿Cuál es el alcance?", a: "Válido en Argentina y en las clases seleccionadas." },
        { q: "¿Se puede registrar entre varias personas?", a: "Sí, puede tener varios titulares." },
        { q: "¿Qué es una oposición?", a: "Un tercero objeta tu marca; analizamos y respondemos." },
        { q: "¿Cómo sé qué clase elegir?", a: "Te asesoramos según tu actividad." }
      ]
    },
    {
      cat: "Publicidad Digital",
      items: [
        { q: "¿Qué incluye el servicio?", a: "Campañas Meta Ads, audiencias, pixel y reportes." },
        { q: "¿Orgánico o pago?", a: "Pago = resultados más rápidos y segmentados." },
        { q: "¿Administran campañas?", a: "Sí, gestionamos y optimizamos todo." },
        { q: "¿Sirve para marcas nuevas?", a: "Sí, ayuda a generar visibilidad." },
        { q: "¿Puedo pausar campañas?", a: "Sí, en cualquier momento." }
      ]
    },
    {
      cat: "Identidad Visual",
      items: [
        { q: "¿Qué incluye el servicio?", a: "Logo, paleta, tipografías, iconografía y manual." },
        { q: "¿Cuánto tarda?", a: "Entre 2 y 4 semanas." },
        { q: "¿Qué entregables recibo?", a: "Kit completo + manual en PDF." }
      ]
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="section-title">Preguntas Frecuentes</h2>

        {data.map((block, idx) => (
          <div key={idx}>
            <h3 style={{ margin: "1.5rem 0 .8rem" }}>{block.cat}</h3>

            {block.items.map((item, i) => (
              <div key={i} className="faq-item">
                <div className="faq-question" onClick={() => toggle(`${idx}-${i}`)}>
                  {item.q}
                  <span>{openIndex === `${idx}-${i}` ? "−" : "+"}</span>
                </div>

                {openIndex === `${idx}-${i}` && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}


