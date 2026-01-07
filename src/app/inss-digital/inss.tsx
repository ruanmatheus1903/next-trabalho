"use client";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="proxima-secao"
      className="bg-gradient-to-b from-white py-20 to-blue-900 text-white flex flex-col items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="bg-[#003476]/80 backdrop-blur-sm rounded-lg p-4 mb-4 inline-block">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            A PREFEITURA DO JABOATÃO DOS GUARARAPES E O INSS OFERECEM MAIS
          </h3>
        </div>
        
        <div className="bg-[#003476]/80 backdrop-blur-sm rounded-lg p-4 inline-block">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            ACESSIBILIDADE E CONFORTO NA SOLICITAÇÃO DE SERVIÇOS:
          </h3>
        </div>

        {/* Botões */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link href="https://servicosinss.jaboatao.pe.gov.br/cadastro-cidadao/" target="_blank">
            <button className="border-2 border-white text-white font-bold py-3 px-6 text-lg hover:bg-white hover:text-[#003476] transition-all duration-300 cursor-pointer">
              AGENDAR AGORA
            </button>
          </Link>

          <Link href="/pdf/inss-digital/documentacao-inss-digital-2.pdf" target="_blank">
            <button className="border-2 border-white text-white font-bold py-3 px-6 text-lg hover:bg-white hover:text-[#003476] transition-all duration-300 cursor-pointer">
              DOCUMENTAÇÃO
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}