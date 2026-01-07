"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  // Configuração das animações de entrada
  const { ref: textRef, inView: isTextVisible } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <>
      {/* Seção A SEDES com gradiente */}
      <section className="overflow-hidden">
        <div className="relative py-12 xl:py-20 text-center rounded-b-[50px] flex flex-col items-center px-6 bg-gradient-to-b from-white via-blue-100 to-blue-400 text-blue-900">
          <h2 className="text-[40px] relative inline-block transition-all duration-1000 ease-out delay-300"
          >
            A SEDES
            <span className="block w-[100px] h-1 bg-yellow-500 mt-2 mx-auto"></span>
          </h2>
          <p
            ref={textRef}
            className={`max-w-7xl mt-4 text-[16px] leading-relaxed text-justify transition-all duration-1000 ease-out delay-300 ${isTextVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
          >
            A função da SEDES é propiciar ao município do Jaboatão dos Guararapes um ambiente favorável aos empreendedores, investidores, visitantes e cidadãos, sendo um vetor de fortalecimento, inovação, expansão e crescimento econômico.
            <br /><br />
            Para tanto, suas atribuições compreendem:
            <br /><br />
            I - Planejar, formular, implementar, coordenar, fiscalizar, articular e controlar as políticas voltadas para as áreas do desenvolvimento econômico, industrial e comercial, com atuação no setor econômico;
            <br />
            II - Coordenar e acompanhar os processos de licenciamento ambiental, urbano e de regularização fundiária de forma integrada;
            <br />
            III - Desenvolver ações no setor de turismo, cultura, esportes e lazer;
            <br />
            IV - Promover o desenvolvimento urbano envolvendo o controle e o uso do solo, a viabilidade e o impacto de obras e empreendimentos, a aplicação dos instrumentos de regulação do uso do solo e o licenciamento, a manutenção e a vistoria dos projetos de edificação;
            <br />
            V - Acompanhar as demandas junto ao PROCON do município na finalidade de orientar o setor empresarial;
            <br />
            VI - Gestão empresarial dos mercados e feiras públicas, acompanhamento e crescimento econômico dos espaços públicos do município.
          </p>
          <ChevronDown className="text-yellow-500 mt-6 animate-bounce" size={32} />
        </div>
      </section>

      {/* Seção Missão, Visão e Organograma */}
      <section className="bg-white text-blue-900 py-12 xl:py-30 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Coluna Esquerda - Missão, Visão e Valores */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center">A MISSÃO</h2>
              <span className="block w-[100px] h-1 bg-blue-900 mt-2 mx-auto"></span>
              <p className="mt-6 text-lg sm:text-xl text-center text-black">
                Tornar Jaboatão dos Guararapes um ambiente favorável a empreendedores, investidores,
                visitantes e cidadãos, sendo um vetor de fortalecimento, inovação, expansão e
                crescimento econômico.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-center">A VISÃO</h2>
              <span className="block w-[100px] h-1 bg-blue-900 mt-2 mx-auto"></span>
              <p className="mt-6 text-lg sm:text-xl text-center text-black">
                Promover o desenvolvimento econômico e sustentável do município de
                Jaboatão dos Guararapes.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center">OS VALORES</h2>
              <span className="block w-[100px] h-1 bg-blue-900 mt-2 mx-auto"></span>
              <ul className="mt-6 text-lg sm:text-xl space-y-2 text-center text-black">
                <li>Ética, <br></br> Transparência, <br></br> Eficiência.</li>
              </ul>
            </div>
          </div>

          {/* Coluna Direita - Organograma */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center">ORGANOGRAMA</h2>
              <span className="block w-[100px] h-1 bg-blue-900 mt-2 mx-auto"></span>
            </div>
            <div className="relative flex justify-center items-center w-full">
              <div className="w-[40%] max-w-[600px]">
                <Image
                  src="/images/institucional/ORGANOGRAMA-DESENV.png"
                  alt="Organograma"
                  width={600}
                  height={400}
                  layout="intrinsic"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}