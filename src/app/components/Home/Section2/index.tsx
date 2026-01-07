"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiInformationLine,
  RiMoneyDollarCircleLine,
  RiLineChartLine,
  RiMap2Line,
  RiArrowRightUpLine,
  RiExternalLinkLine,
} from "react-icons/ri";

export default function CardGrid() {
  return (
    <div id="informativo" className="overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
      {/* TÍTULO COM GRADIENTE AMARELO E EFEITO MODERNO */}
      <div className="relative text-center py-12 bg-gradient-to-b from-[#FFD24E] to-[#FDA417] overflow-hidden">
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <h1 className="text-5xl font-bold text-white relative z-10 tracking-tight">
          <span className="drop-shadow-xl">INFORMATIVO</span>
        </h1>
        <p className="text-white/90 mt-3 text-lg font-light relative z-10">
          Explore nossos serviços e informações municipais
        </p>
      </div>

      {/* ONDAS COM GRADIENTE AMARELO E ANIMAÇÃO */}
      <div className="relative w-full transform transition-transform duration-500 hover:scale-[1.02]">
        <svg
          width="100%"
          viewBox="0 0 2000 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-700 ease-out"
        >
          <path
            opacity="0.33"
            d="M946 62.22C538.2 152.254 419.8 27.5523 305.4 62.22C132 115.037 0 54.4708 0 54.4708V-6.40161H2000V54.4708C2000 54.4708 1875.8 81.0833 1810.2 84.3462C1744.6 87.711 1684.6 71.8046 1658.6 61.8122C1612 44.1724 1490.6 2.46924 1389.8 -1.60931C1289 -5.68786 984.8 53.757 946 62.22Z"
            fill="#FDA417"
            className="transition-all duration-1000"
          />
          <path
            opacity="0.66"
            d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
            fill="#FDA417"
            className="transition-all duration-800"
          />
          <path
            d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
            fill="#FDA417"
            className="transition-all duration-600"
          />
        </svg>
      </div>

      {/* GRID DE CARDS MODERNO E MAIS LARGO */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Card 1 - Dados do Município */}
          <Link href="/informativo/dados-do-municipio" className="group">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 mx-2">
              {/* Frente do Card */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center transition-all duration-500 group-hover:opacity-0 bg-gradient-to-br from-blue-600 to-blue-800"
              >
                <div className="relative">
                  <RiInformationLine className="text-8xl text-white mb-8 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-white text-2xl font-bold mt-6 leading-tight">
                  DADOS DO<br />MUNICÍPIO
                </h3>
                <div className="mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 text-white/80 text-sm">
                    Clique para explorar <RiArrowRightUpLine />
                  </span>
                </div>
              </div>

              {/* Verso do Card (hover) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-800 to-blue-900">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 blur-xl rounded-full"></div>
                  <RiInformationLine className="text-7xl text-white mb-8 relative z-10" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-6">
                  DADOS DO MUNICÍPIO
                </h3>
                <p className="text-white/80 text-sm mb-8 px-6">
                  Informações completas sobre o município
                </p>
                <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-blue-900 hover:scale-105 hover:shadow-xl">
                  EXPLORAR <RiExternalLinkLine className="text-xl" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2 - Jaboatão Invest */}
          <Link href="/informativo/jaboatao-invest" className="group">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 mx-2">
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center transition-all duration-500 group-hover:opacity-0 bg-gradient-to-br from-gray-100 to-gray-300"
              >
                <div className="relative p-6 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 shadow-inner">
                  <Image
                    width={320}
                    height={140}
                    src="/images/cards/JABOATAO-INVEST.png"
                    alt="Jaboatão Invest"
                    className="w-56 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[#224276] text-xl font-bold leading-tight px-6">
                  O MELHOR LUGAR<br />PARA INVESTIR
                </h3>
                <div className="mt-8 text-[#224276]/70 text-sm">
                  Oportunidades de investimento
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-gray-700 to-gray-900">
                <div className="mb-8">
                  <Image
                    width={240}
                    height={100}
                    src="/images/cards/JABOATAO-INVEST.png"
                    alt="Jaboatão Invest"
                    className="w-48 h-auto object-contain"
                  />
                </div>
                <h3 className="text-white text-2xl font-bold mb-6">
                  JABOATÃOINVEST
                </h3>
                <p className="text-white/80 text-sm mb-8 px-6">
                  Descubra as melhores oportunidades de investimento
                </p>
                <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-xl">
                  SAIBA MAIS <RiExternalLinkLine />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3 - Incentivos Fiscais */}
          <Link href="/informativo/incentivo-fiscais" className="group">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 mx-2">
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center transition-all duration-500 group-hover:opacity-0 bg-gradient-to-br from-cyan-600 to-blue-700"
              >
                <div className="relative">
                  <RiMoneyDollarCircleLine className="text-8xl text-white mb-8 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full"></div>
                </div>
                <h3 className="text-white text-2xl font-bold mt-6 leading-tight">
                  INCENTIVOS E<br />BENEFÍCIOS FISCAIS
                </h3>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-800 to-blue-900">
                <RiMoneyDollarCircleLine className="text-7xl text-white mb-8" />
                <h3 className="text-white text-2xl font-bold mb-6">
                  INCENTIVOS FISCAIS
                </h3>
                <p className="text-white/80 text-sm mb-8 px-6">
                  Conheça os benefícios fiscais disponíveis
                </p>
                <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-blue-900 hover:scale-105 hover:shadow-xl">
                  VER BENEFÍCIOS <RiExternalLinkLine />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 4 - ZPE */}
          <Link href="/informativo/zpe" className="group">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 mx-2">
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center transition-all duration-500 group-hover:opacity-0 bg-gradient-to-br from-emerald-600 to-green-700"
              >
                <div className="relative">
                  <RiLineChartLine className="text-8xl text-white mb-8 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute -inset-4 bg-emerald-400/10 blur-xl"></div>
                </div>
                <h3 className="text-white text-3xl font-bold mt-6">
                  ZPE
                </h3>
                <p className="text-white/80 text-sm mt-3">Zona de Processamento de Exportação</p>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-green-800 to-emerald-900">
                <RiLineChartLine className="text-7xl text-white mb-8" />
                <h3 className="text-white text-2xl font-bold mb-4">
                  ZPE
                </h3>
                <p className="text-white/80 text-sm mb-8 px-6">
                  Zona de Processamento de Exportação
                </p>
                <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-green-900 hover:scale-105 hover:shadow-xl">
                  ACESSAR ZPE <RiExternalLinkLine />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 5 - INSS Digital */}
          <Link href="/inss-digital" className="group">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 mx-2">
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center transition-all duration-500 group-hover:opacity-0 bg-gradient-to-br from-slate-100 to-slate-300"
              >
                <div className="relative p-8 bg-white/30 backdrop-blur-sm rounded-2xl mb-8 shadow-inner">
                  <Image
                    width={280}
                    height={120}
                    src="/images/cards/LOGO-INSS-Digital-AZUL.png"
                    alt="INSS Digital"
                    className="w-48 h-auto object-contain"
                  />
                </div>
                <h3 className="text-[#224276] text-xl font-bold leading-tight px-8">
                  AGENDE AQUI O SERVIÇO DO INSS QUE VOCÊ PRECISA
                </h3>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-slate-700 to-slate-900">
                <div className="mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Image
                    width={200}
                    height={90}
                    src="/images/cards/LOGO-INSS-Digital-AZUL.png"
                    alt="INSS Digital"
                    className="w-40 h-auto object-contain"
                  />
                </div>
                <h3 className="text-white text-2xl font-bold mb-6">
                  INSS DIGITAL
                </h3>
                <p className="text-white/80 text-sm mb-8 px-6">
                  Agendamento online de serviços do INSS
                </p>
                <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-105 hover:shadow-xl">
                  AGENDAR <RiExternalLinkLine />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 6 - Plano Diretor */}
          <Link href="/gestao-urbana-e-meio-ambiente/plano-diretor" className="group">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 mx-2">
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center transition-all duration-500 group-hover:opacity-0 bg-gradient-to-br from-indigo-600 to-purple-700"
              >
                <div className="relative">
                  <RiMap2Line className="text-8xl text-white mb-8 group-hover:rotate-6 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-purple-400/20 blur-2xl rounded-full"></div>
                </div>
                <h3 className="text-white text-2xl font-bold mt-6">
                  PLANO DIRETOR
                </h3>
                <p className="text-white/80 text-sm mt-3">Desenvolvimento urbano sustentável</p>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-purple-800 to-indigo-900">
                <RiMap2Line className="text-7xl text-white mb-8" />
                <h3 className="text-white text-2xl font-bold mb-6">
                  PLANO DIRETOR
                </h3>
                <p className="text-white/80 text-sm mb-8 px-6">
                  Estratégias para o desenvolvimento urbano
                </p>
                <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-purple-900 hover:scale-105 hover:shadow-xl">
                  CONSULTAR <RiExternalLinkLine />
                </span>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}