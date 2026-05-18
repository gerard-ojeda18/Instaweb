"use client";
import { useState, useEffect, CSSProperties } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Trabajos", href: "#portfolio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "FAQ", href: "#faq" },
  ];

  const logoTextStyle: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "22px",
  fontWeight: 800,
  color: "#fff",
  letterSpacing: "-0.02em",
};

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(15,15,26,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        padding: scrolled ? "14px 0" : "22px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="/favicon.png" alt="logo" style={{ width: 40, height: 40, objectFit: "contain" as const }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
           Insta<span style={{ color: "var(--yellow)" }}>Web</span>
          </span>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
          Páginas que generan resultados
              </span>
             </div>
        </a>

        {/* Links desktop */}
        <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--yellow)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>
            Contactanos
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }}
          className="show-mobile"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "rgba(15,15,26,0.98)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 16, fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }} onClick={() => setOpen(false)}>
            Contactanos
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
