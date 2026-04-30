"use client";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--darker)",
        paddingTop: 100,
      }}
    >
      {/* Fondo decorativo */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,166,35,0.12) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
        background: "linear-gradient(to top, var(--darker), transparent)",
        pointerEvents: "none",
      }} />

      {/* Grid decorativo */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ maxWidth: 800 }}>

          <div className="animate-fade-up" style={{ marginBottom: 24 }}>
            <span className="tag">
              <Zap size={10} style={{ display: "inline", marginRight: 4 }} />
              Agencia de diseño web
            </span>
          </div>

          <h1 className="section-heading animate-fade-up-delay-1" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", marginBottom: 28, color: "#fff" }}>
            Tu negocio merece<br />
            una web que<br />
            <span className="highlight">genere resultados</span>
          </h1>

          <p className="animate-fade-up-delay-2" style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            marginBottom: 44,
            maxWidth: 560,
            fontFamily: "var(--font-body)",
          }}>
            Diseñamos landing pages profesionales que convierten visitas en clientes.
            Rápidas, modernas y optimizadas para celulares.
          </p>

          <div className="animate-fade-up-delay-3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contacto" className="btn-primary pulse-glow">
              Quiero mi página
              <ArrowRight size={16} />
            </a>
            <a href="#portfolio" className="btn-secondary">
              Ver trabajos
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-4" style={{
            display: "flex", gap: 48, marginTop: 72, flexWrap: "wrap",
          }}>
            {[
              { num: "100%", label: "Responsive" },
              { num: "SSL", label: "Incluido gratis" },
              { num: "48hs", label: "Entrega rápida" },
            ].map((s) => (
              <div key={s.num}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "var(--yellow)" }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 4, fontFamily: "var(--font-body)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
