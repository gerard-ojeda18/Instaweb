"use client";
import { useState } from "react";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";

export function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", negocio: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Hola InstaWeb! Me contacto desde la web.%0A%0ANombre: ${form.nombre}%0AEmail: ${form.email}%0ANegocio: ${form.negocio}%0AMensaje: ${form.mensaje}`;
    window.open(`https://wa.me/5491176351430?text=${texto}`, "_blank");
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    padding: "14px 16px",
    color: "#fff",
    fontSize: 14,
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontSize: 12,
    fontWeight: 600,
    color: "rgba(255,255,255,0.45)",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    fontFamily: "var(--font-display)",
    display: "block",
    marginBottom: 8,
  };

  return (
    <section id="contacto" style={{ padding: "100px 0", background: "var(--darker)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40, alignItems: "start" }} className="grid-responsive">

          {/* Info */}
          <div>
            <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Contacto</span>
            <div className="yellow-line" />
            <h2 className="section-heading" style={{ color: "#fff", marginBottom: 20 }}>
              Hablemos de<br />
              <span className="highlight">tu proyecto</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.8, marginBottom: 48, fontFamily: "var(--font-body)" }}>
              Contanos sobre tu negocio y te respondemos en menos de 24 horas con una propuesta a medida.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "Respuesta en menos de 1 hora" },
                { icon: Mail, label: "Email", value: "hola@instaweb.com.ar" },
                { icon: MapPin, label: "Ubicación", value: "Buenos Aires, Argentina" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: "rgba(245,166,35,0.08)",
                    border: "1px solid rgba(245,166,35,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <item.icon size={18} color="var(--yellow)" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-display)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 2 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón WhatsApp directo */}
            <a
              href="https://wa.me/5491176351430?text=Hola%20InstaWeb!%20Vi%20su%20página%20web%20y%20me%20gustaría%20consultar%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: 40, display: "inline-flex" }}
            >
              <MessageCircle size={16} />
              Escribirnos por WhatsApp
            </a>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} style={{
            background: "var(--gray)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 16,
            padding: 40,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Nombre</label>
                <input
                  style={inputStyle}
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  required
                  onFocus={(e) => (e.target.style.borderColor = "rgba(245,166,35,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  style={inputStyle}
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  onFocus={(e) => (e.target.style.borderColor = "rgba(245,166,35,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Nombre de tu negocio</label>
              <input
                style={inputStyle}
                placeholder="Ej: Barbería El Rincón"
                value={form.negocio}
                onChange={(e) => setForm({ ...form, negocio: e.target.value })}
                onFocus={(e) => (e.target.style.borderColor = "rgba(245,166,35,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Contanos sobre tu proyecto</label>
              <textarea
                style={{ ...inputStyle, height: 130, resize: "none" }}
                placeholder="¿Qué tipo de página necesitás? ¿Cuándo lo necesitás?"
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                required
                onFocus={(e) => (e.target.style.borderColor = "rgba(245,166,35,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", opacity: enviado ? 0.7 : 1 }}>
              {enviado ? "¡Mensaje enviado!" : "Enviar por WhatsApp"}
              <Send size={15} />
            </button>

            <p style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-body)" }}>
              Te respondemos en menos de 24 horas
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
