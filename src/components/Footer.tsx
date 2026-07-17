"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brand-olivedark text-brand-linen py-12 px-6 border-t border-brand-gold/20 mt-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Funeraria Sendero Otoñal"
              className="h-16 md:h-20 w-auto object-contain filter brightness-0 invert"
            />
          </div>
          <p className="text-xs opacity-80 leading-relaxed font-light">
            Comprometidos con entregar un servicio humano, respetuoso y de alta dignidad en el Valle del Aconcagua y
            toda la Región de Valparaíso y Metropolitana en Chile.
          </p>
          <div className="text-xs space-y-1 font-mono text-brand-goldlight">
            <p>Fono Emergencia: +569 7891 1807</p>
            <p>Fono Apoyo: +569 3707 8351</p>
          </div>
        </div>

        {/* Accesos Rápidos */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-semibold text-brand-gold">Navegación de Apoyo</h4>
          <ul className="text-xs space-y-2 font-light opacity-90">
            <li>
              <a href="#urgencia" className="hover:text-brand-gold transition-colors">
                • Pasos ante un deceso
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-brand-gold transition-colors">
                • Quiénes Somos
              </a>
            </li>
            <li>
              <a href="#planes" className="hover:text-brand-gold transition-colors">
                • Catálogo de Servicios
              </a>
            </li>
            <li>
              <a href="#cotizador" className="hover:text-brand-gold transition-colors">
                • Cotizador Transparente
              </a>
            </li>
            <li>
              <a href="#memorial" className="hover:text-brand-gold transition-colors">
                • Encender Vela Virtual
              </a>
            </li>
            <li>
              <a href="#consejero-ia" className="hover:text-brand-gold transition-colors">
                • Consultas de Cuota Mortuoria (IA)
              </a>
            </li>
          </ul>
        </div>

        {/* Red de Oficinas y Cobertura */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-semibold text-brand-gold">Cobertura y Atención</h4>
          <p className="text-xs opacity-85 leading-relaxed font-light">
            Atención continua a clínicas, hospitales, residencias y domicilios particulares las 24 horas del día.
          </p>
          <div className="flex gap-2.5 items-center text-xs text-brand-goldlight">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span>Valle del Aconcagua, Los Andes, San Felipe, Santiago y Regiones.</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-gold/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] opacity-75 font-light">
        <p>© 2026 Funeraria Sendero Otoñal. Todos los derechos reservados.</p>
        <p className="mt-2 sm:mt-0">
          Sitio desarrollado con dedicación por{" "}
          <a
            href="https://proscom.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-gold underline transition-colors"
          >
            proscom.cl
          </a>
        </p>
      </div>

      {/* Botón flotante permanente de WhatsApp */}
      <a
        href="https://wa.me/56978911807?text=Hola%20Funeraria%20Sendero%20Oto%C3%B1al,%20necesito%20asistencia%20e%20informaci%C3%B3n%20de%20inmediato."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-[#20ba5a] transition-all hover:scale-110 active:scale-95 duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Efecto de onda pulsante decorativa */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none"></span>
        <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </a>
    </footer>
  );
}
