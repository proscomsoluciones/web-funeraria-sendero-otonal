"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  sender: "ai" | "user";
  text: string;
}

export default function AiAdvisor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hola, mis más sinceras condolencias si estás pasando por una pérdida. Estoy aquí para guiarte de forma calmada en los trámites funerarios en Chile. Puedes preguntarme cosas como:\n\n• ¿Qué es y cómo cobro la cuota mortuoria en AFP o IPS?\n• ¿Cuáles son los pasos para inscribir un fallecimiento?\n• ¿Qué diferencia hay entre sepultación y cremación?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 1 || isTyping) {
      scrollToBottom();
    }
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      sender: "user",
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    const query = input.toLowerCase();
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      let reply = "";

      if (query.includes("cuota") || query.includes("mortuoria") || query.includes("afp") || query.includes("ips")) {
        reply =
          "La **Cuota Mortuoria** es un beneficio de la seguridad social en Chile que ayuda a cubrir los gastos funerarios de un afiliado fallecido. Asciende a un tope de **15 UF** (aproximadamente $570.000 CLP actuales). Si el fallecido pertenece a una AFP o al IPS (ex INP), el beneficio se cobra presentando la factura de la funeraria. En Funeraria Sendero Otoñal gestionamos y rebajamos este trámite directamente del costo del servicio para tu total tranquilidad.";
      } else if (
        query.includes("inscribir") ||
        query.includes("defuncion") ||
        query.includes("registro") ||
        query.includes("civil") ||
        query.includes("pasos") ||
        query.includes("tramite")
      ) {
        reply =
          "Para inscribir un fallecimiento en Chile se deben seguir estos pasos:\n\n1. **Certificado Médico de Defunción**: Emitido por el médico tratante.\n2. **Inscripción en el Registro Civil**: Debe realizarse dentro de las 24 horas siguientes al fallecimiento. Se requiere el certificado médico y la cédula de identidad del fallecido.\n3. **Pase de Sepultación o Cremación**: Lo otorga el Registro Civil tras la inscripción.\n\nNo te preocupes, en Sendero Otoñal nos encargamos de realizar la totalidad de estos trámites legales sin costo adicional.";
      } else if (query.includes("cremacion") || query.includes("sepultacion") || query.includes("diferencia")) {
        reply =
          "La **Sepultación** tradicional consiste en depositar la urna en una sepultura familiar o parque. La **Cremación** es el proceso de reducción mediante calor, tras el cual se entregan las cenizas en una ánfora. Ambos requieren trámites sanitarios y legales diferentes. Para la cremación, en Chile se exige una autorización notarial expresa de los familiares directos (o declaración en vida) y una autorización de la Seremi de Salud. Nosotros te guiamos paso a paso en la opción que elijan.";
      } else {
        reply =
          "Lamentamos profundamente el difícil momento que está viviendo. Como su Asesor de Orientación Legal de Sendero Otoñal, puedo asistirle con información sobre la legislación chilena (cuota mortuoria, pensiones de sobrevivencia, posesión efectiva básica y autorizaciones sanitarias). ¿Podría detallar su duda o hacerme una pregunta específica?";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: reply,
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section id="consejero-ia" className="bg-brand-linen py-12 border-t border-brand-gold/15">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
            Asesor Virtual de Contención
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-olivedark font-semibold">
            Consultas Legales y Trámites Sin Costo
          </h2>
          <p className="text-xs text-gray-500 font-light mt-1">
            Pregúntale de forma segura sobre la cuota mortuoria, inscripciones en Chile o contención.
          </p>
        </div>

        {/* Interfaz del Chat */}
        <div className="bg-white rounded-2xl border border-brand-gold/20 shadow-lg overflow-hidden flex flex-col h-[420px]">
          {/* Encabezado del Asistente */}
          <div className="bg-brand-olivedark text-brand-linen p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-white">Guía y Orientación Legal de Sendero Otoñal</p>
              <p className="text-[10px] opacity-85 font-light">
                Asistencia de Inteligencia Artificial empática y respetuosa
              </p>
            </div>
          </div>

          {/* Contenedor de Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar bg-[#FAF9F6] flex flex-col">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 max-w-[85%] text-xs ${m.sender === "user" ? "self-end" : "self-start"}`}
              >
                <div
                  className={`p-3 rounded-xl leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-brand-olive text-white rounded-tr-none font-medium"
                      : "bg-brand-olive/10 text-brand-olivedark rounded-tl-none font-light"
                  }`}
                >
                  {m.sender === "ai" && (
                    <p className="font-semibold text-[11px] text-brand-olive mb-1">Sendero Otoñal AI:</p>
                  )}
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 max-w-[85%] text-xs self-start">
                <div className="bg-brand-olive/10 text-brand-olivedark p-3 rounded-xl rounded-tl-none font-light flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-olive animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-olive animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-olive animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input de Mensaje */}
          <form onSubmit={handleSend} className="p-3 border-t border-gray-100 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta legal o de apoyo..."
              className="flex-1 px-4 py-2 text-xs rounded-xl border border-brand-gold/30 bg-brand-linen/30 focus:outline-none focus:border-brand-olive text-brand-charcoal"
            />
            <button
              type="submit"
              className="bg-brand-olive hover:bg-brand-olivedark text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Consultar</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
