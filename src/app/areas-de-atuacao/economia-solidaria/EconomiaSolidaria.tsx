"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function EconomiaSolidariaPage() {
  const { ref: primeiraRef, inView: primeiraVisible } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: segundaRef, inView: segundaVisible } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: terceiraRef, inView: terceiraVisible } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-white">

      {/* PRIMEIRA SEÇÃO - INTRODUÇÃO À ECONOMIA SOLIDÁRIA */}
      <section id="introducao" className="relative py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ease-out ${primeiraVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} ref={primeiraRef}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Economia Solidária
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl md:text-3xl font-light text-gray-700 italic max-w-3xl mx-auto">
                "Gerar renda sem explorar: dar sentido ao que se faz na vida"
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Talvez esta seja a tônica da Economia Solidária: dar sentido à existência de pessoas que muitas vezes à margem das condições básicas de sobrevivência, podem, a partir de uma atividade reconstruir sua identidade como ser humano. Independentemente do lucro, o foco da Economia Solidária é devolver às pessoas de baixa ou nenhuma renda a sua cidadania e sua capacidade de fazer algo construtivo.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
                <p className="text-gray-700">
                  Segundo o Portal Brasil, <strong>"Economia Solidária é um jeito diferente de produzir, vender, comprar e trocar o que é preciso para viver. Sem explorar os outros, sem querer levar vantagem, sem destruir o ambiente. Cooperando, fortalecendo o grupo, cada um pensando no bem de todos e no próprio bem."</strong>
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                A economia solidária vem se apresentando, nos últimos anos, como inovadora alternativa de geração de trabalho e renda e uma resposta a favor da inclusão social. Compreende uma diversidade de práticas econômicas e sociais organizadas sob a forma de cooperativas, associações e clubes de troca, entre outras, que realizam atividades de produção de bens, prestação de serviços, finanças solidárias, trocas, comércio justo e consumo solidário. Nesse sentido, compreende-se por economia solidária o conjunto de atividades econômicas de produção, distribuição, consumo, poupança e crédito, organizadas sob a forma de autogestão.
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 md:p-8 text-white shadow-lg mt-10">
                <h3 className="text-2xl font-bold mb-4">Impacto Nacional da Economia Solidária</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">R$ 8 bilhões</div>
                    <div className="text-blue-100">Movimentação anual</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">1,7 milhões</div>
                    <div className="text-blue-100">Postos de trabalho gerados</div>
                  </div>
                </div>
                <p className="text-center mt-4 text-blue-100 text-sm">
                  Representando 6% do PIB nacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER 1 */}
      <WaveDivider color="#3B82F6" />

      {/* SEGUNDA SEÇÃO - ECONOMIA SOLIDÁRIA EM JABOATÃO */}
      <section id="jaboatao" className="relative py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ease-out ${segundaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} ref={segundaRef}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Economia Solidária em Jaboatão dos Guararapes
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Coluna do texto */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Coordenação de Economia Solidária
                  </h3>
                  <p className="text-gray-700">
                    Por meio da Coordenação de Economia Solidária, o município de Jaboatão apoia a organização de empreendimentos econômicos solidários, ajudando-os a formatar e elaborar projetos com o objetivo de proporcionar oportunidades de comercialização de produtos e serviços de grupos solidários.
                  </p>
                </div>

                <p className="text-gray-700">
                  Além disso, a Coordenação promove e fortalece o segmento, incentivando a constituição de cadeias produtivas, apoiando a organização, a legalização e o registro de empreendimentos; atua na difusão do artesanato local; promove a qualificação de artesãos; e apoia o cooperativismo popular.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-yellow-800 mb-3">Feiras Itinerantes</h4>
                  <p className="text-gray-700">
                    Exemplo disso são as Feiras Itinerantes de Economia Solidária realizadas no município que abrem oportunidades para artesãos comercializarem seus produtos, promovendo a geração de renda para os participantes.
                  </p>
                </div>
              </div>

              {/* Coluna da linha do tempo */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                  Marcos Importantes
                </h3>
                <div className="space-y-6 relative">
                  {/* Linha vertical */}
                  <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-yellow-500"></div>

                  {/* Evento 1 */}
                  <div className="relative flex items-start ml-10">
                    <div className="absolute -left-10 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div>
                      <h4 className="font-bold text-blue-900">Jan 2011</h4>
                      <p className="text-gray-700">Criação da SETQE</p>
                    </div>
                  </div>

                  {/* Evento 2 */}
                  <div className="relative flex items-start ml-10">
                    <div className="absolute -left-10 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div>
                      <h4 className="font-bold text-blue-900">Dez 2011</h4>
                      <p className="text-gray-700">Lei 711/2011 cria o CMEPS</p>
                    </div>
                  </div>

                  {/* Evento 3 */}
                  <div className="relative flex items-start ml-10">
                    <div className="absolute -left-10 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div>
                      <h4 className="font-bold text-blue-900">Mar 2014</h4>
                      <p className="text-gray-700">1ª Conferência Municipal de Economia Solidária</p>
                    </div>
                  </div>

                  {/* Evento 4 */}
                  <div className="relative flex items-start ml-10">
                    <div className="absolute -left-10 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div>
                      <h4 className="font-bold text-blue-900">Out 2014</h4>
                      <p className="text-gray-700">Inauguração do COPES</p>
                    </div>
                  </div>

                  {/* Evento 5 */}
                  <div className="relative flex items-start ml-10">
                    <div className="absolute -left-10 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div>
                      <h4 className="font-bold text-blue-900">Nov 2016</h4>
                      <p className="text-gray-700">Inauguração da Loja Bem Viver</p>
                      <p className="text-sm text-gray-600">Rua Hermano Barros e Silva, n.º 5204 - Candeias</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Estrutura Organizacional</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">SETQE</div>
                  <p className="text-gray-700">Secretaria Executiva de Trabalho, Qualificação e Empreendedorismo</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">CMEPS</div>
                  <p className="text-gray-700">Conselho Municipal de Economia Popular Solidária</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">FEPS/JG</div>
                  <p className="text-gray-700">Fórum de Economia Popular Solidária do Jaboatão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER 2 */}
      <WaveDivider color="#10B981" flip={true} />

      {/* TERCEIRA SEÇÃO - AÇÕES E EMPREENDIMENTOS */}
      <section id="acoes" className="relative py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ease-out ${terceiraVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} ref={terceiraRef}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Empreendimentos e Ações
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Conheça os empreendimentos incubados e as principais ações desenvolvidas no município
              </p>
            </div>

            {/* Empreendimentos Incubados */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-emerald-900 mb-8 text-center">
                11 Empreendimentos em Plena Atividade
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Associação Artes Curado",
                  "Associação de Moradores da Vila Esperança Emergente",
                  "Associação Nova Coveta",
                  "Associação de Artesãos Mãe Rainha",
                  "Centro de Saúde Alternativa da Muribeca – CESAM",
                  "Centro Interativo de Educação Cultural Rádio Cajueiro FM",
                  "Colônia de Pescadores Z 25",
                  "Cooperativa de Beneficiamento de Materiais Recicláveis dos Catadores Maria da Penha",
                  "Grupo Cultural Art Viva",
                  "Grupo Variedades",
                  "Mulheres Guerreiras"
                ].map((empreendimento, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <h4 className="ml-4 font-bold text-gray-800">{empreendimento}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Desenvolvendo negócios de forma sustentável e autogestora
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ações Desenvolvidas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Coluna 1 */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Consultorias Especializadas</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-blue-600 font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">Assessoria jurídica e contábil</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-blue-600 font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">Alteração estatutária e eleição de diretorias</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-blue-600 font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">Melhoria da qualidade dos produtos</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-blue-600 font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">Plano de negócios e controle financeiro</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Projeto Jaboatão Solidário</h3>
                  <p className="text-purple-100">
                    Implementação de ações para acompanhamento, formalização e organização dos empreendimentos solidários do Município com estratégias regionalizadas de comercialização.
                  </p>
                </div>
              </div>

              {/* Coluna 2 */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl p-8 text-white shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Projeto Jaboatão Gerando Renda Solidária</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">R$ 1,5 milhão</div>
                    <p className="text-yellow-100">Convênio com o Ministério do Trabalho</p>
                  </div>
                  <p className="text-yellow-100">
                    Implementação de ações de prática e aperfeiçoamento técnico para empreendimentos econômicos solidários e promoção de estratégias de sustentabilidade.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Reconhecimento Nacional e Internacional</h3>
                  <p className="text-gray-700 mb-4">
                    Jaboatão dos Guararapes é hoje uma referência que vai além de suas fronteiras, sendo reconhecida em todo o país e internacionalmente.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Programa Mercocidades</h4>
                    <p className="text-sm text-gray-700">
                      Faz parte do Programa Mercocidades no âmbito do Mercosul, colocando Jaboatão numa posição privilegiada quando o tema é desenvolvimento humano e solidário.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rodapé da seção */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg">
                Economia Solidária: Construindo um Futuro Mais Justo e Humano
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Secretaria Executiva de Trabalho, Qualificação e Empreendedorismo
            </h3>
            <p className="text-gray-400 mb-6">
              Coordenação de Economia Solidária - Jaboatão dos Guararapes - Pernambuco
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">11</div>
                <div className="text-sm text-gray-300">Empreendimentos incubados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">R$ 1,5M</div>
                <div className="text-sm text-gray-300">Investimento em projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">2011</div>
                <div className="text-sm text-gray-300">Início das atividades</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente WaveDivider
interface WaveDividerProps {
  color?: string;
  flip?: boolean;
  height?: number;
}

const WaveDivider = ({ color = "#3B82F6", flip = false, height = 80 }: WaveDividerProps) => {
  return (
    <div className="relative w-full" style={{ height: `${height}px` }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 2000 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-700 ease-out ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          opacity="0.33"
          d="M946 62.22C538.2 152.254 419.8 27.5523 305.4 62.22C132 115.037 0 54.4708 0 54.4708V-6.40161H2000V54.4708C2000 54.4708 1875.8 81.0833 1810.2 84.3462C1744.6 87.711 1684.6 71.8046 1658.6 61.8122C1612 44.1724 1490.6 2.46924 1389.8 -1.60931C1289 -5.68786 984.8 53.757 946 62.22Z"
          fill={color}
        />
        <path
          opacity="0.66"
          d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
          fill={color}
        />
        <path
          d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
          fill={color}
        />
      </svg>
    </div>
  );
};