"use client";

import React from "react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";

export default function CardGrid() {
  // Função para fazer download do arquivo
  const handleDownload = () => {
    // Substitua esta URL pelo caminho do seu arquivo
    const fileUrl = "/pptx/apresentação-jaboatao-invest.pptx";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "apresentacao-jaboatao-invest.pptx"; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#274766]">
      {/* Seção DOWNLOADS com gradiente radial e ícone centralizado */}
      <div
        className="py-8 sm:py-12 text-center flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <FaDownload className="text-5xl sm:text-6xl lg:text-6xl text-[#233347] mb-2 sm:mb-4" />
          <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold text-[#233347] mb-10">
            DOWNLOADS
          </h2>
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 - Download de PowerPoint */}
        <div className="relative h-[250px] sm:h-[300px] lg:h-[450px] w-full overflow-hidden group border-[#F4BD04] border-1">
          {/* Frente do Card */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-all duration-300 group-hover:opacity-0"
            style={{ background: "radial-gradient(circle,#549FCA,#224276)" }}
          >
            <FaRegFilePowerpoint className="text-5xl sm:text-6xl lg:text-8xl text-white mb-2 sm:mb-4" />
            <h3 className="text-[#233347] text-xl sm:text-2xl lg:text-[32px] font-bold">
              APRESENTAÇÃO EM POWERPOINT
            </h3>
          </div>

          {/* Verso do Card (hover) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ background: "#051F60" }}
          >
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
              APRESENTAÇÃO EM POWERPOINT
            </h3>
            <p className="text-sm mb-5">
              Faça aqui o download do arquivo em PPT
            </p>
            <button
              onClick={handleDownload}
              className="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 cursor-pointer text-sm sm:text-base"
            >
              DOWNLOAD
            </button>
          </div>
        </div>

        {/* Card 2*/}
        <div className="relative h-[250px] sm:h-[300px] lg:h-[450px] w-full overflow-hidden group border-[#F4BD04] border-1">
          {/* Frente do Card */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-all duration-300 group-hover:opacity-0"
            style={{ background: "radial-gradient(circle,#549FCA,#224276)" }}
          >
            <FaPhotoVideo className="text-5xl sm:text-6xl lg:text-8xl text-white mb-2 sm:mb-4" />
            <h3 className="text-[#233347] text-xl sm:text-2xl lg:text-[32px] font-bold">
              VÍDEO INSTITUCIONAL
            </h3>
          </div>

          {/* Verso do Card (hover) */}
          <Link
            href="./downloads/video-institucional" // Atualizei para a nova rota
            className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ background: "#051F60" }}
          >
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
              VÍDEO INSTITUCIONAL
            </h3>
            <p className="text-sm mb-5">Clique para assistir</p>
            <span className="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 cursor-pointer text-sm sm:text-base">
              ASSISTIR
            </span>
          </Link>
        </div>

        {/* Card 3*/}
        <div className="relative h-[250px] sm:h-[300px] lg:h-[450px] w-full overflow-hidden group border-[#F4BD04] border-1">
          {/* Frente do Card */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-all duration-300 group-hover:opacity-0"
            style={{ background: "radial-gradient(circle,#549FCA,#224276)" }}
          >
            <ImHammer2 className="text-5xl sm:text-6xl lg:text-8xl text-white mb-2 sm:mb-4" />
            <h3 className="text-[#233347] text-xl sm:text-2xl lg:text-[32px] font-bold">
              LEGISLAÇÃO
            </h3>
          </div>

          {/* Verso do Card (hover) */}
          <Link
            href=".."
            className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ background: "#051F60" }}
          >
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
              LEGISLAÇÃO
            </h3>
            <p className="text-sm mb-5">
              Conheça as leis de incentivos e benefícios fiscais.
            </p>
            <span className="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 cursor-pointer text-sm sm:text-base">
              EXPLORAR
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
