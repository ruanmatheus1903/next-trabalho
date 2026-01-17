"use client";

import React from 'react';

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEÇÃO 1 - GERAR RENDA SEM EXPLORAR */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
           
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Talvez esta seja a tônica da Economia Solidária: dar sentido à existência de pessoas que muitas vezes à margem das condições básicas de sobrevivência, podem, a partir de uma atividade reconstruir sua identidade como ser humano. Independentemente do lucro, o foco da Economia Solidária é devolver às pessoas de baixa ou nenhuma renda a sua cidadania e sua capacidade de fazer algo construtivo.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 my-8 border-l-4 border-blue-500">
              <p className="text-gray-700 italic leading-relaxed">
                "Economia Solidária é um jeito diferente de produzir, vender, comprar e trocar o que é preciso para viver. Sem explorar os outros, sem querer levar vantagem, sem destruir o ambiente. Cooperando, fortalecendo o grupo, cada um pensando no bem de todos e no próprio bem. A economia solidária vem se apresentando, nos últimos anos, como inovadora alternativa de geração de trabalho e renda e uma resposta a favor da inclusão social. Compreende uma diversidade de práticas econômicas e sociais organizadas sob a forma de cooperativas, associações e clubes de troca, entre outras, que realizam atividades de produção de bens, prestação de serviços, finanças solidárias, trocas, comércio justo e consumo solidário. Nesse sentido, compreende-se por economia solidária o conjunto de atividades econômicas de produção, distribuição, consumo, poupança e crédito, organizadas sob a forma de autogestão".
              </p>
              <p className="text-blue-900 font-semibold mt-4">— Portal Brasil</p>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-gray-700 text-lg">
                Atualmente, esse segmento movimenta cerca de <strong className="text-blue-900">R$ 8 bilhões</strong> e gera em torno de <strong className="text-blue-900">1,7 milhões de postos de trabalho</strong> – o que representa <strong className="text-blue-900">6% do PIB nacional</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE COM TÍTULO DA SEÇÃO 2 */}
    <div className="relative mt-16">
        <div className="relative text-center py-12 bg-gradient-to-b from-[#FFD24E] to-[#FDA417] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 tracking-tight">
            <span className="drop-shadow-xl">Economia solidária em Jaboatão dos Guararapes</span>
          </h1>
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
      {/* SEÇÃO 2 - ECONOMIA SOLIDÁRIA EM JABOATÃO */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Coordenação de Economia Solidária em Jaboatão dos Guararapes
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Por meio da Coordenação de Economia Solidária, o município de Jaboatão apoia a organização de empreendimentos econômicos solidários, ajudando-os a formatar e elaborar projetos com o objetivo de proporcionar oportunidades de comercialização de produtos e serviços de grupos solidários. Além disso, a Coordenação promove e fortalece o segmento, incentivando a constituição de cadeias produtivas, apoiando a organização, a legalização e o registro de empreendimentos; atua na difusão do artesanato local; promove a qualificação de artesãos; e apoia o cooperativismo popular.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Exemplo disso são as Feiras Itinerantes de Economia Solidária realizadas no município que abrem oportunidades para artesãos comercializarem seus produtos, promovendo a geração de renda para os participantes, além de difundir a Economia Solidária para a população em geral, disseminando princípios de cooperação, democracia, finanças solidárias, comércio justo e consumo responsável.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A Coordenação de Economia Solidária faz parte do organograma da Secretaria Executiva de Trabalho, Qualificação e Empreendedorismo (SETQE) que, por sua vez, foi criada em janeiro de 2011 e está abrigada na Secretaria Municipal de Desenvolvimento Econômico e Sustentabilidade.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 my-8">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Principais Marcos e Realizações:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span><strong>Lei 711/2011:</strong> Criou o Conselho Municipal de Economia Popular Solidária (CMEPS)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span><strong>25/11/2011:</strong> Lançamento do Fórum de Economia Popular Solidária (FEPS/JG)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span><strong>Março 2014:</strong> 1ª Conferência Municipal de Economia Solidária</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span><strong>Outubro 2014:</strong> Inauguração do Centro de Orientação Permanente à Economia Solidária (COPES)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span><strong>17/11/2016:</strong> Inauguração da loja Bem Viver na Rua Hermano Barros e Silva, n.º 5204 – Candeias</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE COM TÍTULO DA SEÇÃO 3 */}
   <div className="relative mt-16">
        <div className="relative text-center py-12 bg-gradient-to-b from-[#FFD24E] to-[#FDA417] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 tracking-tight">
            <span className="drop-shadow-xl">Mapeamento da Economia Solidária em Jaboatão</span>
          </h1>
        
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

      {/* SEÇÃO 3 - MAPEAMENTO */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Em 2012 a partir de um esforço conjunto entre o Município e o Ministério do Trabalho e Emprego, por meio da Secretaria Nacional de Economia Solidária, foi realizado um amplo mapeamento do setor. Os dados obtidos foram inseridos no Sistema Nacional de Informações em Economia Solidária e hoje representam uma fonte permanente de consulta, o que é fundamental para a implantação das políticas públicas demandadas pelo setor.
            </p>
            
            <div className="bg-emerald-50 rounded-xl p-6 my-8 border-l-4 border-emerald-500">
              <h4 className="text-xl font-bold text-emerald-900 mb-4">Dados do Mapeamento:</h4>
              <p className="text-gray-700 mb-4">
                Esse trabalho identificou o envolvimento direto de <strong className="text-emerald-900">6.693 pessoas</strong>, das quais <strong className="text-emerald-900">2.778 são homens</strong> e <strong className="text-emerald-900">3.915 são mulheres</strong>.
              </p>
              <p className="text-gray-700 mb-4">
                As mulheres representam <strong className="text-emerald-900">58,49%</strong> dos artesãos da economia solidária e os homens <strong className="text-emerald-900">41,51%</strong>.
              </p>
              <p className="text-gray-700">
                Do total de empreendimentos, <strong className="text-emerald-900">31,25%</strong> são integrados exclusivamente por mulheres e apenas <strong className="text-emerald-900">2,5%</strong> são integrados apenas por homens. Os demais possuem composição mista.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold text-emerald-900 mb-4">Áreas de Atuação Identificadas:</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Foram identificados empreendimentos das mais variadas áreas de atuação, com prevalência do artesanato em suas diversas formas, o que demonstra a vocação artesanal do município do Jaboatão e o coloca como um importante polo produtor de <em>souvenirs</em> e artigos que servem como atrativo para o turismo local.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                {[
                  "Cultura",
                  "Moda",
                  "Artigos para o lar",
                  "Agricultura familiar",
                  "Prestação de serviços",
                  "Manipulação de produtos fitoterápicos"
                ].map((area, index) => (
                  <div key={index} className="bg-emerald-100 text-emerald-900 rounded-lg p-3 text-center font-medium">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE COM TÍTULO DA SEÇÃO 4 */}
    <div className="relative mt-16">
        <div className="relative text-center py-12 bg-gradient-to-b from-[#FFD24E] to-[#FDA417] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 tracking-tight">
            <span className="drop-shadow-xl">Outras Ações</span>
          </h1>
         
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

      {/* SEÇÃO 4 - OUTRAS AÇÕES */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Entre outras ações da Economia Solidária no Município, podemos destacar a incubação de 11 empreendimentos econômicos solidários os quais hoje estão em plena atividade.
            </p>
            
            <div className="bg-amber-50 rounded-xl p-6 my-8 border-l-4 border-amber-500">
              <h4 className="text-xl font-bold text-amber-900 mb-4">Empreendimentos Incubados:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Associação Artes Curado</li>
                <li>Associação de Moradores da Vila Esperança Emergente</li>
                <li>Associação Nova Coveta</li>
                <li>Associação de Artesãos Mãe Rainha</li>
                <li>Centro de Saúde Alternativa da Muribeca – CESAM</li>
                <li>Centro Interativo de Educação Cultural Rádio Cajueiro FM</li>
                <li>Colônia de Pescadores Z 25</li>
                <li>Cooperativa de Beneficiamento de Materiais Recicláveis dos Catadores Maria da Penha</li>
                <li>Grupo Cultural Art Viva</li>
                <li>Grupo Variedades</li>
                <li>Mulheres Guerreiras</li>
              </ol>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Esses empreendimentos evoluíram como células dentro de seus próprios espaços e tiveram como foco o desenvolvimento do negócio de forma sustentável e autogestora. A ação teve início com um levantamento prévio das dificuldades e dos gargalos que impediam o progresso dos incubados. Foram realizadas consultorias para estes empreendimentos para torná-los independentes a partir de temas relacionados à assessoria jurídica e contábil.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="text-lg font-bold text-amber-900 mb-3">Ações Realizadas:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                    Alteração estatutária
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                    Eleição e posse de diretorias
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                    Sistematização da produção
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                    Melhoria da qualidade dos produtos
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                    Peças de divulgação
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                    Ações de comercialização e logística
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                    Controle financeiro e plano de trabalho
                  </li>
                </ul>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-5">
                <h4 className="text-lg font-bold text-amber-900 mb-3">Projetos em Destaque:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-amber-800">"Jaboatão Solidário"</h5>
                    <p className="text-gray-700 text-sm mt-1">
                      Implantar ações que possibilitassem o acompanhamento, a formalização e a organização dos empreendimentos solidários do Município.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-amber-800">"Jaboatão Gerando Renda Solidária"</h5>
                    <p className="text-gray-700 text-sm mt-1">
                      Convênio de <strong>R$ 1,5 milhão</strong> com o Ministério do Trabalho para implementar ações de prática e aperfeiçoamento técnico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                Todo esse esforço visa à continuação das ações de Economia Solidária em Jaboatão tanto pelo fato de que hoje esse segmento já se encontra bem como também por seu valor humanitário. A cidade é hoje uma referência que vai além de suas fronteiras, já é reconhecida em todo o país e fora dele, pois faz parte do Programa Mercocidades no âmbito do Mercosul, o que coloca Jaboatão numa posição privilegiada quando o tema é desenvolvimento humano e solidário.
              </p>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
}