"use client";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
export default function AboutSection() {
  // Configuração das animações de entrada
  const { ref: titleRef, inView: isTitleVisible } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: textRef, inView: isTextVisible } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <>
      <section className=" bg-gradient-to-b from-white via-blue-100 to-blue-400 text-blue-900 py-12 xl:py-20 text-center flex flex-col items-center px-6">
        <h2
          ref={titleRef}
          className={`text-[40px] text-[#224276] font-bold relative inline-block transition-all duration-1000 ease-out delay-300 ${
            isTitleVisible ? "translate-y-0 opacity-100" : "-translate-y-60 opacity-0"
          }`}
        >
          PD - PLANO DIRETOR
          <span className="block w-[200px] h-1 bg-[#6EC1E4] mt-2 mx-auto"></span>
        </h2>

        <p
          ref={textRef}
          className={`max-w-7xl mt-4 text-[18px] leading-relaxed text-justify transition-all duration-1000 ease-out delay-300 ${
            isTextVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          O presente documento integra o Plano de Desenvolvimento e Zoneamento (PDZ) do Município do Jaboatão dos Guararapes e está estruturado conforme estabelecido na Portaria nº xxx, de xx de xxx de 2018, da Secretaria Municipal de Desenvolvimento Econômico e Sustentabilidade. Abrangendo, assim, informações acerca dos relevantes aspectos físicos, operacionais e econômicos, incluindo a acessibilidade, equipamentos e instalações, além de aspectos ambientais.
          <br /><br />
          LINK PARA DOWNLOAD DO PD:
          <br /><br />
          <ul>
            <li><Link href="./pdf/planodiretor/PLANO-DIRETOR-COMPLETO-E-ANEXOS-CORRETOS-2008.pdf">Plano Diretor 2008</Link></li>
            <li><Link href="./pdf/planodiretor/Leis-972_13-e-973_13.pdf">Leis 972/973 de 2013</Link></li>
            <li><Link href="./pdf/planodiretor/MAPA-ZONEAMENTO.pdf" target="_blank" rel="noopener">Mapa de zoneamento</Link></li>
          </ul>
        </p>
      </section>
    </>
  );
}
