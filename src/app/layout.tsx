import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InstaWeb — Páginas que generan resultados",
  description: "Agencia de diseño web especializada en landing pages profesionales. Transformamos tu negocio con páginas que convierten visitas en clientes.",
  verification: {
    google: "osAIYA_3QVOLkLVUy9rPMijnoKhFBIWGKWl-uykfSQs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}