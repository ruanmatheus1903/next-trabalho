import React from 'react';
import Link from 'next/link';

const IncentivoFiscais = () => {

  return (
    <div className="overflow-hidden">
      {/* ÁREA COM GRADIENTE DE FUNDO */}
      <div className="relative min-h-screen py-12 px-6 flex flex-col items-center bg-gradient-to-b from-white via-blue-100 to-blue-400">
        {/* Gradiente de fundo */}
        <div className="fixed inset-0 w-full h-full -z-10"></div>

        <div className="max-w-4xl mx-auto w-full text-justify text-black">
          {/* Primeira Seção */}
          <section className="mb-12">
            <h1 className="text-2xl font-bold mb-4 text-center">BENEFÍCIOS FISCAIS</h1>
            <p className="mb-4">
              A Lei Nº81 de março de 2006, regulamentada pelo decreto nº111/2009 tem por finalidade regulamentar a concessão de incentivos fiscais, com intuito
              de oferecer ou emprestando um instrumento capaz de aumentar sua capacidade de competição e assegurar a geração de emprego e renda ao
              município do Jaboatão dos Guararapes.
            </p>
            
            <p className="mb-6">
              Os benefícios desta lei serão concedidos às novas empresas e as que já estão estabelecidas no município, as empresas estabelecidas que necessitam
              se ampliar e se refocalizar.
            </p>

            <h2 className="text-xl font-bold mb-4">CARACTERIZAÇÃO DA EMPRESA</h2>
            <p className="mb-4">
              Documentações e informações básicas necessárias básicos para análise dos pleitos de habilitação ao gozo dos benefícios desta lei.
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Racial Social:</li>
              <li>CNPJ:</li>
              <li>JUCEPE:</li>
              <li>SETOR DA ATIVIDADE ECONÔMICA:</li>
              <li>OBJETIVO SOCIAL:</li>
              <li>CAPITAL SOCIAL:</li>
              <li>ADMINISTRAÇÃO E CONTROLE:</li>
              <li>EVOLUÇÃO DO CAPITAL:</li>
              <li>PROJETO:</li>
              <li>PLETIO:</li>
              <li>CARACTERÍSTICAS DO EMPREENDIMENTO.</li>
            </ul>

            <p className="mb-6">
              <Link href="/pdf/incentivo-fiscais/Lei-ordinaria-81-2006-Jaboatao-dos-guararapes-PE.pdf" target='_blank' className="text-blue-600 hover:underline">
                Clique AQUI para fazer o download da Lei Nº 81 de 28 de março de 2006.
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IncentivoFiscais;