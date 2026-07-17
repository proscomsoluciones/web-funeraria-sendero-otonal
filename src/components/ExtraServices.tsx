"use client";

import React from "react";

interface ExtraService {
  title: string;
  desc: string;
  features: string[];
  icon: string;
}

const EXTRA_SERVICES: ExtraService[] = [
  {
    title: "Cortinajes y Capillas Ardientes",
    desc: "Hermosos decorados de tela plisada y cirios ornamentales para ambientar el lugar de velación.",
    features: [
      "Disponible en tonos blanco, negro y dorado",
      "Cirios y candelabros de alta distinción",
      "Crucifijo de bronce e instalación a domicilio o templos",
    ],
    icon: "🕯️",
  },
  {
    title: "Médico para Certificación",
    desc: "Servicio profesional médico para constatar el deceso y emitir el Certificado de Defunción.",
    features: [
      "Visita médica de urgencia a domicilio",
      "Emisión de documento oficial para trámites",
      "Asesoramiento técnico inmediato",
    ],
    icon: "🩺",
  },
  {
    title: "Arreglos Florales Premium",
    desc: "Flores naturales seleccionadas para rendir homenaje y dar calidez al espacio de despedida.",
    features: [
      "Coronas de flores grandes y pedestales",
      "Cubre urnas de rosas importadas",
      "Flores frescas y diseños personalizados",
    ],
    icon: "💐",
  },
  {
    title: "Servicio de Cafetería",
    desc: "Acompañamiento de cafetería completo para los asistentes durante las horas de velatorio.",
    features: [
      "Termos de café caliente, té y variedad de infusiones",
      "Galletería fina y vajilla necesaria",
      "Reposición constante para mayor comodidad de la familia",
    ],
    icon: "☕",
  },
];

export default function ExtraServices() {
  return (
    <section id="servicios-adicionales" className="bg-white py-16 border-t border-brand-gold/15">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
            Personalización y Apoyo
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-brand-olivedark font-semibold mt-1">
            Servicios Adicionales Disponibles
          </h2>
          <p className="text-sm text-gray-500 font-light max-w-lg mx-auto mt-2">
            Brindamos soluciones complementarias para personalizar la ceremonia y dar mayor confort a sus familiares y acompañantes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXTRA_SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-brand-linen/40 p-6 rounded-2xl border border-brand-gold/10 flex flex-col justify-between hover:shadow-lg hover:border-brand-gold/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-serif text-base text-brand-olivedark font-bold mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light mb-4">
                  {s.desc}
                </p>
              </div>

              <div className="space-y-2 border-t border-brand-gold/10 pt-4">
                {s.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[10px] text-gray-500 font-light leading-snug">
                    <span className="text-brand-gold">•</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
