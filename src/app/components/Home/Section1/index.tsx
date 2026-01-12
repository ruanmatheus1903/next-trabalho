"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateButtons, setAnimateButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateTitle(true), 300);
    setTimeout(() => setAnimateButtons(true), 600);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 overflow-hidden">
      {/* Background com overlay mais escuro */}
      <div className="absolute inset-0">
        {/* Imagem principal de fundo fixa */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/bg-image-hero.jpg"
            alt="Background image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay escuro transparente - ajustado conforme solicitado */}
          <div className="absolute inset-0 bg-black/25"></div>
          
          {/* Efeitos de luz sutis */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Novo modelo do título */}
          <div className="mb-12">
            <div className={`transition-all duration-1000 ${
              animateTitle ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              {/* Container principal do título */}
              <div className="space-y-4">
                {/* Secretaria do Trabalho - destaque maior */}
                <div className="mb-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">
                      Secretaria do
                    </span>
                    <span className="block text-white mt-2">Trabalho</span>
                  </h1>
                  <div className="w-64 h-1 bg-gradient-to-r from-blue-400 via-white to-blue-400 mx-auto rounded-full mt-4"></div>
                </div>

                {/* Qualificação - ênfase especial */}
                <div className="my-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                      Qualificação
                    </span>
                  </h2>
                  <div className="flex justify-center items-center gap-3">
                    <div className="w-12 h-0.5 bg-blue-400/60 rounded-full"></div>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-12 h-0.5 bg-blue-400/60 rounded-full"></div>
                  </div>
                </div>

                {/* Empreendedorismo e Juventude - alinhados */}
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
                        Empreendedorismo
                      </span>
                    </h3>
                    <span className="text-white text-xl sm:text-2xl font-light">e</span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white">
                        Juventude
                      </span>
                    </h3>
                  </div>
                  {/* Linha decorativa final */}
                  <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto rounded-full mt-6"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Botões mantidos como estavam */}
          <div className={`flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center transition-all duration-1000 delay-500 ${
            animateButtons ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {/* Botão AGÊNCIA DO TRABALHADOR */}
            <Link
              href="/#AGÊNCIA DO TRABALHADOR"
              onClick={(e) => handleScrollTo(e, "AGÊNCIA DO TRABALHADOR")}
              className="group relative px-10 py-4 bg-transparent border-2 border-white/40 text-white rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:border-blue-400 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-3 min-w-[200px] justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg className="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="relative">AGÊNCIA</span>
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>

            {/* Botão Fale Conosco */}
            <Link
              href="/#faleconosco"
              onClick={(e) => handleScrollTo(e, "faleconosco")}
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-blue-500/30 flex items-center gap-3 min-w-[200px] justify-center"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="relative">FALE CONOSCO</span>
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}