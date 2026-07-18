"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  id?: number;
  author: string;
  service_detail: string;
  rating: number;
  text: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
    fetch(`${apiBaseUrl}/testimonials`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map((t: any) => ({
            id: t.id,
            author: t.author,
            service_detail: t.service_detail || "",
            rating: Number(t.rating || 5),
            text: t.text
          }));
          setTestimonials(formatted);
        }
      })
      .catch((err) => console.warn("Error cargando testimonios desde API, usando local fallback:", err));
  }, []);

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
          {testimonials.map((t, idx) => (
            <div
              key={t.author + idx}
              className="bg-white p-6 rounded-2xl border border-brand-gold/10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Estrellas */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-brand-gold text-sm">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-light italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-xs">
                <div>
                  <p className="font-semibold text-brand-olivedark">{t.author}</p>
                  <p className="text-[10px] text-gray-400 font-light">
                    {t.service_detail}
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
