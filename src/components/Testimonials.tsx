"use client";

import React from "react";

interface Testimonial {
  id: number;
  name: string;
  relation: string;
  location: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Familia Tapia Silva",
    relation: "Servicio Estándar",
    location: "Los Andes",
    quote: "Agradecemos profundamente la empatía y delicadeza en todo momento. Se encargaron de todos los trámites legales y del Registro Civil con gran profesionalismo, dándonos la paz que necesitábamos en un momento tan difícil.",
  },
  {
    id: 2,
    name: "Lorena Valenzuela",
    relation: "Servicio Memorial",
    location: "San Felipe",
    quote: "La atención 24/7 es real y muy humana. La carroza President y la preparación de la capilla ardiente fueron impecables. El asesoramiento sobre la cuota mortuoria fue claro y transparente desde el primer minuto.",
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    relation: "Plan de Previsión",
    location: "Santiago",
    quote: "Contratamos el Plan de Previsión Familiar y la tranquilidad que le da a toda la familia no tiene precio. Todo el proceso fue transparente y con facilidades de pago excelentes. Muy recomendados.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-linen py-16 border-t border-brand-gold/15">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
            Testimonios de Gratitud
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-brand-olivedark font-semibold mt-1">
            Palabras de las Familias que Confían en Nosotros
          </h2>
          <p className="text-sm text-gray-500 font-light max-w-lg mx-auto mt-2">
            El respeto, la transparencia y el trato digno son la base de nuestro compromiso permanente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl border border-brand-gold/10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Estrellas */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-brand-gold text-sm">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-light italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-xs">
                <div>
                  <p className="font-semibold text-brand-olivedark">{t.name}</p>
                  <p className="text-[10px] text-gray-400 font-light">
                    {t.relation} • {t.location}
                  </p>
                </div>
                <span className="text-brand-goldlight text-lg">“</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
