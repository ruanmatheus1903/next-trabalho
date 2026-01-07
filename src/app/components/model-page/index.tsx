"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ModelProps {
  children: React.ReactNode;
  caminhoImagem?: string;
  titulo: string;
  subtitulo: React.ReactNode;
}

const Model = ({ children, titulo, subtitulo }: ModelProps) => {
  return (
    <div className='bg-white'>
      {/* Container da imagem com overflow-hidden para limitar a animação */}
      <div className="relative w-full h-[220px] md:h-[250px] overflow-hidden flex items-end justify-center rounded-b-[50px]">
        {/* Container com a animação */}
        <motion.div
          initial={{ scale: 1.5 }}  // Começa com zoom
          animate={{ scale: 1 }}  // Diminui para o tamanho original
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/Bandeira/bandeiramodelo.png"
            alt="background"
            className="w-full h-full object-cover"
            width={4000}
            height={500}
          />
        </motion.div>

        {/* Camada de sobreposição para escurecer a imagem */}
        <div className="absolute inset-0 bg-[#0a183c]" style={{ opacity: 0.6 }}></div>

        {/* Conteúdo sobre a imagem */}
        <div className="z-10 text-center text-white pb-4 px-4">
          <h1 className="md:text-[30px] lg:text-[35px] xl:text-[40px] text-[18px] leading-[25px] md:leading-[38px] pb-[5px] Montserrat-Bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] uppercase">
            {titulo}
          </h1>
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-bold">{subtitulo}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Model;
