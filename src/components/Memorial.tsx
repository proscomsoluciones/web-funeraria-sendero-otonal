"use client";

import React, { useState, useEffect } from "react";

interface Condolence {
  id: number;
  name: string;
  time: string;
  message: string;
}

interface Obituary {
  id: number;
  name: string;
  image_url?: string | null;
  birth_year: string;
  death_year: string;
  location: string;
  velatorio: string;
  responso: string;
  destino: string;
  candle_count: number;
  condolences: Condolence[];
}

export default function Memorial() {
  const [obituary, setObituary] = useState<Obituary | null>(null);
  const [candleCount, setCandleCount] = useState(0);
  const [candleIgnited, setCandleIgnited] = useState(false);

  // Estados del Formulario de Condolencias
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
    
    fetch(`${apiBaseUrl}/obituaries`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Tomar el primer obituario activo
          const activeObit = data[0];
          setObituary(activeObit);
          setCandleCount(Number(activeObit.candle_count || 0));
        }
      })
      .catch((err) => console.warn("Error cargando obituarios de API:", err));
  }, []);

  if (!obituary) return null;

  const handleIgniteCandle = () => {
    if (candleIgnited) return;

    // Actualizar localmente de inmediato
    setCandleCount((prev) => prev + 1);
    setCandleIgnited(true);

    // Enviar al servidor para que persista
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
    fetch(`${apiBaseUrl}/obituaries/${obituary.id}/ignite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && typeof data.candle_count === "number") {
          setCandleCount(data.candle_count);
        }
      })
      .catch((err) => console.warn("Error enviando encendido de vela al servidor:", err));
  };

  const handleSendCondolence = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSending(true);
    setSuccessMessage("");

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
    fetch(`${apiBaseUrl}/obituaries/${obituary.id}/condolences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage("Gracias. Tu condolencia ha sido recibida con respeto y será publicada una vez sea revisada por la familia.");
          setName("");
          setMessage("");
          setTimeout(() => {
            setShowForm(false);
            setSuccessMessage("");
          }, 5000);
        }
      })
      .catch((err) => console.warn("Error enviando condolencia:", err))
      .finally(() => {
        setIsSending(false);
      });
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
        {/* Obituario Activo */}
        <div className="bg-white p-6 rounded-2xl border border-brand-gold/15 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-[10px] font-bold text-brand-olive bg-brand-olive/10 px-2 py-0.5 rounded uppercase">
                Servicio Hoy
              </span>
              <span className="text-xs text-gray-500 font-light">{obituary.location || "Valle del Aconcagua"}</span>
            </div>

            <div className="text-center py-4 flex flex-col items-center">
               {obituary.image_url ? (
                <img
                  src={obituary.image_url}
                  alt={obituary.name}
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="w-24 h-24 rounded-full object-cover border-2 border-brand-gold/40 shadow-sm mb-3"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-brand-olivedark flex items-center justify-center border-2 border-brand-gold/40 shadow-sm mb-3">
                  <img
                    src="/logo.png"
                    alt="Sendero Otoñal"
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="w-14 h-14 object-contain"
                  />
                </div>
              )}
              <h3 className="font-serif text-xl sm:text-2xl text-brand-olivedark font-medium">
                {obituary.name}
              </h3>
              <p className="text-xs text-brand-gold tracking-widest uppercase mt-1">
                {obituary.birth_year} — {obituary.death_year}
              </p>
            </div>

            <div className="space-y-2 text-xs bg-brand-linen/50 p-4 rounded-xl border border-brand-gold/5 leading-relaxed font-light">
              {obituary.velatorio && (
                <p>
                  <strong>Velatorio:</strong> {obituary.velatorio}
                </p>
              )}
              {obituary.responso && (
                <p>
                  <strong>Responsos:</strong> {obituary.responso}
                </p>
              )}
              {obituary.destino && (
                <p>
                  <strong>Destino:</strong> {obituary.destino}
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 mt-4">
            {!showForm ? (
              <div className="flex justify-between items-center text-xs">
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="text-brand-olive hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  ✍ Dejar Mensaje de Condolencia
                </button>
                <span className="text-gray-400 font-light">
                  {(obituary.condolences || []).length} Mensajes verificados
                </span>
              </div>
            ) : (
              <form onSubmit={handleSendCondolence} className="space-y-3 mt-2">
                <h4 className="text-xs font-bold text-brand-olivedark uppercase tracking-wider">
                  Escribir Condolencia
                </h4>
                
                {successMessage ? (
                  <p className="text-xs text-brand-olive bg-brand-linen p-2.5 rounded-lg font-medium">
                    {successMessage}
                  </p>
                ) : (
                  <>
                    <div>
                      <input
                        type="text"
                        placeholder="Tu Nombre o Familia (Ej: Familia Silva Jara)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2.5 text-xs md:text-sm border border-brand-gold/20 rounded-xl focus:outline-none focus:border-brand-olive bg-white text-brand-charcoal"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Mensaje de apoyo..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={3}
                        className="w-full p-2.5 text-xs md:text-sm border border-brand-gold/20 rounded-xl focus:outline-none focus:border-brand-olive bg-white text-brand-charcoal resize-none"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="bg-brand-olive hover:bg-brand-olivedark text-white font-semibold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                      >
                        {isSending ? "Enviando..." : "Enviar Condolencia"}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowForm(false);
                          setSuccessMessage("");
                        }}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                      >
                        Cancelar
                      </button>
                    </div>
                  </>
                )}
              </form>
            )}
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
      {obituary.condolences && obituary.condolences.length > 0 && (
        <div className="mt-8 bg-white p-5 rounded-2xl border border-brand-gold/10">
          <h4 className="text-xs font-bold text-brand-olivedark uppercase tracking-wider mb-3">
            Últimas Palabras de Apoyo Compartidas (Verificadas)
          </h4>
          <div className="space-y-3 max-h-48 overflow-y-auto pr-2 no-scrollbar">
            {obituary.condolences.map((c, idx) => (
              <div key={c.id || idx} className="text-xs border-b border-gray-100 pb-2.5 font-light">
                <p className="text-brand-olivedark font-semibold">
                  {c.name} <span className="text-[10px] text-gray-400 font-normal ml-2">{c.time}</span>
                </p>
                <p className="text-gray-600 italic">"{c.message}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
