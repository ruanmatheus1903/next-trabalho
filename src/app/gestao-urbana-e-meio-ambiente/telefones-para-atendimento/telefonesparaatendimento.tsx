"use client";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  // Animação de entrada
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="overflow-hidden">
      {/* ÁREA COM GRADIENTE DE FUNDO */}
      <div className="relative py-16 px-4 sm:px-10 flex items-center justify-center bg-gradient-to-b from-white via-blue-100 to-blue-400">
        
        <div className="max-w-6xl mx-auto w-full">
          <div
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h3 className="text-lg font-bold text-end text-blue-900">
                Secretaria Executiva de Meio Ambiente e Gestão Urbana
              </h3>
              <div className="flex justify-end">
                <span className="block w-16 h-[2px] bg-blue-900 mt-1"></span>
              </div>
              <p className="mt-2 text-sm text-end text-blue-900">
                Telefone de Atendimento: 81 99143 1608 <br />
                E-mail:{" "}
                <a
                  href="mailto:semag@jaboatao.pe.gov.br"
                  className="hover:underline"
                >
                  semag@jaboatao.pe.gov.br
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900">Superintendência de Licenciamento</h3>
              <span className="block w-16 h-[2px] bg-blue-900 mt-1 mx-auto md:mx-0"></span>
              <p className="mt-2 text-sm text-blue-900">
                Telefone de Atendimento Geral: 81 99241 3428 <br />
                Telefone de Atendimento Analistas: 81 99975 3779 <br />
                E-mail:{" "}
                <a href="mailto:gal@jaboatao.pe.gov.br" className="hover:underline">
                  gal@jaboatao.pe.gov.br
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-end text-blue-900">
                Gerência de Fiscalização Urbana e Ambiental
              </h3>
              <div className="flex justify-end">
                <span className="block w-16 h-[2px] bg-blue-900 mt-1"></span>
              </div>
              <p className="mt-2 text-sm text-end text-blue-900">
                Telefone de Atendimento e Denúncias: 81 99975 2561 <br />
                E-mail:{" "}
                <a
                  href="mailto:gfua@jaboatao.pe.gov.br"
                  className="hover:underline"
                >
                  gfua@jaboatao.pe.gov.br
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900">Superintendência de Meio Ambiente</h3>
              <span className="block w-16 h-[2px] bg-blue-900 mt-1 mx-auto md:mx-0"></span>
              <p className="mt-2 text-sm text-blue-900">
                Telefone de Atendimento: 81 99191 8704 / 99196 4340 <br />
                E-mail:{" "}
                <a href="mailto:sma@jaboatao.pe.gov.br" className="hover:underline">
                  sma@jaboatao.pe.gov.br
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}