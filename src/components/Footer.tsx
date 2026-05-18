"use client";
export function Footer() {
  return (
    <footer style={{
      background: "var(--darker)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "40px 0",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#fff" }}>
            Insta<span style={{ color: "var(--yellow)" }}>Web</span>
          </span>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 6, fontFamily: "var(--font-body)" }}>
            Páginas que generan resultados
          </p>
        </div>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }} className="footer-links">
         {["#servicios", "#portfolio", "#nosotros", "#faq", "#contacto"].map((href) => (
            <a
              key={href}
              href={href}
              style={{
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                fontSize: 13,
                fontFamily: "var(--font-body)",
                transition: "color 0.2s",
                textTransform: "capitalize",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--yellow)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              {href.replace("#", "")}
            </a>
          ))}
        </div>

        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-body)" }}>
          © 2025 InstaWeb. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
