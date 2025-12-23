import React from "react";
import idvisual from "../assets/identidadvisual.png";
import registro from "../assets/registro.png";
import publicidad from "../assets/publicidad.png";



export default function Services() {
  const services = [
    {
      icono: idvisual,
      title: "Estrategia Digital",
      intro: "Un servicio estratégico para marcas y profesionales que ya tienen presencia digital, pero necesitan ordenar su comunicación, diferenciarse y posicionarse con claridad en su mercado.",
      intro2: " La Estrategia Digital define qué decir, cómo decirlo, a quién, por dónde y con qué objetivo, para transformar visibilidad en autoridad y referencia.",
      intro3: " El resultado es un plan estratégico claro y accionable, que elimina la improvisación y permite que cada acción digital tenga sentido y dirección.",
      list: [
        "Diagnóstico estratégico de la comunicación actual",
        "Definición de posicionamiento y mensaje central",
        "Identificación de diferenciales y territorio de marca",
        "Pilares de contenido orientados a autoridad",
        "Estrategia de canales (orgánico y pago)",
        "Roadmap estratégico inicial a 3 meses",
      ],
      
    },

    {
      icono: registro,
      title: "Registro de Marca & Propiedad Intelectual",
      intro: "Protección legal completa del signo distintivo de tu proyecto, acompañando todas las etapas ante el INPI.",
      list: [
        "Búsqueda previa de antecedentes",
        "Análisis de registrabilidad",
        "Estrategia de presentación",
        "Selección de clases (Niza)",
        "Seguimiento del trámite",
        "Contestación de observaciones",
        "Asesoramiento frente a oposiciones",
      ],
      extraTitle: "Servicios complementarios",
      extraList: [
        "Renovación de marca",
        "Transferencias",
        "Contratos comerciales / franquicia",
        "Oposiciones",
        "Informes técnicos",
      ],
    },

    {
      icono: publicidad,
      title: "Publicidad Digital",
      intro: "Impulsamos visibilidad y conversiones mediante campañas en Meta Ads con un enfoque profesional y analítico.",
      intro2: "No se trata solo de anunciar, sino de definir objetivos claros, llegar al público correcto y medir cada acción para optimizar resultados.",
      intro3: "El resultado es un sistema de publicidad digital medible y escalable, alineado a la estrategia de marca y orientado al crecimiento real del negocio.",
      list: [
        "Campañas en Meta Ads",
        "Segmentación estratégica",
        "Configuración de Pixel y métricas",
        "Optimización continua",
        "Reportes mensuales",
        "Lanzamientos y campañas especiales",
      ],
    
    },
  ];

  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card-new" key={i}>

            <div className="service-icon-wrapper">
              <img src={s.icono} alt="" className="service-icon" />
            </div>

            <h3 className="service-title">{s.title}</h3>
            <div className="service-divider"></div>

            <p className="service-intro">{s.intro}</p>
            <p className="service-intro">{s.intro2}</p>
            <p className="service-intro">{s.intro3}</p>
            
            <ul className="service-list">
              {s.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {s.extraTitle && (
              <>
                <h4 className="service-extra-title">{s.extraTitle}</h4>
                <ul className="service-list">
                  {s.extraList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {s.goal && <p className="service-goal">{s.goal}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

