"use client";
import { ChevronDown, Quote } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function AboutSection() {
  const { ref: setqeRef, inView: isSetqeVisible } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: missaoRef, inView: isMissaoVisible } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Função para scroll suave até uma seção
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* SEGUNDA SEÇÃO - A SETQE */}
      <section id="setqe-section" ref={setqeRef} className="relative py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ease-out ${isSetqeVisible ? "opacity-100" : "opacity-0"}`}>
            {/* Introdução */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Conheça a SETQE
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                No município de Jaboatão dos Guararapes, a <strong>Secretaria Executiva de Trabalho, Qualificação e Empreendedorismo (SETQE)</strong> faz parte da Secretaria Municipal de Desenvolvimento Econômico e Sustentabilidade, executando as políticas públicas municipais de emprego, trabalho e renda.
              </p>
            </div>

            {/* Áreas de atuação - Cards coloridos */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Nossas Áreas de Atuação</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                
                  <h4 className="text-xl font-bold mb-3">TRABALHO E INTERMEDIAÇÃO DA MÃO DE OBRA</h4>
                  <p className="text-blue-100 text-sm">
                    Conectamos trabalhadores às oportunidades de emprego através de processos eficientes de intermediação.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                 
                  <h4 className="text-xl font-bold mb-3">QUALIFICAÇÃO PROFISSIONAL</h4>
                  <p className="text-yellow-100 text-sm">
                    Oferecemos cursos e capacitações para preparar profissionais para as demandas do mercado de trabalho.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                
                  <h4 className="text-xl font-bold mb-3">ECONOMIAS SOLIDÁRIA E CRIATIVA</h4>
                  <p className="text-emerald-100 text-sm">
                    Incentivamos modelos econômicos colaborativos e criativos que promovem o desenvolvimento comunitário.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                 
                  <h4 className="text-xl font-bold mb-3">FOMENTO AO EMPREENDEDORISMO</h4>
                  <p className="text-purple-100 text-sm">
                    Apoiamos novos negócios e empreendedores com orientação, capacitação e acesso a recursos.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagem e texto explicativo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-12">
              {/* Coluna da imagem */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-yellow-400/20 rounded-3xl blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    {/* Substitua este div pela tag Image do Next.js */}
                    { <Image
                      src="/images/institucional/new-121628.png"
                      alt="SETQE em ação - Trabalhando pelo desenvolvimento de Jaboatão dos Guararapes"
                      width={900}
                      height={500}
                      className="w-full h-full object-cover"
                    /> }
                   
                  </div>
                </div>
              </div>

              {/* Coluna do texto */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-900">
                  Contribuindo para o Desenvolvimento
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No cumprimento de sua missão, a SETQE vem contribuindo significativamente com a formação e inserção do(a) trabalhador(a) no mundo do trabalho, promovendo o desenvolvimento econômico e social do município.
                </p>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Nossa Meta</h4>
                  <p className="text-gray-700">
                    Transformar vidas através do trabalho digno, capacitando profissionais e fomentando oportunidades que gerem crescimento pessoal e desenvolvimento comunitário.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <strong>Compromisso</strong> com a excelência nos serviços prestados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEADER COM ONDAS - Missão, Visão e Valores */}
      <div className="relative mt-16">
        <div className="relative text-center py-12 bg-gradient-to-b from-[#FFD24E] to-[#FDA417] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 tracking-tight">
            <span className="drop-shadow-xl">DIRETRIZES E VALORES</span>
          </h1>
          <p className="text-white/90 mt-3 text-lg md:text-xl font-light relative z-10">
            Os pilares que guiam nosso trabalho
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
      </div>

      {/* TERCEIRA SEÇÃO - Missão, Visão e Valores (FUNDO BRANCO) */}
      <section ref={missaoRef} className="relative py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ease-out ${isMissaoVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* MISSÃO */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Missão</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-6 rounded-full"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Contribuir para inserção do trabalhador no mundo do trabalho, promovendo oportunidades de emprego e qualificação profissional.
                  </p>
                </div>
              </div>

              {/* VISÃO */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Visão</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Ser referência nacional da qualidade dos serviços oferecidos no âmbito da Política Pública do Trabalho, Emprego e Renda em Jaboatão dos Guararapes.
                  </p>
                </div>
              </div>

              {/* VALORES */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Valores</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6 rounded-full"></div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <span className="font-medium text-blue-800">Ética</span>
                      <p className="text-sm text-gray-600 mt-1">Integridade em todas as ações</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <span className="font-medium text-blue-800">Transparência</span>
                      <p className="text-sm text-gray-600 mt-1">Clareza nos processos</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <span className="font-medium text-blue-800">Eficiência</span>
                      <p className="text-sm text-gray-600 mt-1">Otimização de recursos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
            {/* Texto final */}
            <div className="text-center mt-16  pt-8  border-t border-gray-200">
              <p className="text-lg text-gray-700 max-w-3xl  mx-auto py-18 italic">
                "A única maneira de estar verdadeiramente satisfeito, é fazendo aquilo que você acredita ser um ótimo trabalho."
              </p>
              <div className="mt-4">
                <p className="text-lg font-semibold text-blue-900">Steve Jobs</p>
                <div className="w-24 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Secretaria Executiva de Trabalho, Qualificação e Empreendedorismo
          </h3>
          <p className="text-gray-600 mb-6">
            Jaboatão dos Guararapes - Pernambuco
          </p>
          <div className="flex justify-center items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">+10K</div>
              <div className="text-sm text-gray-600">Pessoas atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-sm text-gray-600">Cursos oferecidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">06</div>
              <div className="text-sm text-gray-600">Unidades</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}