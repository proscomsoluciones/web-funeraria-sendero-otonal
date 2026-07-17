"use client";

import React, { useState } from "react";

interface BaseService {
  name: string;
  price: number;
  desc: string;
}

const BASE_SERVICES: BaseService[] = [
  { name: "Servicio Clásico", price: 960000, desc: "Urna esencial nativa y acompañamiento" },
  { name: "Servicio Estándar", price: 1290000, desc: "Urna tallada y van de acompañamiento" },
  { name: "Servicio Estándar II", price: 1390000, desc: "Urna barnizada y van de acompañamiento" },
  { name: "Servicio Memorial", price: 1990000, desc: "Urna premium noble y carroza President" },
  { name: "Servicio Memorial II", price: 2190000, desc: "Urna premium tallada de madera noble" },
  { name: "Tradición Familiar", price: 2690000, desc: "Urna presidencial exclusiva y carroza President" },
  { name: "Oregon", price: 2890000, desc: "Urna de madera noble tipo Oregon importada" },
  { name: "Oregon II", price: 2990000, desc: "Urna presidencial Oregon vetas seleccionadas" },
  { name: "Noble", price: 3190000, desc: "Urna de lujo maderas finas y acabados de honor" },
  { name: "Otoñal", price: 3290000, desc: "Urna de alta gama Sendero Otoñal con copón especial" },
];

export default function Calculator() {
  const [selectedServiceIdx, setSelectedServiceIdx] = useState<number>(1); // Default to Servicio Estándar
  const [docCert, setDocCert] = useState<boolean>(false);
  const [flowerArrangement, setFlowerArrangement] = useState<boolean>(false);
  const [coffeeService, setCoffeeService] = useState<boolean>(false);
  const [extraVan, setExtraVan] = useState<boolean>(false);

  const selectedService = BASE_SERVICES[selectedServiceIdx];

  const total =
    selectedService.price +
    (docCert ? 80000 : 0) +
    (flowerArrangement ? 65000 : 0) +
    (coffeeService ? 150000 : 0) +
    (extraVan ? 120000 : 0);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(val);
  };

  const sendBudgetToWhatsApp = () => {
    const text = `Hola Funeraria Sendero Otoñal. He realizado una cotización personalizada en su sitio web:
- Plan Base: ${selectedService.name} (${formatCurrency(selectedService.price)})
- Servicios Adicionales: ${[
      docCert ? "Doctor para Certificación ($80.000)" : null,
      flowerArrangement ? "Arreglo Floral adicional ($65.000)" : null,
      coffeeService ? "Servicio de Cafetería ($150.000)" : null,
      extraVan ? "Van de Acompañamiento adicional ($120.000)" : null,
    ]
      .filter(Boolean)
      .join(", ") || "Ninguno"}
------------------------------------
Total Estimado: ${formatCurrency(total)}

Me gustaría coordinar una asesoría personalizada.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/56978911807?text=${encodedText}`, "_blank");
  };

  return (
    <section id="cotizador" className="bg-white py-12 border-y border-brand-gold/15">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">Simulación Sin Compromiso</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-olivedark font-semibold">
            Configura un Presupuesto Respetuoso
          </h2>
          <p className="text-xs text-gray-500 font-light mt-1">
            Arma el servicio que consideres ideal con los valores oficiales de nuestro catálogo.
          </p>
        </div>

        {/* Panel de Cotización Dinámico */}
        <div className="grid md:grid-cols-12 gap-8 items-start bg-brand-linen/40 p-6 rounded-2xl border border-brand-gold/10">
          {/* Opciones (7 columnas) */}
          <div className="md:col-span-7 space-y-6">
            {/* 1. Selección de Plan Base del Catálogo */}
            <div>
              <label className="block text-xs md:text-sm font-bold text-brand-olivedark uppercase tracking-wider mb-2">
                1. Selección de Urna y Servicio Base
              </label>
              <select
                value={selectedServiceIdx}
                onChange={(e) => setSelectedServiceIdx(Number(e.target.value))}
                className="w-full p-3 rounded-xl border border-brand-gold/20 bg-white text-sm md:text-base text-brand-charcoal focus:outline-none focus:border-brand-olive cursor-pointer"
              >
                {BASE_SERVICES.map((srv, idx) => (
                  <option key={srv.name} value={idx}>
                    {srv.name} — {formatCurrency(srv.price)}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Servicios Adicionales */}
            <div>
              <label className="block text-xs md:text-sm font-bold text-brand-olivedark uppercase tracking-wider mb-2">
                2. Servicios Adicionales (Opcionales)
              </label>
              <div className="space-y-2.5">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-brand-gold/10 text-xs md:text-sm text-gray-700 cursor-pointer hover:bg-brand-linen/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={docCert}
                    onChange={(e) => setDocCert(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-brand-olive focus:ring-brand-olive cursor-pointer"
                  />
                  <span>Médico para Certificación de Defunción (+ {formatCurrency(80000)})</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-brand-gold/10 text-xs md:text-sm text-gray-700 cursor-pointer hover:bg-brand-linen/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={flowerArrangement}
                    onChange={(e) => setFlowerArrangement(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-brand-olive focus:ring-brand-olive cursor-pointer"
                  />
                  <span>Arreglo Floral de Rosas Naturales Selección (+ {formatCurrency(65000)})</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-brand-gold/10 text-xs md:text-sm text-gray-700 cursor-pointer hover:bg-brand-linen/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={coffeeService}
                    onChange={(e) => setCoffeeService(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-brand-olive focus:ring-brand-olive cursor-pointer"
                  />
                  <span>Servicio de Cafetería Premium para el Velatorio (+ {formatCurrency(150000)})</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-brand-gold/10 text-xs md:text-sm text-gray-700 cursor-pointer hover:bg-brand-linen/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={extraVan}
                    onChange={(e) => setExtraVan(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-brand-olive focus:ring-brand-olive cursor-pointer"
                  />
                  <span>Furgón / Van de Acompañamiento Familiar adicional (+ {formatCurrency(120000)})</span>
                </label>
              </div>
            </div>
          </div>

          {/* Resumen en vivo (5 columnas) */}
          <div className="md:col-span-5 bg-white p-6 rounded-xl border border-brand-gold/20 shadow-sm space-y-4">
            <h3 className="font-serif text-lg md:text-xl text-brand-olivedark font-semibold border-b border-gray-100 pb-2">
              Tu Estimación
            </h3>

            <div className="space-y-3 text-xs md:text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Servicio Base:</span>
                <span className="font-mono text-brand-charcoal font-semibold">{formatCurrency(selectedService.price)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Adicionales:</span>
                <span className="font-mono text-brand-charcoal">
                  {formatCurrency(
                    (docCert ? 80000 : 0) +
                      (flowerArrangement ? 65000 : 0) +
                      (coffeeService ? 150000 : 0) +
                      (extraVan ? 120000 : 0)
                  )}
                </span>
              </div>

              <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between items-baseline">
                <span className="text-sm md:text-base font-bold text-brand-olivedark">Total Estimado:</span>
                <span className="font-serif text-lg md:text-xl font-bold text-brand-olive font-mono">{formatCurrency(total)}</span>
              </div>
            </div>

            <div className="p-3 bg-brand-linen rounded-lg text-xs text-gray-500 leading-relaxed font-light">
              *Este valor es referencial y se puede rebajar de forma directa del beneficio de la <strong>Cuota Mortuoria</strong> de
              AFP o IPS en Chile (15 UF). Nosotros hacemos la gestión legal.
            </div>

            <button
              onClick={sendBudgetToWhatsApp}
              type="button"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-4 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
              </svg>
              <span>Enviar Cotización a WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
