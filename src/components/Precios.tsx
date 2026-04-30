"use client";
import { ArrowRight, Check } from "lucide-react";

const planes = [
  {
    nombre: "Starter",
    precio: "$200.000",
    desc: "Ideal para negocios que quieren presencia online rápida y profesional.",
    items: [
      "Hasta 4 secciones",
      "Diseño personalizado",
      "Responsive (mobile)",
      "Hosting gratis (Vercel)",
      "SSL incluido",
      "SEO básico",
      "Alta en Google",
      "1 revisión de diseño",
    ],
    destacado: false,
  },
  {
    nombre: "Pro",
    precio: "$300.000",
    desc: "Para negocios que quieren más impacto y funcionalidades completas.",
    items: [
      "Hasta 6 secciones",
      "Diseño premium personalizado",
      "Responsive (mobile)",
      "Hosting gratis (Vercel)",
      "SSL incluido",
      "SEO básico completo",
      "Alta en Google",
      "Formulario de contacto",
      "Botón WhatsApp directo",
      "Google Maps integrado",
      "2 revisiones de diseño",
    ],
    destacado: true,
  },
];

export function Precios() {
  return (
    <section id="precios" style={{ padding: "100px 0", background: "var(--dark)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Precios</span>
          <h2 className="section-heading" style={{ color: "#fff", marginBottom: 16 }}>
            Precios <span className="highlight">claros y directos</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 480, margin: "0 auto", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
            Sin letras chicas. Lo que ves es lo que pagás.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 800, margin: "0 auto" }}>
          {planes.map((plan, i) => (
            <div
              key={i}
              style={{
                borderRadius: 16,
                padding: 36,
                background: plan.destacado ? "linear-gradient(135deg, rgba(245,166,35,0.12), rgba(245,166,35,0.04))" : "var(--gray)",
                border: plan.destacado ? "1.5px solid rgba(245,166,35,0.35)" : "1px solid rgba(255,255,255,0.06)",
                position: "relative",
                boxShadow: plan.destacado ? "0 0 40px rgba(245,166,35,0.08)" : "none",
              }}
            >
              {plan.destacado && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: "var(--yellow)", color: "var(--darker)",
                  fontSize: 11, fontWeight: 800, padding: "5px 18px",
                  borderRadius: 100, fontFamily: "var(--font-display)", letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                }}>
                  MÁS ELEGIDO
                </div>
              )}

              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
                  {plan.nombre}
                </h3>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 800, color: "var(--yellow)", marginBottom: 8 }}>
                  {plan.precio}
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
                  {plan.desc}
                </p>
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, marginBottom: 28 }}>
                {plan.items.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <Check size={15} color="var(--yellow)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className={plan.destacado ? "btn-primary" : "btn-secondary"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Empezar ahora
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        {/* Nota pie */}
        <p style={{ textAlign: "center", marginTop: 40, fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}>
          * Dominio (.com.ar o .com) se abona por separado. Consultanos por extras y paquetes a medida.
        </p>
      </div>
    </section>
  );
}
