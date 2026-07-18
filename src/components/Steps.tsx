"use client";

import React from "react";

export default function Steps() {
  return (
    <section id="urgencia" className="max-w-5xl mx-auto px-4 py-12 -mt-8 relative z-20">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-brand-gold/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-brand-olive/10 flex items-center justify-center text-brand-olive">
            <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
          </div>
          <div>
            <h2 className="font-serif text-xl sm:text-2xl text-brand-olivedark font-semibold">
              ¿Qué hacer ante un fallecimiento?
            </h2>
            <p className="text-xs text-gray-500 font-light mt-0.5">
              Una guía clara y directa paso a paso en momentos difíciles.
            </p>
          </div>
        </div>

        {/* Pasos Interactivos */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-brand-linen/40 border border-brand-gold/15 relative hover:-translate-y-1.5 hover:shadow-lg hover:border-brand-gold/40 transition-all duration-300">
            <span className="absolute top-4 right-4 text-sm font-bold font-mono text-brand-gold bg-brand-gold/10 w-7 h-7 rounded-full flex items-center justify-center">
              1
            </span>
            <h3 className="font-semibold text-base text-brand-olivedark mb-2">Obtener Certificado de Defunción</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              Debe ser emitido por el médico tratante o el de turno. Si el deceso ocurre en un recinto hospitalario, la
              misma institución lo gestiona para que lo retires.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-brand-linen/40 border border-brand-gold/15 relative hover:-translate-y-1.5 hover:shadow-lg hover:border-brand-gold/40 transition-all duration-300">
            <span className="absolute top-4 right-4 text-sm font-bold font-mono text-brand-gold bg-brand-gold/10 w-7 h-7 rounded-full flex items-center justify-center">
              2
            </span>
            <h3 className="font-semibold text-base text-brand-olivedark mb-2">Contactar a Sendero Otoñal</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              Llámanos de inmediato a los teléfonos del catálogo. Nosotros realizaremos el traslado de forma segura y
              respetuosa, preparando la capilla ardiente a tu elección.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-brand-linen/40 border border-brand-gold/15 relative hover:-translate-y-1.5 hover:shadow-lg hover:border-brand-gold/40 transition-all duration-300">
            <span className="absolute top-4 right-4 text-sm font-bold font-mono text-brand-gold bg-brand-gold/10 w-7 h-7 rounded-full flex items-center justify-center">
              3
            </span>
            <h3 className="font-semibold text-base text-brand-olivedark mb-2">Inscripción y Trámites Legales</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              Asumimos la inscripción de defunción en el Registro Civil de Chile y gestionamos el pase de sepultación o
              cremación. No tienes que preocuparte de la burocracia.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-olivedark/90 font-light text-center sm:text-left">
            <strong>¿Tienes dudas legales sobre pensiones o cuota mortuoria?</strong> Utiliza nuestro Asistente Virtual para respuestas inmediatas.
          </p>
          <a
            href="#consejero-ia"
            className="text-sm bg-brand-olive text-white px-4 py-2.5 rounded-lg font-medium hover:bg-brand-olivedark transition-colors whitespace-nowrap"
          >
            Consultar Asistente Virtual
          </a>
        </div>
      </div>
    </section>
  );
}
