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
      {/* Background com cores mais escuras */}
      <div className="absolute inset-0">
        {/* Imagem principal de fundo fixa */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/bg-image-hero.jpg"
            alt="Background image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay escuro para melhor contraste */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/80 via-indigo-400/70 to-slate-500/80"></div>
          
          {/* Efeitos de luz sutis */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Título principal com tipografia melhorada */}
          <div className="mb-12">
            <div className={`transition-all duration-1000 ${
              animateTitle ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              {/* Linha 1 com destaque */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                <span className="block">Secretaria do  Trabalho</span>
              
              </h1>
              
              {/* Linha 2 com tipografia elegante */}
              <div className="my-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-wide">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">
                    Qualificação
                  </span>
                </h2>
                <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto rounded-full mt-4"></div>
              </div>
              
              {/* Linha 3 com hierarquia clara */}
              <div className="mt-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 leading-relaxed">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
                    Empreendedorismo
                  </span>
                  <span className="text-white mx-3">e</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white">
                    Juventude
                  </span>
                </h3>
                <div className="flex justify-center items-center mt-6 gap-4">
                  <div className="w-8 h-0.5 bg-blue-400/50 rounded-full"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <div className="w-8 h-0.5 bg-blue-400/50 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Botões com design refinado */}
          <div className={`flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center transition-all duration-1000 delay-500 ${
            animateButtons ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {/* Botão Informativo */}
            <Link
              href="/#informativo"
              onClick={(e) => handleScrollTo(e, "informativo")}
              className="group relative px-10 py-4 bg-transparent border-2 border-white/40 text-white rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:border-blue-400 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-3 min-w-[200px] justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg className="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="relative">INFORMATIVO</span>
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

          {/* Indicador de scroll minimalista */}
          <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
            animateButtons ? 'opacity-100' : 'opacity-0'
          }`}>
            <div 
              className="flex flex-col items-center cursor-pointer group" 
              onClick={(e) => handleScrollTo(e, "informativo")}
            >
              <span className="text-sm text-blue-300/70 mb-3 tracking-widest uppercase group-hover:text-blue-200 transition-colors duration-300">
                Descubra
              </span>
              <div className="relative w-6 h-10">
                <div className="absolute inset-0 border border-blue-400/30 rounded-full"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-4 bg-gradient-to-b from-blue-400 to-blue-300 rounded-full animate-scroll-indicator"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS para animações */}
      <style jsx>{`
        @keyframes scroll-indicator {
          0% { 
            transform: translateY(0) translateX(-50%); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(8px) translateX(-50%); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(0) translateX(-50%); 
            opacity: 0.6; 
          }
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
        
        /* Melhor legibilidade do texto com gradiente */
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}