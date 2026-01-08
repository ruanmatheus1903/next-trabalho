"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";
import { MdAccessibilityNew } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";

// Interface para tipagem dos cards
interface CardData {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  frontGradient: string;
  backGradient: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function CardGrid() {
  // Dados dos cards para evitar repetição de código
  const cardsData: CardData[] = [
    {
      id: 1,
      title: "AGENDAMENTO DOS SERVIÇOS DA AGÊNCIA DO TRABALHADOR",
      description: "Acesse todas as informações para que você possa agendar nossos serviços.",
      href: "/**",
      icon: <TfiLayoutGrid3Alt className="text-8xl group-hover:text-7xl transition-all duration-500" />,
      frontGradient: "from-blue-600 to-blue-800",
      backGradient: "from-blue-800 to-blue-900"
    },
    {
      id: 2,
      title: "PROGRAMA JABOATÃO APRENDIZ",
      description: "Saiba mais informações sobre o programa e faça envio do seu currículo.",
      href: "/**",
      icon: null,
      frontGradient: "bg-black to-gray-200",
      backGradient: "from-gray-700 to-gray-900",
      imageSrc: "/images/cards/apprentice-450-white.png",
      imageAlt: "Jaboatão Aprendiz"
    },
    {
      id: 3,
      title: "ENDEREÇO DAS AGÊNCIAS",
      description: "Confira os endereços, telefones, e-mails e mapas das nossas 06 agências espalhadas pelo município do Jaboatão",
      href: "/**",
      icon: <IoLocationSharp className="text-8xl group-hover:text-7xl transition-all duration-500" />,
      frontGradient: "from-cyan-600 to-blue-700",
      backGradient: "from-blue-800 to-blue-900"
    },
    {
      id: 4,
      title: "SERVIÇOS AO TRABALHADOR",
      description: "TRABALHADOR, encontre aqui todas as informações sobre os serviços disponibilizados pela secretaria.",
      href: "/**",
      icon: <MdAccessibilityNew className="text-9xl group-hover:text-7xl transition-all duration-500" />,
      frontGradient: "from-emerald-600 to-green-700",
      backGradient: "from-green-800 to-emerald-900"
    },
    {
      id: 5,
      title: "SERVIÇOS AO EMPREGADOR",
      description: "EMPREGADOR, encontre aqui todas as informações sobre os serviços disponibilizados pela secretaria.",
      href: "/inss-digital",
      icon: <FaBriefcase className="text-9xl group-hover:text-7xl transition-all duration-500" />,
      frontGradient: "bg-[#224276]",
      backGradient: "from-slate-700 to-slate-900"
    },
    {
      id: 6,
      title: "SINE FÁCIL",
      description: "Acesse nossa página e tenha toda informação de que precisa para se tornar o mais novo empreendedor do Jaboatão dos Guararapes.",
      href: "/gestao-urbana-e-meio-ambiente/plano-diretor",
      icon: <FaHandshakeAngle className="text-8xl group-hover:text-7xl transition-all duration-500" />,
      frontGradient: "from-indigo-600 to-purple-700",
      backGradient: "from-purple-800 to-indigo-900"
    }
  ];

  // Função para renderizar o conteúdo do card (frente)
  const renderFrontContent = (card: CardData) => {
    if (card.imageSrc) {
      return (
        <>
          <div className="relative p-6 backdrop-blur-sm rounded-2xl mb-8 shadow-inner">
            <Image
              width={320}
              height={140}
              src={card.imageSrc}
              alt={card.imageAlt || ""}
              className="w-56 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="text-[#f0f0f0] text-xl font-bold leading-tight px-6">
            {card.title}
          </h3>
        </>
      );
    }

    return (
      <>
        <div className="relative">
          {card.icon}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
        </div>
        <h3 className="text-white text-2xl font-bold mt-6 leading-tight">
          {card.title}
        </h3>
      </>
    );
  };

  // Função para renderizar o conteúdo do card (verso)
  const renderBackContent = (card: CardData) => {
    return (
      <>
        <div className="relative">
          {card.imageSrc ? (
            <div className="mb-8">
              <Image
                width={240}
                height={100}
                src={card.imageSrc}
                alt={card.imageAlt || ""}
                className="w-48 h-auto object-contain"
              />
            </div>
          ) : (
            <>
              <div className="absolute inset-0 bg-white/10 blur-xl rounded-full"></div>
              <div className="text-7xl text-white mb-8 relative z-10">
                {card.icon}
              </div>
            </>
          )}
        </div>
        <h3 className="text-white text-2xl font-bold mb-6">
          {card.title}
        </h3>
        <p className="text-white/80 text-sm mb-8 px-6">
          {card.description}
        </p>
        <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-xl">
          EXPLORAR <RiExternalLinkLine />
        </span>
      </>
    );
  };

  // Determina se o card precisa de borda direita
  const getBorderClasses = (index: number) => {
    const isLastInRow = (index + 1) % 3 === 0;
    const isLastRow = index >= 3;

    if (isLastInRow) return "border-b border-white/30";
    if (isLastRow) return "border-r border-white/30";
    return "border-r border-b border-white/30";
  };

  return (
    <div id="informativo" className="overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
      {/* HEADER */}
      <div className="relative text-center py-12 bg-gradient-to-b from-[#FFD24E] to-[#FDA417] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <h1 className="text-5xl font-bold text-white relative z-10 tracking-tight">
          <span className="drop-shadow-xl">INFORMATIVO</span>
        </h1>
        <p className="text-white/90 mt-3 text-lg font-light relative z-10">
          Explore nossos serviços e informações municipais
        </p>
      </div>

      {/* WAVES */}
      <div className="relative w-full">
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

      {/* CARDS GRID */}
      <div className="max-w-screen overflow-hidden py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {cardsData.map((card, index) => (
            <Link
              key={card.id}
              href={card.href}
              className="group"
            >
              <div
                className={`relative h-[420px] w-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 ${getBorderClasses(index)}`}
              >
                {/* FRONT SIDE */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-10 text-center transition-all duration-500 group-hover:opacity-0 bg-gradient-to-br ${card.frontGradient}`}
                >
                  {renderFrontContent(card)}
                </div>

                {/* BACK SIDE (ON HOVER) */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br ${card.backGradient}`}
                >
                  {renderBackContent(card)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}