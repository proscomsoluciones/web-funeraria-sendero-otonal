"use client";

import React, { useState } from "react";

interface CasketModel {
  name: string;
  category: "clasica" | "memorial" | "honor";
  material: string;
  finishes: string;
  price: number;
  features: string[];
}

const CASKET_MODELS: CasketModel[] = [
  {
    name: "Modelo Clásico",
    category: "clasica",
    material: "Madera Nativa",
    finishes: "Barniz natural semi-brillo, herrajes oscuros",
    price: 960000,
    features: ["Interior de raso", "Capilla de luces básica", "Carroza de traslado"],
  },
  {
    name: "Modelo Estándar",
    category: "clasica",
    material: "Madera Nativa Seleccionada",
    finishes: "Barniz brillante, tallados lineales",
    price: 1290000,
    features: ["Herrajes dorados", "Interior de raso plisado", "Van de acompañamiento"],
  },
  {
    name: "Modelo Estándar II",
    category: "clasica",
    material: "Madera Nativa Roble",
    finishes: "Barniz de alta resistencia, vetas marcadas",
    price: 1390000,
    features: ["Líneas clásicas sobrias", "Interior capitoné", "Van de acompañamiento"],
  },
  {
    name: "Modelo Memorial",
    category: "memorial",
    material: "Madera Noble",
    finishes: "Tono caoba/rojizo profundo, alto brillo",
    price: 1990000,
    features: ["Carroza panorámica President", "Adornos de bronce", "Cafetería básica"],
  },
  {
    name: "Modelo Memorial II",
    category: "memorial",
    material: "Madera Noble de Roble",
    finishes: "Tono miel cálido, tallado artesanal en bordes",
    price: 2190000,
    features: ["Capilla ardiente con cirios", "Van de apoyo familiar", "Arreglo floral superior"],
  },
  {
    name: "Tradición Familiar",
    category: "memorial",
    material: "Cofre de Madera Noble Presidencial",
    finishes: "Barniz espejo, herrajes dorados continuos",
    price: 2690000,
    features: ["Carroza de gala President", "Interior de seda drapeada", "Atención preferencial"],
  },
  {
    name: "Modelo Oregón",
    category: "honor",
    material: "Pino Oregón Importado",
    finishes: "Acabado natural mate sedoso, vetas catedral",
    price: 2890000,
    features: ["Estructura reforzada", "Terminaciones finas a mano", "Servicios de cafetería completos"],
  },
  {
    name: "Modelo Oregón II",
    category: "honor",
    material: "Pino Oregón Presidencial",
    finishes: "Tono ocre brillante, molduras de relieve alto",
    price: 2990000,
    features: ["Cofre de dos tapas", "Herrajes de bronce pulido", "Doctor para certificación"],
  },
  {
    name: "Modelo Noble",
    category: "honor",
    material: "Maderas Finas Exclusivas",
    finishes: "Brillo espejo piano, interior de terciopelo",
    price: 3190000,
    features: ["Diseño señorial de gala", "Carroza panorámica President", "Servicio integral Premium"],
  },
  {
    name: "Modelo Otoñal",
    category: "honor",
    material: "Madera Noble Premium Sendero",
    finishes: "Acabado caoba real, tallado artístico exclusivo",
    price: 3290000,
    features: ["Máxima distinción", "Cofre presidencial doble tapa", "Gestión integral personalizada"],
  },
];

export default function Caskets() {
  const [filter, setFilter] = useState<"todas" | "clasica" | "memorial" | "honor">("todas");

  const filteredCaskets = CASKET_MODELS.filter(
    (c) => filter === "todas" || c.category === filter
  );

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(val);
  };

  const getWhatsAppLink = (name: string) => {
    const text = `Hola Sendero Otoñal. Estoy viendo su catálogo de Urnas y me gustaría cotizar detalles sobre el "${name}".`;
    return `https://wa.me/56978911807?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="urnas" className="bg-brand-linen py-16 border-t border-brand-gold/15">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">Galería de Urnas</span>
          <h2 className="font-serif text-2xl sm:text-4xl text-brand-olivedark font-semibold mt-1">
            Nuestras Urnas
          </h2>
          <p className="text-sm text-gray-500 font-light max-w-lg mx-auto mt-2">
            Maderas nativas y nobles seleccionadas con acabados finos y herrajes de alta calidad para un homenaje digno.
          </p>
        </div>

        {/* Botones de Filtro */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 relative z-10">
          {[
            { id: "todas", label: "Todas" },
            { id: "clasica", label: "Línea Clásica" },
            { id: "memorial", label: "Línea Memorial" },
            { id: "honor", label: "Línea de Honor" },
          ].map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === btn.id
                  ? "bg-brand-olive text-white shadow-sm font-bold"
                  : "bg-white text-brand-olivedark border border-brand-gold/20 hover:bg-brand-gold/10"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grid de Urnas */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCaskets.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-2xl border border-brand-gold/15 p-5 flex flex-col justify-between hover:shadow-xl hover:border-brand-gold/40 hover:-translate-y-1.5 transition-all duration-300 relative group"
            >
              <div>
                <span className="text-[9px] font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded uppercase tracking-wider block w-max mb-3">
                  {c.category === "clasica"
                    ? "Línea Clásica"
                    : c.category === "memorial"
                    ? "Línea Memorial"
                    : "Línea de Honor"}
                </span>

                <h3 className="font-serif text-base md:text-lg text-brand-olivedark font-bold mb-1 group-hover:text-brand-olive transition-colors">
                  {c.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 font-light mb-1">
                  <strong>Madera:</strong> {c.material}
                </p>
                <p className="text-xs md:text-sm text-gray-500 font-light mb-4">
                  <strong>Acabados:</strong> {c.finishes}
                </p>

                <div className="space-y-1.5 border-t border-gray-100 pt-3">
                  {c.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <span className="text-brand-gold">✔</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-50 flex items-center justify-between">
                <span className="text-base font-bold text-brand-olive font-mono">
                  {formatCurrency(c.price)}
                </span>
                <a
                  href={getWhatsAppLink(c.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-brand-linen hover:bg-brand-gold hover:text-white text-brand-olivedark px-3.5 py-2 rounded-lg font-semibold transition-all border border-brand-gold/30"
                >
                  Cotizar Urna
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
