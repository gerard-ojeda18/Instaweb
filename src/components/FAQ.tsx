"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const preguntas = [
  {
    pregunta: "¿Cuanto tiempo demora tener mi pagina lista?",
    respuesta: "Dependiendo del plan elegido, entre 3 y 5 dias habiles una vez aprobado el diseño inicial. Trabajamos rapido sin sacrificar calidad.",
  },
  {
    pregunta: "¿El hosting esta incluido?",
    respuesta: "Si, utilizamos Vercel que ofrece hosting gratuito, rapido y seguro. Tu pagina estara siempre online sin costos adicionales mensuales.",
  },
  {
    pregunta: "¿Puedo actualizar el contenido yo mismo?",
    respuesta: "Las paginas que creamos son estaticas y optimizadas para velocidad. Si necesitas cambios, nos contactas y los hacemos sin cargo durante el primer mes.",
  },
  {
    pregunta: "¿Que pasa con el dominio?",
    respuesta: "El dominio (.com, .com.ar, etc.) se abona por separado. Te ayudamos a elegirlo y configurarlo. El costo anual es dependiendo de la extension.",
  },
  {
    pregunta: "¿Las paginas son responsive?",
    respuesta: "Absolutamente. Todas nuestras paginas se ven perfectas en celulares, tablets y computadoras. El diseño mobile-first es nuestra prioridad.",
  },
  {
    pregunta: "¿Incluyen SEO?",
    respuesta: "Si, todos los planes incluyen SEO basico: meta tags, titulos optimizados, velocidad de carga y alta en Google. Para estrategias avanzadas, consultanos.",
  },
  {
    pregunta: "¿Como es el proceso de pago?",
    respuesta: "50% al comenzar el proyecto y 50% al finalizar, antes de la entrega final. Aceptamos transferencia bancaria y MercadoPago.",
  },
  {
    pregunta: "¿Ofrecen mantenimiento?",
    respuesta: "Incluimos 3 meses de soporte técnico sin costo adicional para ajustes menores, corrección de errores y consultas generales. Luego ofrecemos planes de mantenimiento opcionales o cambios puntuales a convenir.",
  },
];

export function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAbierto(abierto === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: "100px 0", background: "var(--darker)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>FAQ</span>
          <h2 className="section-heading" style={{ color: "#fff", marginBottom: 16 }}>
            Preguntas <span className="highlight">frecuentes</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 480, margin: "0 auto", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {preguntas.map((item, i) => (
            <div
              key={i}
              style={{
                borderRadius: 12,
                background: "var(--gray)",
                border: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
                transition: "all 0.2s ease",
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#fff",
                }}>
                  {item.pregunta}
                </span>
                <ChevronDown
                  size={20}
                  color="var(--yellow)"
                  style={{
                    flexShrink: 0,
                    transition: "transform 0.2s ease",
                    transform: abierto === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                style={{
                  maxHeight: abierto === i ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p style={{
                  padding: "0 24px 20px 24px",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {item.respuesta}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 48,
          padding: 32,
          borderRadius: 16,
          background: "linear-gradient(135deg, rgba(245,166,35,0.1), rgba(245,166,35,0.03))",
          border: "1px solid rgba(245,166,35,0.2)",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.7)",
            fontFamily: "var(--font-body)",
            marginBottom: 16,
          }}>
            ¿Tenes otra pregunta?
          </p>
          <a
            href="#contacto"
            className="btn-primary"
            style={{ display: "inline-flex" }}
          >
            Contactanos
          </a>
        </div>

      </div>
    </section>
  );
}