"use client";
import Image from "next/image";
import Link from "next/link";

export default function Calendario() {
  return (
    <div className="overflow-hidden">
      {/* ÁREA COM GRADIENTE DE FUNDO */}
      <div className="relative py-16 px-4 sm:px-10 text-white flex items-center justify-center min-h-[600px] bg-gradient-to-b from-white via-blue-100 to-blue-400">
        {/* Gradiente de fundo */}
        <div className="fixed inset-0 w-full h-full -z-10"></div>
        
        {/* Conteúdo do Calendário */}
        <div className="bg-white py-20 flex flex-col items-center px-6 rounded-xl shadow-2xl max-w-6xl mx-auto">
          <div className="mb-4 text-center text-black">
            <p className="text-base sm:text-lg md:text-[18px] font-medium mb-2 md:mb-4">
              O CALENDÁRIO publicado está em formato PDF. Caso não consiga abrir o arquivo,{" "}
              <Link 
                href="/pdf/emlume/regulamento-interno-licitacao-e-contrato-emlume.pdf" 
                target="_blank"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                clique AQUI
              </Link>{" "}
              para fazer o download do arquivo em PDF.
            </p>
          </div>
          <Link href="/pdf/emlume/regulamento-interno-licitacao-e-contrato-emlume.pdf" target="_blank">
            <Image
              src="/pdf/emlume/0.jpg"
              alt="Organograma"
              width={1200}
              height={400}
              className="rounded-lg shadow-lg border-2 border-gray-300 hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}