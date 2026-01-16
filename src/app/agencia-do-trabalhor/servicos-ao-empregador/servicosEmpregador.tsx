// src/app/agencia-do-trabalhor/servicos-ao-empregador/servicosEmpregador.tsx
"use client";

import React, { useState } from 'react';
import FormularioVagas from './FormularioVagas';

export default function ServicosEmpregador() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">

   

      {/* Primeira Seção - Serviços da Agência */}
      <section className="relative py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Serviços da Agência do Trabalhador do Jaboatão
            </h2>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              A Agência do Trabalhador do Jaboatão dispõe ainda de um banco de talentos qualificado e atualizado do qual empregadores podem fazer uso quando necessitarem de contratar pessoal para seus quadros. Além disso, o empregador também conta com uma infraestrutura adequada e suporte de psicólogos especializados em processos seletivos. Assim, o trabalhador é selecionado de acordo com perfil solicitado pela empresa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Sala do Empresário</h3>
                </div>
                <p className="text-gray-700">
                  A Sala do Empresário é climatizada, equipada com móveis, computadores e aparelhos de multimídia e está disponível gratuitamente para os empresários que necessitarem fazer uso dessa estrutura.
                </p>
              </div>

              <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-purple-800">Setor de Psicologia</h3>
                </div>
                <p className="text-gray-700">
                  São disponibilizados nesse setor, profissionais especializados em processos seletivos, os quais aplicam e corrigem testes psicológicos e de raciocínio lógico, dinâmicas de grupo, treinamentos, entrevistas e pré-seleção.
                </p>
              </div>

              <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800">Auditório</h3>
                </div>
                <p className="text-gray-700">
                  Espaço climatizado e multifuncional com capacidade para 60 pessoas e acessibilidade para pessoas com necessidades especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGUNDA SEÇÃO - OFERTA DE VAGAS COM HEADER DE ONDAS */}
      <div className="relative mt-16">
        <div className="relative text-center py-12 bg-gradient-to-b from-[#FFD24E] to-[#FDA417] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 tracking-tight">
            <span className="drop-shadow-xl">OFERTA DE VAGAS</span>
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

      {/* Seção de Informações do Portal Emprega Brasil */}
      <section className="relative py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              OFERTA DE VAGAS PELA AGÊNCIA DO TRABALHADOR DO JABOATÃO
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg mb-12">
            <div className="flex items-start">
              <div className="bg-yellow-500 p-3 rounded-lg mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-lg text-gray-800 mb-4">
                  O Portal Emprega Brasil, criado pelo Ministério do Trabalho, possibilita a divulgação gratuita de vagas para os trabalhadores cadastrados no sistema.
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  Para ofertar vagas, <span className="text-yellow-600">basta preencher o formulário abaixo</span> e em seguida <span className="text-yellow-600">enviar</span>. As informações seguirão ao Portal Emprega Brasil para divulgação e captação de mão de obra, conforme perfil exigido pelo contratante. Após o envio, aguarde o contato do SINE de Jaboatão.
                </p>
              </div>
            </div>
          </div>

          {/* Botão para mostrar/esconder formulário */}
          {!showForm ? (
            <div className="text-center">
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl inline-flex items-center transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Abrir Formulário de Vagas
              </button>
            </div>
          ) : (
            <div className="text-center mb-8">
              <button
                onClick={() => setShowForm(false)}
                className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition border border-gray-300"
              >
                Fechar Formulário
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Formulário Section (mostrado apenas quando showForm é true) */}
      {showForm && (
        <>
          <section className="relative py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800">Formulário de Cadastro de Vaga</h3>
                  <p className="text-gray-600 mt-2">Preencha todas as informações solicitadas</p>
                </div>
                
                <FormularioVagas onSuccess={() => setShowForm(false)} />
              </div>
            </div>
          </section>
        </>
      )}

    </div>
  );
}