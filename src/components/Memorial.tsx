"use client";

import React, { useState } from "react";

interface Condolence {
  id: number;
  name: string;
  time: string;
  message: string;
}

export default function Memorial() {
  const [condolences] = useState<Condolence[]>([
    {
      id: 1,
      name: "Familia Valenzuela Silva",
      time: "Hace 15 min",
      message: "Nuestras más sinceras condolencias por la partida de Don Alberto. Un gran hombre que siempre recordaremos con inmenso cariño.",
    },
    {
      id: 2,
      name: "María Inés Jara",
      time: "Hace 1 hora",
      message: "Acompañándolos en su dolor. Fuerza y paz para toda la familia en este momento tan difícil.",
    },
  ]);

  const [candleCount, setCandleCount] = useState(142);
  const [candleIgnited, setCandleIgnited] = useState(false);

  const handleIgniteCandle = () => {
    if (candleIgnited) return;
    setCandleCount((prev) => prev + 1);
    setCandleIgnited(true);
  };

  const handleSendCondolenceWhatsApp = () => {
    const text = `Hola Funeraria Sendero Otoñal. Deseo enviar una condolencia para ser publicada en el obituario de Don Alberto Valenzuela Rojas:

De (Nombre/Familia): 
Mensaje: `;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/56978911807?text=${encodedText}`, "_blank");
  };

  return (
    <section id="memorial" className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">Espacio Memorial</span>
        <h2 className="font-serif text-2xl sm:text-3xl text-brand-olivedark font-semibold">
          Obituarios & Condolencias
        </h2>
        <p className="text-xs text-gray-500 font-light mt-1">
          Acompañemos a las familias con una palabra de apoyo o un tributo de luz de forma segura y moderada.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Obituario de Ejemplo Activo */}
        <div className="bg-white p-6 rounded-2xl border border-brand-gold/15 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-[10px] font-bold text-brand-olive bg-brand-olive/10 px-2 py-0.5 rounded uppercase">
                Servicio Hoy
              </span>
              <span className="text-xs text-gray-500 font-light">Valle del Aconcagua</span>
            </div>

            <div className="text-center py-4">
              <h3 className="font-serif text-xl sm:text-2xl text-brand-olivedark font-medium">
                Don Alberto Valenzuela Rojas
              </h3>
              <p className="text-xs text-brand-gold tracking-widest uppercase mt-1">1945 — 2026</p>
            </div>

            <div className="space-y-2 text-xs bg-brand-linen/50 p-4 rounded-xl border border-brand-gold/5 leading-relaxed font-light">
              <p>
                <strong>Velatorio:</strong> Parroquia Santa María de los Andes.
              </p>
              <p>
                <strong>Responsos:</strong> Sábado 18 de Julio a las 11:00 hrs.
              </p>
              <p>
                <strong>Destino:</strong> Cinerario Parque del Sendero.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs pt-4 border-t border-gray-50 mt-4">
            <button
              onClick={handleSendCondolenceWhatsApp}
              className="text-brand-olive hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              ✍ Enviar Condolencia (Vía WhatsApp para moderación)
            </button>
            <span className="text-gray-400 font-light">{condolences.length} Mensajes verificados</span>
          </div>
        </div>

        {/* Vela Virtual Interactiva */}
        <div className="bg-brand-olivedark text-brand-linen p-6 rounded-2xl flex flex-col justify-between items-center text-center shadow-md relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]"></div>

          <div className="relative z-10 space-y-1">
            <h3 className="font-serif text-lg text-brand-goldlight">Enciende una Vela en su Memoria</h3>
            <p className="text-[11px] opacity-80 max-w-xs font-light">
              Una pequeña luz virtual para manifestar que tu amor y respeto por el ser querido sigue encendido.
            </p>
          </div>

          {/* Representación de Vela Encendida */}
          <div className="my-6 relative flex flex-col items-center">
            {/* Llama */}
            <div
              className={`w-6 h-9 bg-gradient-to-t from-amber-500 via-orange-400 to-amber-200 rounded-full flame-animation blur-[0.5px] transition-all duration-500 ${
                candleIgnited ? "scale-125 filter drop-shadow-[0_0_16px_rgba(253,186,116,1)]" : "opacity-80"
              }`}
            ></div>
            {/* Mecha */}
            <div className="w-0.5 h-2.5 bg-brand-charcoal"></div>
            {/* Cuerpo Vela */}
            <div className="w-10 h-16 bg-gradient-to-r from-amber-100 to-amber-50 rounded-b-md shadow-sm border-t border-amber-200/50"></div>
          </div>

          <div className="relative z-10 w-full space-y-2">
            <p className="text-xs text-brand-goldlight/90 font-mono">{candleCount} velas encendidas hoy</p>
            <button
              onClick={handleIgniteCandle}
              disabled={candleIgnited}
              className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-colors shadow-sm cursor-pointer ${
                candleIgnited
                  ? "bg-brand-gold/20 text-brand-goldlight cursor-default"
                  : "bg-brand-gold hover:bg-brand-goldlight text-brand-olivedark"
              }`}
            >
              {candleIgnited ? "🕯️ Has encendido una vela" : "Enfocar y Encender una Vela"}
            </button>
          </div>
        </div>
      </div>

      {/* Historial de Condolencias */}
      <div className="mt-8 bg-white p-5 rounded-2xl border border-brand-gold/10">
        <h4 className="text-xs font-bold text-brand-olivedark uppercase tracking-wider mb-3">
          Últimas Palabras de Apoyo Compartidas (Verificadas)
        </h4>
        <div className="space-y-3 max-h-48 overflow-y-auto pr-2 no-scrollbar">
          {condolences.map((c) => (
            <div key={c.id} className="text-xs border-b border-gray-100 pb-2.5 font-light">
              <p className="text-brand-olivedark font-semibold">
                {c.name} <span className="text-[10px] text-gray-400 font-normal ml-2">{c.time}</span>
              </p>
              <p className="text-gray-600 italic">"{c.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
