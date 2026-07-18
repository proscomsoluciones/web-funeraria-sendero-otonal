"use client";

import React, { useState, useEffect } from "react";

interface CasketModel {
  name: string;
  category: string;
  wood_type: string;
  finish: string;
  price: number;
  features: string[];
  image_path?: string;
}

export default function Caskets() {
  const [caskets, setCaskets] = useState<CasketModel[]>([]);
  const [filter, setFilter] = useState<"todas" | "clasica" | "memorial" | "honor">("todas");
  const [apiHost, setApiHost] = useState("http://localhost:8000");

  useEffect(() => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
    // Extraer el host para cargar imágenes
    try {
      const urlObj = new URL(apiBaseUrl);
      setApiHost(urlObj.origin);
    } catch (e) {
      // Usar fallback
    }

    fetch(`${apiBaseUrl}/urns`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const parsed = data.map((u: any) => ({
            name: u.name,
            category: u.category,
            wood_type: u.wood_type || "",
            finish: u.finish || "",
            price: Number(u.price),
            features: typeof u.features === "string" ? JSON.parse(u.features) : (u.features || []),
            image_path: u.image_path || undefined
          }));
          setCaskets(parsed);
        }
      })
      .catch((err) => console.warn("Error cargando urnas desde API, usando local fallback:", err));
  }, []);

  const filteredCaskets = caskets.filter((c) => {
    if (filter === "todas") return true;
    const cat = c.category.toLowerCase();
    if (filter === "clasica") return cat.includes("clásica") || cat.includes("clasica");
    if (filter === "memorial") return cat.includes("memorial");
    if (filter === "honor") return cat.includes("honor");
    return true;
  });

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
          {filteredCaskets.map((c, index) => {
            const hasImage = !!c.image_path;
            const imageUrl = hasImage ? `${apiHost}/storage/${c.image_path}` : null;

            return (
              <div
                key={c.name + index}
                className="bg-white rounded-2xl border border-brand-gold/15 p-5 flex flex-col justify-between hover:shadow-xl hover:border-brand-gold/40 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
              >
                <div>
                  <span className="text-[9px] font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded uppercase tracking-wider block w-max mb-3">
                    {c.category}
                  </span>

                  {imageUrl && (
                    <div className="w-full h-40 bg-gray-50 rounded-xl overflow-hidden mb-4 border border-brand-gold/5 flex items-center justify-center">
                      <img
                        src={imageUrl}
                        alt={c.name}
                        width={400}
                        height={250}
                        loading="lazy"
                        decoding="async"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <h3 className="font-serif text-base md:text-lg text-brand-olivedark font-bold mb-1 group-hover:text-brand-olive transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 font-light mb-1">
                    <strong>Madera:</strong> {c.wood_type}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 font-light mb-4">
                    <strong>Acabados:</strong> {c.finish}
                  </p>

                  <div className="space-y-1.5 border-t border-gray-100 pt-3">
                    {Array.isArray(c.features) &&
                      c.features.map((feat, i) => (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
