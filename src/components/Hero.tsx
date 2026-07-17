"use client";

import React, { useState, useEffect } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=40",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=40",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=40",
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-brand-olivedark text-brand-linen py-20 px-4 overflow-hidden border-b border-brand-gold/20 min-h-[520px] flex items-center justify-center">
      {/* Carrusel de imágenes atmosféricas de fondo (Cross-Fade ultra suave) */}
      <div className="absolute inset-0 z-0">
        {IMAGES.map((img, idx) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${img}')`,
              opacity: activeIdx === idx ? 1 : 0,
            }}
          />
        ))}
        {/* Capa protectora de color de la marca con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-olive/85 via-brand-olivedark/90 to-brand-olivedark"></div>
        {/* Textura orgánica muy fina */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#faf8f5_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <span className="text-brand-goldlight text-xs tracking-widest uppercase font-semibold mb-3 bg-white/10 px-3.5 py-1 rounded-full backdrop-blur-sm">
          Acompañamiento Profesional las 24 horas
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light leading-tight mb-6 max-w-3xl">
          La despedida más digna <br />
          <span className="italic text-brand-gold font-light">para quien siempre recordarás</span>
        </h1>

        <p className="text-brand-linen/85 text-sm sm:text-base font-light max-w-xl leading-relaxed mb-8">
          En momentos donde las palabras no bastan, asumimos con absoluta delicadeza la gestión de todos los detalles y
          trámites legales. Te brindamos paz, transparencia y el amparo que tu familia merece.
        </p>

        {/* Acciones Rápidas del Hero */}
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+56978911807"
            className="flex-1 bg-white hover:bg-brand-linen text-brand-olivedark py-3.5 px-6 rounded-xl font-medium shadow-md transition-all flex items-center justify-center gap-2.5"
          >
            <svg className="w-4 h-4 text-brand-olive animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.3 11.3 0 005.455 5.455l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>Llamada de Emergencia</span>
          </a>
          <a
            href="#planes"
            className="flex-1 border border-brand-gold/40 hover:border-brand-gold text-brand-linen py-3.5 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
          >
            <span>Ver Catálogo de Servicios</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>

        {/* Indicador de números de teléfono directa de la foto del catálogo */}
        <div className="mt-6 text-xs text-brand-goldlight/75 flex gap-4 font-mono">
          <span>Tel 1: +569 7891 1807</span>
          <span>•</span>
          <span>Tel 2: +569 3707 8351</span>
        </div>
      </div>
    </section>
  );
}
