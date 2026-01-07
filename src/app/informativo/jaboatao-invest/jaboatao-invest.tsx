"use client";

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import Link from 'next/link';

const JaboataoInvest = () => {
  // File path for the PPTX download (place your file in public/downloads folder)
  const pptxFilePath = "/downloads/apresentacao-jaboatao-invest.pptx";

  return (
    <div className="overflow-hidden bg-blue-400">
      {/* ÁREA COM GRADIENTE DE FUNDO */}
      <div className="relative py-12 px-6 flex flex-col items-center bg-gradient-to-b from-white via-blue-100 to-blue-400">
        {/* Gradiente de fundo */}
        <div className="absolute inset-0 w-full h-full -z-10"></div>

        {/* Primeira Seção - O PROGRAMA */}
        <section className="mb-16 pb-16 max-w-4xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8 text-blue-800 text-center">O PROGRAMA</h1>
          <div className="space-y-6 text-gray-700 text-justify">
            <p className="text-lg leading-relaxed">
              Jaboatão Invest é um programa ligado à Secretaria Municipal de Desenvolvimento Econômico e Sustentabilidade que tem como principal objetivo atrair investimentos e desburocratizar os processos de licenciamento do município. No ano de 2017 e 2018, algumas ações importantes foram executadas pela Secretaria de Desenvolvimento Econômico e Sustentabilidade (SDES) que buscou articular, junto ao Ministério Público Federal e Estadual, a liberação de projetos imobiliários no município, liberando 27 projetos imobiliários na orla. O Jaboatão Invest foi lançado no Centro Cultural Miguel Arraes com a presença de empresários do ramo imobiliário e da construção civil, com o objetivo de aquecer o mercado de imóveis na cidade. A previsão é de um investimento acima de R$ 620 milhões e a expectativa do setor é de que sejam gerados 16 mil empregos diretos e indiretos.
            </p>
            <p className="text-lg leading-relaxed">
              A decisão de liberar a construção de imóveis foi garantida por meio de estudo elaborado pela Agência Estadual do Meio Ambiente (CPRH) que, entre outros pontos, assegura a estabilidade da engorda da orla. Agora, os 27 projetos identificados no trecho entre a Rua São Sebastião, em Piedade, e a antiga Candelária, em Candeias, passam a receber o aval da prefeitura.
            </p>
            <p className="text-lg leading-relaxed">
              Além de assinar o decreto, o prefeito firmou convênio com o Sindicato da Indústria da Construção Civil no Estado de Pernambuco (Sinduscon-PE) e Associação das Empresas do Mercado Imobiliário de Pernambuco (Ademi-PE) para cooperação na desburocratização de licenciamentos e retiradas de documentos, agilização dos serviços, treinamento de mão de obra especializada e questões relativas à infraestrutura.
            </p>
          </div>
        </section>

        {/* Segunda Seção - Ações Realizadas */}
        <section className="mb-16 pb-16 max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">ALGUMAS AÇÕES JÁ REALIZADAS NO LANÇAMENTO DO PROGRAMA:</h2>
          <ul className="list-disc pl-8 space-y-4 text-gray-700">
            <li className="font-medium">LIBERAÇÃO DE ÁREAS URBANAS PARA NOVOS EMPREENDIMENTOS</li>
            <li className="font-medium">MODERNIZAÇÃO DO SISTEMA DE LICENCIAMENTO</li>
            <li className="font-medium">CAPACITAÇÃO DAS EMPRESAS LOCAIS PARA O FORNECIMENTO DE BENS E SERVIÇOS</li>
            <li className="font-medium">INTERMEDIAÇÃO NA CONTRATAÇÃO/TREINAMENTO DE MÃO DE OBRA LOCAL</li>
            <li className="font-medium">INTERLOCUÇÃO COM AS CONCESSIONÁRIAS DE SERVIÇO PÚBLICO. ALÉM DE MAIS MOBILIDADE E SANEAMENTO</li>
          </ul>
        </section>

        {/* Terceira Seção - Diferenciais do Município */}
        <section className="mb-16 pb-16 max-w-4xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8 text-blue-800 text-center">DIFERENCIAIS DO MUNICÍPIO</h1>
          <div className="space-y-12 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Proximidade ao Mercado Consumidor</h2>
              <p className="text-center">
                Jaboatão dos Guararapes está imerso no maior mercado consumidor de Pernambuco e do Nordeste do Brasil. Possui 2º maior PIB e a 2ª maior população do Estado, ficando atrás apenas da capital, Recife, com quem forma uma mancha urbana única. Em um raio de 800 quilômetros, tem acesso a 90% do PIB do Nordeste.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Mão de Obra Qualificada</h2>
              <p className="text-center">
                A população do Jaboatão dos Guararapes possui o melhor nível de escolaridade do território estratégico de Suape. Além disso, a população da capital e dos municípios vizinhos podem trabalhar em Jaboatão sem grandes dificuldades. A Agência do Trabalhador da cidade disponibiliza gratuitamente para as empresas e interessadas, um criterioso serviço de recrutamento e seleção de mão de obra, de acordo com o perfil solicitado. São mais de 30 mil profissionais inscritos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Disponibilidade de Terra e Água</h2>
              <p className="text-center">
                Jaboatão é cortado pela gigante adutora do sistema Pirapama, a maior obra hídrica da historia de Pernambuco, que tem capacidade para conduzir 5.130 litros/segundo de água. Outro fator relevante é que cerca de 40% de seu extenso território (256km2) ainda é rural, com possibilidades de novos usos. Logo, apesar da excelente localização, ainda é possível encontrar grandes áreas por preços baixos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Incentivos Fiscais</h2>
              <p className="text-center">
                Jaboatão dos Guararapes possui incentivos fiscais que proporcionam reduções consideráveis de IPTU e ISS. A cidade faz parte da área de abrangência do Programa de Desenvolvimento de Pernambuco (PRODEPE), que possibilita grande redução de ICMS. Além disso, por conta da SUDENE, há redução de 75% do Imposto de Renda sobre os lucros por 10 anos.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Quarta Seção - Download */}
      <section className="py-16 bg-gradient-to-b from-[#003470] to-[#002855] rounded-t-[50px] px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-full mb-5">
              <FiDownload className="text-4xl text-blue-300" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-2">DOWNLOAD</h2>
            <p className="text-blue-200 max-w-lg mx-auto">
              APRESENTAÇÃO JABOATÃO INVEST
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <Link
                href={pptxFilePath}
                className="group block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-500 rounded-2xl p-0.5 shadow-xl hover:shadow-2xl"
                download
              >
                <div className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-[15px] p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-5 p-3 bg-blue-700/50 rounded-full group-hover:bg-blue-600/60 transition-colors">
                      <FiDownload className="text-3xl text-blue-300 group-hover:text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                      VERSÃO EDITÁVEL
                    </h3>
                    
                    <p className="text-blue-300 mb-5 group-hover:text-blue-200 transition-colors">
                      Arquivo PPTX - 7,9 MB
                    </p>
                    
                    <div className="px-6 py-3 bg-blue-600 rounded-full text-sm font-medium tracking-wide group-hover:bg-blue-500 group-hover:shadow-lg transition-all">
                      Baixar Apresentação
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JaboataoInvest;