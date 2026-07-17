"use client";

import React, { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Barra superior de urgencia permanente */}
      <div className="bg-[#1D1E0E] text-brand-linen py-2 px-4 text-xs lg:text-sm font-medium sticky top-0 z-50 shadow-sm border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Atención Inmediata 24/7 en Chile
          </span>
          <div className="flex items-center gap-4">
            <a
              href="tel:+56978911807"
              className="hover:text-brand-gold transition-colors flex items-center gap-1 font-semibold"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.9-.68l1.35-1.35a10.02 10.02 0 014.15 4.15l-1.35 1.35a1 1 0 00-.68.9l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <span>+569 7891 1807</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navegación Principal Sutil (Fondo oscuro para resaltar los colores nativos oro y blanco del logo) */}
      <nav className="bg-brand-olivedark/95 backdrop-blur-md border-b border-brand-gold/20 px-4 py-3.5 sticky top-[32px] z-40 text-brand-linen">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo otoñal oficial con sus colores nativos oro y blanco */}
          <a href="#" className="flex items-center gap-2 cursor-pointer shrink-0">
            <img
              src="/logo.png"
              alt="Funeraria Sendero Otoñal"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>

          {/* Menú Desktop (Simplificado a 1 sola línea, nombres cortos y claros, tamaño aumentado a text-base en LG) */}
          <div className="hidden md:flex items-center gap-6 text-sm lg:text-base font-medium whitespace-nowrap">
            <a href="#urgencia" className="text-brand-linen/95 hover:text-brand-gold transition-colors">
              Urgencias
            </a>
            <a href="#nosotros" className="text-brand-linen/95 hover:text-brand-gold transition-colors">
              Nosotros
            </a>
            <a href="#planes" className="text-brand-linen/95 hover:text-brand-gold transition-colors">
              Catálogo
            </a>
            <a href="#cotizador" className="text-brand-linen/95 hover:text-brand-gold transition-colors">
              Cotizador
            </a>
            <a href="#memorial" className="text-brand-linen/95 hover:text-brand-gold transition-colors">
              Obituario
            </a>
            <a
              href="#consejero-ia"
              className="bg-brand-olive/80 text-brand-linen border border-brand-gold/30 px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-brand-olive transition-colors font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></span>
              Asistente Virtual
            </a>
          </div>

          {/* Botones Derecha */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+56978911807"
              className="bg-brand-gold hover:bg-brand-goldlight text-brand-olivedark text-xs lg:text-sm font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.3 11.3 0 005.455 5.455l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span className="hidden sm:inline">Llamada de Asistencia</span>
              <span className="inline sm:hidden">Llamar</span>
            </a>

            {/* Hamburguesa Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brand-gold hover:bg-brand-gold/10 rounded-lg transition-colors"
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú Mobile Desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 border-t border-brand-gold/10 pt-3 pb-2 flex flex-col gap-2.5 text-sm font-medium">
            <a
              href="#urgencia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-brand-linen/90 hover:text-brand-gold transition-colors"
            >
              Urgencias
            </a>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-brand-linen/90 hover:text-brand-gold transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#planes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-brand-linen/90 hover:text-brand-gold transition-colors"
            >
              Catálogo
            </a>
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-brand-linen/90 hover:text-brand-gold transition-colors"
            >
              Cotizador
            </a>
            <a
              href="#memorial"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-brand-linen/90 hover:text-brand-gold transition-colors"
            >
              Obituario
            </a>
            <a
              href="#consejero-ia"
              onClick={() => setMobileMenuOpen(false)}
              className="mx-2 bg-brand-olive text-brand-linen border border-brand-gold/30 px-3.5 py-2 rounded-full flex items-center justify-center gap-1.5 hover:bg-brand-olive/80 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></span>
              Asistente Virtual
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
