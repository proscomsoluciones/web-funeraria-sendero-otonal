"use client";

import React, { useState, useEffect } from "react";

interface Plan {
  id?: number;
  badge: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  button_text: string;
}

export default function Catalog() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
    fetch(`${apiBaseUrl}/plans`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Normalizar features por si vinieran como string JSON en crudo en motores antiguos
          const parsed = data.map((p: any) => ({
            ...p,
            features: typeof p.features === "string" ? JSON.parse(p.features) : p.features
          }));
          setPlans(parsed);
        }
      })
      .catch((err) => console.warn("Error cargando planes desde API, usando local fallback:", err));
  }, []);

  const formatCurrency = (val: number) => {
    if (val === 0) return "Financiamiento";
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(val);
  };

  const getWhatsAppLink = (planName: string, price: number, buttonText: string) => {
    let text = "";
    if (price === 0) {
      text = `Hola Funeraria Sendero Otoñal, deseo más información sobre los Planes de Previsión Anticipada.`;
    } else {
      text = `Hola Funeraria Sendero Otoñal, me gustaría consultar más detalles sobre el ${planName} de ${formatCurrency(price)}.`;
    }
    return `https://wa.me/56978911807?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="planes" className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">Catálogo de Servicios</span>
        <h2 className="font-serif text-2xl sm:text-4xl text-brand-olivedark font-semibold mt-1">
          Opciones Diseñadas con Dignidad
        </h2>
        <p className="text-sm text-gray-500 font-light max-w-lg mx-auto mt-2">
          Ofrecemos planes adaptados a cada necesidad familiar, resguardando siempre la máxima calidad, sobriedad y transparencia.
        </p>
      </div>

      {/* Contenedor con scroll táctil optimizado para móviles */}
      <div className="flex md:hidden items-center justify-center gap-2 text-xs text-brand-olive bg-brand-linen border border-brand-gold/20 px-4 py-2.5 rounded-full w-max mx-auto mb-6 animate-pulse font-medium">
        <span>← Desliza hacia los lados para ver más planes →</span>
      </div>

      <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible no-scrollbar">
        {plans.map((p, idx) => {
          const isPrevision = p.price === 0;
          return (
            <div
              key={p.name + idx}
              className={`min-w-[78vw] sm:min-w-[45vw] md:min-w-0 snap-center bg-white rounded-2xl border p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative ${
                isPrevision
                  ? "border-brand-olive/30 bg-gradient-to-b from-white to-brand-linen hover:border-brand-olive/60"
                  : "border-brand-gold/15 hover:border-brand-gold/40"
              }`}
            >
              {isPrevision && (
                <span className="absolute top-4 right-4 bg-brand-olive text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Tranquilidad futura
                </span>
              )}
              <div>
                <span className="text-[10px] font-bold text-brand-olive bg-brand-olive/10 px-3 py-1 rounded-full uppercase tracking-wider block w-max mb-4">
                  {p.badge}
                </span>
                <h3 className="font-serif text-lg text-brand-olivedark font-bold mb-1">{p.name}</h3>
                <p className="text-xs text-gray-500 font-light mb-4">{p.description}</p>
                <p className="text-xl font-bold text-brand-olive font-mono mb-4">
                  {isPrevision ? "Financiamiento Flexible" : formatCurrency(p.price)}
                </p>

                <div className="space-y-2.5 border-t border-gray-100 pt-4 text-xs text-gray-600">
                  {Array.isArray(p.features) &&
                    p.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <span className="text-brand-gold">✔</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100">
                <a
                  href={getWhatsAppLink(p.name, p.price, p.button_text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center text-xs py-2.5 rounded-lg font-medium transition-all block ${
                    isPrevision
                      ? "bg-brand-olive text-white hover:bg-brand-olivedark"
                      : "bg-brand-linen border border-brand-gold text-brand-olivedark hover:bg-brand-gold hover:text-white"
                  }`}
                >
                  {p.button_text}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
