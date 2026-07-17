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

const FAQ_DATABASE: FAQEntry[] = [
  {
    keywords: ["cuota", "mortuoria", "afp", "ips", "fonasa", "isapre", "monto", "15 uf", "bono", "cobrar", "seguro"],
    response: "La Cuota Mortuoria es un beneficio de la seguridad social en Chile para cubrir los gastos funerarios. Equivale a un tope de 15 UF (aproximadamente $570.000 CLP actuales). Se financia con los fondos de pensiones (AFP) o a través del IPS (ex INP). En Sendero Otoñal gestionamos este trámite legal directamente y lo rebajamos del costo de tu servicio para tu tranquilidad familiar."
  },
  {
    keywords: ["defuncion", "defunción", "certificado", "inscribir", "registro civil", "pase", "sepultacion", "sepultación", "tramites", "trámites", "pasos", "muere", "fallece"],
    response: "Para inscribir una defunción en Chile, se requiere:\n1. Certificado Médico de Defunción emitido por el médico de turno o tratante.\n2. Inscripción en el Registro Civil (se realiza en las primeras 24 horas).\n3. Obtención del Pase de Sepultación o Cremación.\n\nEn Funeraria Sendero Otoñal nos encargamos del 100% de estos trámites ante el Registro Civil y Seremi de Salud sin costo adicional."
  },
  {
    keywords: ["precio", "planes", "costo", "valor", "tarifas", "servicios", "clasico", "clásico", "estandar", "estándar", "memorial", "otoñal", "otoñal"],
    response: "Nuestros planes oficiales del catálogo comienzan desde el Servicio Clásico ($960.000) hasta opciones premium de alta gama como el Servicio Otoñal ($3.290.000) . Todos incluyen la gestión legal de defunción, preparación de la urna, capilla ardiente, libro de condolencias y carrozas. Puedes revisar los detalles completos en la sección 'Catálogo' y usar el 'Cotizador' interactivo para agregar servicios adicionales."
  },
  {
    keywords: ["urnas", "casket", "cofres", "madera", "roble", "oregon", "oregón", "alerce", "urna"],
    response: "Nuestras urnas son elaborados a mano utilizando maderas finas y nobles seleccionadas (como Roble Nacional y Pino Oregón). Cuentan con barniz espejo de alto brillo, interiores de raso plisado y terciopelo, herrajes de bronce pulido continuos e incrustaciones artísticas exclusivas. En la sección 'Cofres y Urnas' puedes ver fotos de los modelos."
  },
  {
    keywords: ["donde", "dónde", "ubicacion", "ubicación", "contacto", "telefono", "teléfono", "los andes", "san felipe", "aconcagua", "santiago", "region", "región", "valparaiso", "valparaíso", "dirección", "direccion"],
    response: "Funeraria Sendero Otoñal atiende de forma directa e inmediata las 24 horas del día en todo el Valle del Aconcagua (Los Andes, San Felipe y comunas aledañas), la Región de Valparaíso y la Región Metropolitana (Santiago). Puedes comunicarte directamente al teléfono de urgencias +569 7891 1807."
  },
  {
    keywords: ["cremacion", "cremación", "incinerar", "cenizas", "anfora", "ánfora"],
    response: "La cremación en Chile requiere de trámites notariales específicos y autorización sanitaria. Se debe contar con una declaración jurada de la familia directa o una manifestación expresa del fallecido en vida. En Sendero Otoñal te brindamos la asesoría legal y nos encargamos de todo el traslado hacia los principales cinerarios del país."
  },
  {
    keywords: ["casa", "hogar", "domicilio", "hospital", "clinica", "clínica", "encontraron", "fallecio en casa", "falleció en casa", "que hacer", "qué hacer"],
    response: "Si el fallecimiento ocurre en el domicilio, lo primero es contactar a su médico tratante o al servicio de salud de urgencia para certificar el deceso. Si ocurre en un hospital o clínica, el centro asistencial entregará el Certificado Médico de Defunción. En cualquier escenario, comunícate de inmediato a nuestro fono de urgencias (+569 7891 1807) y nuestro personal asistencial se trasladará al lugar para asistirte en todo."
  },
  {
    keywords: ["madrugada", "noche", "24 horas", "247", "festivo", "domingo", "horario", "abierto", "atencion", "atención", "emergencia", "urgencia"],
    response: "En Funeraria Sendero Otoñal atendemos emergencias e ingresos las 24 horas del día, los 365 días del año, incluyendo horarios nocturnos, madrugadas, domingos y días festivos. Nuestro compromiso es brindarte un apoyo inmediato en el momento que más lo necesitas."
  },
  {
    keywords: ["pagar", "tarjeta", "credito", "crédito", "cuotas", "efectivo", "transferencia", "cheque", "financiamiento", "medios de pago", "formas de pago"],
    response: "Disponemos de múltiples facilidades de pago para la tranquilidad familiar: transferencias bancarias, efectivo, tarjetas de débito y tarjetas de crédito (pudiendo pactar en las cuotas que te permita tu banco). Adicionalmente, aceptamos la asignación directa de la Cuota Mortuoria de AFP o IPS para rebajarla directamente del saldo final del servicio."
  },
  {
    keywords: ["anticipado", "pre necesidad", "prenecesidad", "en vida", "comprar antes", "prevision", "previsión", "asegurar"],
    response: "Sí, contamos con planes de Prenecesidad. Comprar un servicio funerario de forma anticipada en vida permite congelar los costos frente a la inflación futura, asegurar la tranquilidad de tus seres queridos y evitar decisiones complejas en momentos de dolor. Consulta por nuestras opciones de financiamiento y convenios de pago programado."
  },
  {
    keywords: ["traer", "traslado", "provincia", "llevar", "carroza", "distancia", "santiago a san felipe", "regiones", "carrozas"],
    response: "Efectuamos traslados de cuerpos a lo largo de todo Chile. Si tu ser querido falleció en Santiago u otra región y la familia desea traerlo al Valle del Aconcagua, o viceversa, gestionamos los permisos de tránsito del Seremi de Salud correspondientes y coordinamos el transporte seguro en nuestras carrozas panorámicas de larga distancia."
  },
  {
    keywords: ["velatorio", "iglesia", "capilla", "instalacion", "instalación", "sillas", "cafeteria", "cafetería", "velas", "porta cirios", "cirios"],
    response: "Todos nuestros planes contemplan la instalación completa de la capilla ardiente en el lugar que la familia determine (iglesia, salón comunitario o domicilio particular). Incluimos paramentos, porta-cirios, cirios, crucifijo y libro de condolencias. Según el plan contratado, también se proporciona un set de sillas adicionales y servicio de cafetería para los acompañantes."
  },
  {
    keywords: ["autopsia", "sml", "servicio medico legal", "servicio médico legal", "accidente", "fiscalia", "fiscalía", "retirar", "violenta"],
    response: "En casos de fallecimiento por causas accidentales, dudosas o violentas, se requiere obligatoriamente la intervención del Servicio Médico Legal (SML) y la Fiscalía. En Funeraria Sendero Otoñal te brindamos asesoría jurídica continua y realizamos los trámites de coordinación para el retiro del cuerpo de forma expedita una vez que las autoridades otorguen la orden de entrega."
  },
  {
    keywords: ["posesion efectiva", "posesión efectiva", "herencia", "testamento", "despues del funeral", "después del funeral", "bienes"],
    response: "Al concluir el funeral, para poder disponer de los bienes, vehículos o cuentas del fallecido, la familia debe tramitar la Posesión Efectiva (en el Registro Civil si no existe testamento). En Sendero Otoñal orientamos a los familiares sobre los pasos iniciales y hacemos entrega de las copias del Certificado de Defunción Todo Trámite indispensables para este proceso legal."
  }
];
export default function AiAdvisor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hola, mis más sinceras condolencias si estás pasando por una pérdida. Estoy aquí para guiarte de forma calmada en los trámites funerarios en Chile. Puedes preguntarme cosas como:\n\n• ¿Cómo cobro la cuota mortuoria en AFP o IPS?\n• ¿Cuáles son los pasos para inscribir un fallecimiento?\n• ¿Qué precios tienen los servicios?",
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

    // Simular el retraso de búsqueda/análisis
    setTimeout(() => {
      // Buscar coincidencia en la base de datos local JSON (FAQ_DATABASE)
      const matchedEntry = FAQ_DATABASE.find((entry) =>
        entry.keywords.some((keyword) => queryLower.includes(keyword))
      );

      let reply = "";
      let isWhatsAppRedirect = false;

      if (matchedEntry) {
        reply = matchedEntry.response;
      } else {
        // Si no se encuentra respuesta, derivar a WhatsApp
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
            Asesor Virtual de Contención
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
                Asistencia de Inteligencia Artificial empática y respetuosa
              </p>
            </div>
          </div>

          {/* Contenedor de Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar bg-[#FAF9F6] flex flex-col">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 max-w-[85%] text-xs md:text-sm ${
                  m.sender === "user" ? "self-end" : "self-start"
                }`}
              >
                <div
                  className={`p-3 rounded-xl leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-brand-olive text-white rounded-tr-none font-medium"
                      : "bg-brand-olive/10 text-brand-olivedark rounded-tl-none font-light"
                  }`}
                >
                  {m.sender === "ai" && (
                    <p className="font-semibold text-[11px] md:text-xs text-brand-olive mb-1">
                      Sendero Otoñal AI:
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
            <div ref={messagesEndRef} />
          </div>

          {/* Formulario de Entrada */}
          <form onSubmit={handleSend} className="p-3 border-t border-brand-gold/15 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta aquí..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-brand-gold/20 text-xs md:text-sm text-brand-charcoal focus:outline-none focus:border-brand-olive"
            />
            <button
              type="submit"
              className="bg-brand-olive hover:bg-brand-olivedark text-white px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-colors cursor-pointer"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
