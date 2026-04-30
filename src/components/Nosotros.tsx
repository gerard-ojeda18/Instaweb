"use client";
import { Code2, Handshake, CheckCircle2 } from "lucide-react";

export function Nosotros() {
  return (
    <section id="nosotros" style={{ padding: "100px 0", background: "var(--darker)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40, alignItems: "center" }} className="grid-responsive">

          {/* Texto */}
          <div>
            <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Quiénes somos</span>
            <div className="yellow-line" />
            <h2 className="section-heading" style={{ color: "#fff", marginBottom: 20 }}>
              Dos personas,<br />
              <span className="highlight">un solo objetivo</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.8, marginBottom: 32, fontFamily: "var(--font-body)" }}>
              Somos una agencia con foco total en resultados. Sin estructuras enormes ni procesos lentos.
              Trabajamos directo con cada cliente para entender su negocio y crear una web que realmente funcione.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Comunicación directa, sin intermediarios",
                "Entrega en tiempo y forma",
                "Soporte después de la entrega",
                "Siempre disponibles para responder tus dudas",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <CheckCircle2 size={18} color="var(--yellow)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards del equipo */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                icon: Code2,
                nombre: "Desarrollador",
                rol: "Frontend Developer",
                desc: "Especializado en React, Next.js y Tailwind CSS. Se encarga del diseño y desarrollo de cada página.",
                color: "#F5A623",
              },
              {
                icon: Handshake,
                nombre: "Asesor Comercial",
                rol: "Business Developer",
                desc: "Especializado en ventas y relación con clientes. Se encarga de entender tu negocio y encontrar la mejor solución.",
                color: "#F5A623",
              },
            ].map((p, i) => (
              <div key={i} className="card" style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: "rgba(245,166,35,0.1)",
                  border: "1px solid rgba(245,166,35,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <p.icon size={24} color={p.color} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                    {p.nombre}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--yellow)", fontWeight: 600, marginBottom: 10, fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
                    {p.rol}
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #nosotros .grid-2col { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
