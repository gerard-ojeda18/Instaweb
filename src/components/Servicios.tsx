"use client";
import { Layout, Zap, Check } from "lucide-react";

const servicios = [
  {
    icon: Layout,
    title: "Paquete Básico",
    desc: "Todo lo que tu negocio necesita para tener presencia online de forma rápida y profesional.",
    items: [
      "Hasta 4 secciones personalizadas",
      "Diseño 100% a medida",
      "Responsive (mobile y desktop)",
      "Hosting gratis en Vercel",
      "SSL (https) incluido",
      "Botón WhatsApp directo",
      "Tu web visible en Google",
      "Entrega en 48-72hs",
    ],
    popular: false,
    badge: null,
  },
  {
    icon: Zap,
    title: "Paquete Completo",
    desc: "La solución integral para negocios que quieren destacar y conseguir más clientes desde el primer día.",
    items: [
      "Hasta 6 secciones personalizadas",
      "Diseño premium a medida",
      "Responsive (mobile y desktop)",
      "Hosting gratis en Vercel",
      "SSL (https) incluido",
      "Dominio personalizado incluido 1er año",
      "Botón WhatsApp directo",
      "Google Maps integrado",
      "SEO básico optimizado",
      "Posicionamiento en Google",
      "Aparecés cuando te buscan en tu zona",
      "Alta en Google Business (Google Maps)",
      "Entrega en 48-72hs",
    ],
    popular: true,
    badge: "MÁS ELEGIDO",
  },
];

export function Servicios() {
  return (
    <section id="servicios" style={{ padding: "100px 0", background: "var(--darker)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ marginBottom: 64 }}>
          <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Servicios</span>
          <div className="yellow-line" />
          <h2 className="section-heading" style={{ color: "#fff", marginBottom: 16 }}>
            Todo lo que necesita<br />
            <span className="highlight">tu negocio online</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 480, fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
            Páginas profesionales diseñadas para que tus clientes te encuentren y te elijan.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 860, margin: "0 auto" }}>
          {servicios.map((s, i) => (
            <div
              key={i}
              className="card"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                border: s.popular ? "1.5px solid rgba(245,166,35,0.4)" : "1px solid rgba(255,255,255,0.06)",
                boxShadow: s.popular ? "0 0 40px rgba(245,166,35,0.08)" : "none",
              }}
            >
              {s.badge && (
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  background: "var(--yellow)", color: "var(--darker)",
                  fontSize: 11, fontWeight: 700, padding: "4px 10px",
                  borderRadius: 100, fontFamily: "var(--font-display)", letterSpacing: "0.05em",
                }}>
                  {s.badge}
                </div>
              )}

              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: "rgba(245,166,35,0.1)",
                border: "1px solid rgba(245,166,35,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <s.icon size={22} color="var(--yellow)" />
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
                {s.title}
              </h3>

              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 24, fontFamily: "var(--font-body)" }}>
                {s.desc}
              </p>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20, marginBottom: 24, flex: 1 }}>
                {s.items.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <Check size={14} color="var(--yellow)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", display: "flex", boxSizing: "border-box" }}
              >
                Solicitá tu presupuesto
              </a>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <p style={{
          textAlign: "center", marginTop: 40,
          fontSize: 13, color: "rgba(255,255,255,0.3)",
          fontFamily: "var(--font-body)",
        }}>
          * El dominio personalizado se renueva por separado a partir del segundo año. Consultanos por servicios adicionales.
        </p>
      </div>
    </section>
  );
}