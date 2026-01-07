'use client';

import React from 'react';
import Link from 'next/link';

export default function VideoInstitucional() {
  return (
    <div className="min-h-screen bg-[#051F60] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho ajustado */}
        <div className="flex flex-col items-center justify-center mb-12 h-40">
          <h1 className="text-4xl font-bold text-white mb-4">VÍDEO INSTITUCIONAL</h1>
          <div className="w-32 h-1 bg-[#F4BD04]"></div>
        </div>

        {/* Player de Vídeo com tamanho reduzido */}
        <div className="flex justify-center"> {/* Container para centralizar o vídeo */}
          <video 
            className="w-full max-w-4xl" // Reduzido para 4xl (896px) ou use max-w-3xl (768px)
            controls 
            autoPlay
          >
            <source src="/videos/jaboatao_x264.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5
          </video>
        </div>

        {/* Botão de Voltar */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 font-bold hover:bg-white hover:text-[#051F60] transition-colors"
          >
            VOLTAR
          </Link>
        </div>
      </div>
    </div>
  );
}