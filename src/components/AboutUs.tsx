"use client";

import React from "react";

export default function AboutUs() {
  return (
    <section id="nosotros" className="bg-white py-16 border-t border-brand-gold/15">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda: Mensaje y Valores */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
              Quiénes Somos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-olivedark font-semibold leading-tight">
              Acompañamiento Humano <br />
              <span className="italic text-brand-olive font-light">con la dignidad que merece su ser querido</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-light">
              En Funeraria Sendero Otoñal entendemos que la despedida de un ser querido es uno de los momentos más delicados y significativos de la vida. Nos dedicamos a brindar un apoyo integral, asumiendo con absoluta responsabilidad y respeto cada detalle y trámite legal.
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-light">
              Nuestra misión es aliviar la carga de las familias en el Valle del Aconcagua y toda la Región de Valparaíso y Metropolitana, ofreciendo un servicio transparente, empático y de excelencia.
            </p>

            {/* Valores Clave */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex gap-2.5 items-start">
                <span className="text-brand-gold text-lg">✦</span>
                <div>
                  <h4 className="font-serif text-base font-semibold text-brand-olivedark">Empatía Real</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-light mt-0.5">Trato humano y contención cálida en todo momento.</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="text-brand-gold text-lg">✦</span>
                <div>
                  <h4 className="font-serif text-base font-semibold text-brand-olivedark">Transparencia</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-light mt-0.5">Precios claros sin sorpresas ni letra chica.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Insignias de confianza y Filosofía */}
          <div className="bg-brand-linen/60 rounded-3xl p-8 border border-brand-gold/10 space-y-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-serif text-xl text-brand-olivedark font-semibold">
              Nuestro Compromiso Familiar
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light italic">
              "Buscamos ser un sendero de paz en momentos de oscuridad, entregando la tranquilidad necesaria para que las familias solo se enfoquen en recordar con amor."
            </p>

            <div className="space-y-4 pt-4 border-t border-brand-gold/15">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-olive/10 flex items-center justify-center text-brand-olive shrink-0">
                  <span className="font-serif text-sm font-bold">24h</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-olivedark uppercase tracking-wider">Atención Inmediata</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-light">Disponibles día y noche a su llamado en Chile.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-olive/10 flex items-center justify-center text-brand-olive shrink-0">
                  <span className="font-serif text-sm font-bold">100%</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-olivedark uppercase tracking-wider">Gestión Legal Completa</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-light">Nos encargamos de todo ante el Registro Civil y Seremi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
