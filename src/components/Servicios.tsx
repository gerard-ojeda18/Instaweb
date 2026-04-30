"use client";
import { Layout, Smartphone, Search } from "lucide-react";

const servicios = [
  {
    icon: Layout,
    title: "Landing Page profesional",
    desc: "Diseño a medida con hasta 5 secciones. Hero, servicios, galería, testimonios y contacto. Optimizado para convertir visitantes en clientes.",
    items: ["Diseño 100% personalizado", "Responsive (mobile y desktop)", "Hosting gratis en Vercel", "SSL (https) incluido", "Alta en Google"],
    popular: true,
  },
  {
    icon: Smartphone,
    title: "Optimización mobile",
    desc: "Tu web perfecta en cualquier celular. Diseño adaptado para 4G/5G, carga ultrarrápida y experiencia de usuario impecable.",
    items: ["Velocidad optimizada", "Diseño adaptativo", "Botón WhatsApp directo", "Google Maps integrado", "Compatibilidad total"],
    popular: false,
  },
  {
    icon: Search,
    title: "SEO básico",
    desc: "Hacemos que Google encuentre tu negocio. Configuramos títulos, descripciones y damos de alta tu web en Google Search Console.",
    items: ["Alta en Google Search Console", "Meta tags optimizados", "Velocidad de carga", "Estructura SEO-friendly", "URL limpia y profesional"],
    popular: false,
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {servicios.map((s, i) => (
            <div key={i} className="card" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              {s.popular && (
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  background: "var(--yellow)", color: "var(--darker)",
                  fontSize: 11, fontWeight: 700, padding: "4px 10px",
                  borderRadius: 100, fontFamily: "var(--font-display)", letterSpacing: "0.05em",
                }}>
                  MÁS POPULAR
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

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                {s.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 24, fontFamily: "var(--font-body)" }}>
                {s.desc}
              </p>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20, marginBottom: 24, flex: 1 }}>
                {s.items.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(245,166,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--yellow)" }} />
                    </div>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}>{item}</span>
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
      </div>
    </section>
  );
}