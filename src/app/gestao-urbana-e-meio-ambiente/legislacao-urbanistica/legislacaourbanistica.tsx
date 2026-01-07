"use client";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  // Animação de entrada
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="overflow-hidden">
      {/* ÁREA COM GRADIENTE DE FUNDO */}
      <div className="relative py-16 px-4 sm:px-10 text-white flex items-center justify-center bg-gradient-to-b bg-white via-blue-100 to-blue-400">
        
        <div className=" mx-auto">
          <div
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            
            {/* Primeira coluna - alinhada à direita */}
            <div>
              <p className=" text-lg text-black text-end">
                DECRETO 109-2015 - PROCESSOS ADMINISTRATIVOS<br />
                LEI 1354-2018 - HABITAÇÃO UNIFAMILIAR<br />
                LEI 1356-2018 - HABITAÇÃO SOCIAL<br />
                LEI 1360-2018 - INFRAÇÕES URBANAS<br />
                LEI LUOS - 972 - ALTERAÇÃO - COMPILADA - R.05<br />
                MINUTA DE PORTARIA CONJUNTA SEDES SEFAZ 01-2018<br />
              </p>
            </div>

            {/* Segunda coluna - alinhada à esquerda */}
            <div>
              <p className=" text-lg text-black">
                DECRETO 128-2017 - ORLA<br />
                LEI 1355-2018 - ANTENAS<br />
                LEI 1359-2018 - INFRAÇÕES AMBIENTAIS<br />
                LEI 1361-2018 - ALTERAÇÃO LUOS<br />
                LEIS 972/13 e 973/13<br />
                PLANO DIRETOR COMPLETO E ANEXOS CORRETOS 2008<br />
              </p>
            </div>

            {/* Terceira coluna - centralizada */}
            <div className="md:col-span-2 text-center">
              <p className="text-lg text-black">
                LEI 934-2013 PUBLICIDADE
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}