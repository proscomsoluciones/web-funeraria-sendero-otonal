"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  sender: "ai" | "user";
  text: string;
  isWhatsAppRedirect?: boolean;
  userQueryForWA?: string;
}

interface FAQEntry {
  keywords: string[];
  response: string;
}

export default function AiAdvisor() {
  const [faqs, setFaqs] = useState<FAQEntry[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hola, mis más sinceras condolencias si estás pasando por una pérdida. Estoy aquí para guiarte de forma calmada en los trámites funerarios en Chile. Puedes preguntarme cosas como:\n\n• ¿Cómo cobro la cuota mortuoria en AFP o IPS?\n• ¿Cuáles son los pasos para inscribir un fallecimiento?\n• ¿Qué precios tienen los servicios?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
    
    fetch(`${apiBaseUrl}/faqs`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const parsed = data.map((f: any) => ({
            keywords: typeof f.keywords === "string" ? JSON.parse(f.keywords) : (f.keywords || []),
            response: f.response
          }));
          setFaqs(parsed);
        }
      })
      .catch((err) => console.warn("Error cargando FAQs de la API:", err));
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length > 1 || isTyping) {
      setTimeout(scrollToBottom, 50);
    }
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const queryText = input.trim();
    const userMsg: Message = {
      id: Date.now(),
      sender: "user",
      text: queryText,
    };

    setMessages((prev) => [...prev, userMsg]);
    const queryLower = queryText.toLowerCase();
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      // Buscar coincidencia en las FAQs dinámicas cargadas del backend
      const matchedEntry = faqs.find((entry) =>
        entry.keywords.some((keyword) => queryLower.includes(keyword.toLowerCase()))
      );

      let reply = "";
      let isWhatsAppRedirect = false;

      if (matchedEntry) {
        reply = matchedEntry.response;
      } else {
        reply = "No he encontrado una respuesta exacta a tu consulta en mi base de datos de preguntas frecuentes. Para entregarte la información precisa de inmediato, te derivaré con un asesor de Sendero Otoñal por WhatsApp.";
        isWhatsAppRedirect = true;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: reply,
          isWhatsAppRedirect,
          userQueryForWA: queryText
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section id="consejero-ia" className="bg-brand-linen py-12 border-t border-brand-gold/15">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
            Asistente Virtual de Contención
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-olivedark font-semibold">
            Consultas Legales y Trámites Sin Costo
          </h2>
          <p className="text-xs md:text-sm text-gray-500 font-light mt-1">
            Pregúntale de forma segura sobre la cuota mortuoria, inscripciones en Chile o contención.
          </p>
        </div>

        {/* Interfaz del Chat */}
        <div className="bg-white rounded-2xl border border-brand-gold/20 shadow-lg overflow-hidden flex flex-col h-[450px]">
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
              <p className="text-xs md:text-sm font-bold text-white">Guía y Orientación Legal de Sendero Otoñal</p>
              <p className="text-[10px] md:text-xs opacity-85 font-light">
                Asistente virtual empático y respetuoso
              </p>
            </div>
          </div>

          {/* Contenedor de Mensajes */}
          <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar bg-[#FAF9F6] flex flex-col">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 w-full text-xs md:text-sm ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-xl leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-brand-olive text-white rounded-tr-none font-medium max-w-[85%]"
                      : "bg-brand-olive/10 text-brand-olivedark rounded-tl-none font-light w-full"
                  }`}
                >
                  {m.sender === "ai" && (
                    <p className="font-semibold text-[11px] md:text-xs text-brand-olive mb-1">
                      Sendero Otoñal:
                    </p>
                  )}
                  {m.text}

                  {/* Renderizar botón verde de derivación a WhatsApp */}
                  {m.isWhatsAppRedirect && (
                    <a
                      href={`https://wa.me/56978911807?text=${encodeURIComponent(
                        `Hola Sendero Otoñal. Realicé una consulta sobre "${m.userQueryForWA || "asistencia"}" en su asistente virtual y me gustaría hablar con un asesor para mayor orientación.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2 px-4 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm w-max"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                      </svg>
                      Contactar por WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="self-start flex gap-2 max-w-[85%] text-xs text-gray-500">
                <div className="bg-brand-olive/10 text-brand-olivedark p-3 rounded-xl rounded-tl-none font-light flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-olive animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-olive animate-bounce delay-200"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-olive animate-bounce delay-300"></span>
                </div>
              </div>
            )}
          </div>

          {/* Formulario de Entrada */}
          <form onSubmit={handleSend} className="p-3 border-t border-brand-gold/15 bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu consulta aquí..."
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-brand-gold/20 text-base text-brand-charcoal focus:outline-none focus:border-brand-olive bg-white"
              />
              <button
                type="submit"
                className="absolute right-2 bg-brand-olive hover:bg-brand-olivedark text-white p-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Enviar"
              >
                <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
