"use client";

import { ExternalLink } from "lucide-react";

const proyectos = [
  {
    nombre: "Pizzería Napoli",
    rubro: "Restaurante Italiano",
    url: "https://napoli-alpha.vercel.app/",
    color: "#2e1a1c",
    accent: "#C0392B",
    descripcion: "Landing page para una pizzería. Diseño moderno, minimalista y profesional.",
    tags: ["Next.js", "React", "TypeScript"],
    pronto: false,
  },
  {
    nombre: "S&N Distribuidora",
    rubro: "Distribuidora de frutos secos",
    url: "https://s-y-n-vercel.vercel.app/",
    color: "#2d1a0e",
    accent: "#c8830a",
    descripcion: "Landing page para distribuidora de frutos secos. Diseño cálido y apetitoso orientado a ventas.",
    tags: ["React", "Next.js", "TypeScript"],
    pronto: false,
  },
  {
    nombre: "El Rincon",
    rubro: "Barbería",
    url: "https://el-rincon-nine.vercel.app/",
    color: "#1d1a07",
    accent: "#cf9a09",
    descripcion: "Landing page para Barbería. Diseño moderno y oscuro para atraer nuevos clientes.",
    tags: ["React", "Next.js", "Responsive"],
    pronto: false,
  },
  {
    nombre: "Power Up",
    rubro: "Personal Trainer",
    url: "https://power-up-brian.vercel.app/",
    color: "#0a1628",
    accent: "#3b82f6",
    descripcion: "Landing page para personal trainer. Diseño dinámico y motivacional para atraer nuevos alumnos.",
    tags: ["React", "Tailwind.css", "Next.js"],
    pronto: false,
  },

   {
    nombre: "Gerard Ojeda",
    rubro: "Desarrollador freelance",
    url: "https://portfolio-react-lake-one.vercel.app/",
    color: "#082018",
    accent: "#3bf6f0",
    descripcion: "Landing page para Desarrollador freelance. Diseño oscuro y profesional.aaa",
    tags: ["React", "Tailwind.css", "Responsive", "Next.js"],
    pronto: false,
  },
];


export function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: "100px 0", background: "var(--dark)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ marginBottom: 64 }}>
          <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Nuestros trabajos</span>
          <div className="yellow-line" />
          <h2 className="section-heading" style={{ color: "#fff", marginBottom: 16 }}>
            Páginas que <span className="highlight">hablan por sí solas</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 480, fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
            Cada proyecto es único. Diseñado a medida para el negocio y sus clientes.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {proyectos.map((p, i) => (
            <div
              key={i}
              style={{
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "var(--gray)",
                transition: "all 0.3s ease",
                opacity: p.pronto ? 0.6 : 1,
              }}
              onMouseEnter={(e) => {
                if (!p.pronto) {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${p.accent}44`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 40px rgba(0,0,0,0.3)`;
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Preview simulado */}
              <div style={{
                height: 180,
                background: p.color,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: `radial-gradient(circle at 70% 30%, ${p.accent}22, transparent 60%)`,
                }} />
                {p.pronto ? (
                  <div style={{
                    fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                    color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>
                    Próximamente
                  </div>
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "#fff" }}>
                      {p.nombre.split(" ")[0]}<span style={{ color: p.accent }}>{p.nombre.split(" ").slice(1).join(" ")}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 6, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {p.rubro}
                    </div>
                  </div>
                )}
              </div>

              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                      {p.nombre}
                    </h3>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}>{p.rubro}</span>
                  </div>
                  {!p.pronto && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: "rgba(245,166,35,0.1)",
                        border: "1px solid rgba(245,166,35,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.2s",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--yellow)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(245,166,35,0.1)")}
                    >
                      <ExternalLink size={14} color="var(--yellow)" />
                    </a>
                  )}
                </div>

                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 16, fontFamily: "var(--font-body)" }}>
                  {p.descripcion}
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: 11, padding: "3px 10px", borderRadius: 100,
                      background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)",
                      border: "1px solid rgba(255,255,255,0.08)", fontFamily: "var(--font-body)",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
