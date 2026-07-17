"use client";

import React from "react";

export default function Catalog() {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(val);
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
        {/* Servicio Clásico */}
        <div className="min-w-[78vw] sm:min-w-[45vw] md:min-w-0 snap-center bg-white rounded-2xl border border-brand-gold/15 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-brand-gold/40 hover:-translate-y-2 transition-all duration-300 relative">
          <div>
            <span className="text-[10px] font-bold text-brand-olive bg-brand-olive/10 px-3 py-1 rounded-full uppercase tracking-wider block w-max mb-4">
              Tradicional Básico
            </span>
            <h3 className="font-serif text-lg text-brand-olivedark font-bold mb-1">Servicio Clásico</h3>
            <p className="text-xs text-gray-500 font-light mb-4">
              Una ceremonia digna y esencial con toda la cobertura logística necesaria.
            </p>
            <p className="text-xl font-bold text-brand-olive font-mono mb-4">{formatCurrency(960000)}</p>

            <div className="space-y-2.5 border-t border-gray-100 pt-4 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Urna de madera nativa estándar.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Carroza o Van de instalación.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Trámites de inscripción y pase de sepultación.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Ornamentación de luces, tarjetero y libro de condolencias.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Carroza de funeral y Van de acompañamiento.</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-50">
            <a
              href="https://wa.me/56978911807?text=Hola%20Funeraria%20Sendero%20Oto%C3%B1al,%20me%20gustar%C3%ADa%20consultar%20m%C3%A1s%20detalles%20sobre%20el%20Servicio%20Cl%C3%A1sico%20de%20$960.000."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-xs bg-brand-linen border border-brand-gold text-brand-olivedark py-2.5 rounded-lg font-medium hover:bg-brand-gold hover:text-white transition-all block"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>

        {/* Servicio Estándar */}
        <div className="min-w-[78vw] sm:min-w-[45vw] md:min-w-0 snap-center bg-white rounded-2xl border border-brand-gold/15 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-brand-gold/40 hover:-translate-y-2 transition-all duration-300 relative">
          <div>
            <span className="text-[10px] font-bold text-brand-olive bg-brand-olive/10 px-3 py-1 rounded-full uppercase tracking-wider block w-max mb-4">
              Más Solicitado
            </span>
            <h3 className="font-serif text-lg text-brand-olivedark font-bold mb-1">Servicio Estándar</h3>
            <p className="text-xs text-gray-500 font-light mb-4">
              Nuestra opción estándar recomendada con detalles mejorados en el cofre.
            </p>
            <p className="text-xl font-bold text-brand-olive font-mono mb-4">{formatCurrency(1290000)}</p>

            <div className="space-y-2.5 border-t border-gray-100 pt-4 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Urna de madera nativa de diseño superior.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Carroza o Van de instalación y traslado.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Trámites de inscripción y pase de sepultación.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Ornamentación de luces, tarjetero y libro de condolencias.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Carroza de funeral y Van de acompañamiento familiar.</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-50">
            <a
              href="https://wa.me/56978911807?text=Hola%20Funeraria%20Sendero%20Oto%C3%B1al,%20me%20gustar%C3%ADa%20consultar%20m%C3%A1s%20detalles%20sobre%20el%20Servicio%20Est%C3%A1ndar%20de%20$1.290.000."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-xs bg-brand-linen border border-brand-gold text-brand-olivedark py-2.5 rounded-lg font-medium hover:bg-brand-gold hover:text-white transition-all block"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>

        {/* Servicio Memorial */}
        <div className="min-w-[78vw] sm:min-w-[45vw] md:min-w-0 snap-center bg-white rounded-2xl border border-brand-gold/15 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-brand-gold/40 hover:-translate-y-2 transition-all duration-300 relative">
          <div>
            <span className="text-[10px] font-bold text-brand-gold bg-brand-gold/15 px-3 py-1 rounded-full uppercase tracking-wider block w-max mb-4">
              Calidad Premium
            </span>
            <h3 className="font-serif text-lg text-brand-olivedark font-bold mb-1">Servicio Memorial</h3>
            <p className="text-xs text-gray-500 font-light mb-4">
              Ceremonia premium con cofre presidencial barnizado y servicios complementarios.
            </p>
            <p className="text-xl font-bold text-brand-olive font-mono mb-4">{formatCurrency(1990000)}</p>

            <div className="space-y-2.5 border-t border-gray-100 pt-4 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Urna de madera noble finamente terminada.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Carroza panorámica President.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Ornamentación de luces o cirios completos y tarjetero de madera.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Arreglo floral incluido y libro de condolencias.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Van de acompañamiento para 10 personas.</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-50">
            <a
              href="https://wa.me/56978911807?text=Hola%20Funeraria%20Sendero%20Oto%C3%B1al,%20me%20gustar%C3%ADa%20consultar%20m%C3%A1s%20detalles%20sobre%20el%20Servicio%20Memorial%20de%20$1.990.000."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-xs bg-brand-linen border border-brand-gold text-brand-olivedark py-2.5 rounded-lg font-medium hover:bg-brand-gold hover:text-white transition-all block"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>

        {/* Plan Previsión Familiar */}
        <div className="min-w-[78vw] sm:min-w-[45vw] md:min-w-0 snap-center bg-white rounded-2xl border border-brand-olive/30 p-6 flex flex-col justify-between shadow-sm bg-gradient-to-b from-white to-brand-linen hover:shadow-xl hover:border-brand-olive/60 hover:-translate-y-2 transition-all duration-300 relative">
          <span className="absolute top-4 right-4 bg-brand-olive text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
            Tranquilidad futura
          </span>
          <div>
            <span className="text-[10px] font-bold text-brand-olive bg-brand-olive/10 px-3 py-1 rounded-full uppercase tracking-wider block w-max mb-4">
              Previsión Familiar
            </span>
            <h3 className="font-serif text-lg text-brand-olivedark font-bold mb-1">Plan de Previsión</h3>
            <p className="text-xs text-gray-500 font-light mb-4">
              Asegura la tranquilidad contratando el servicio anticipadamente a valores congelados.
            </p>
            <p className="text-xs font-semibold text-brand-olive mb-4">Financiamiento flexible</p>

            <div className="space-y-2.5 border-t border-gray-100 pt-4 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Congela el costo del servicio a valores actuales para siempre.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Contratos transferibles a cualquier miembro familiar.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Opciones de pago flexibles en cuotas sin interés.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold">✔</span>
                <span>Asesoramiento privado y delicado a domicilio.</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100">
            <a
              href="https://wa.me/56978911807?text=Hola%20Funeraria%20Sendero%20Oto%C3%B1al,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20Planes%20de%20Previsi%C3%B3n%20Anticipada."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-xs bg-brand-olive text-white py-2.5 rounded-lg font-medium hover:bg-brand-olivedark transition-all block"
            >
              Consultar Planes Preventivos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
