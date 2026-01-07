import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rede SIM - Secretaria de Desenvolvimento Econômico e Turismo',
};

export default function RedeSimPage() {
  return (
    <div className="overflow-hidden">
      {/* ÁREA COM GRADIENTE DE FUNDO */}
      <div className="relative py-16 px-4 sm:px-10 text-white flex items-center justify-center bg-gradient-to-b from-white via-blue-100 to-blue-400">
        {/* Gradiente de fundo */}
        <div className="fixed inset-0 w-full h-full -z-10"></div>
        
        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto px-4 w-full">
          {/* Título principal centralizado e em destaque */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">
              REDE SIM
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Seção OBJETIVO */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">OBJETIVO</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                Otimizar o tempo de abertura da empresa via rede de computadores, interligando a Junta Comercial – JUCEPE, órgãos Estaduais e Municipais, facilitando e simplificando com rapidez, propiciando agilidade e segurança aos processos de legalização.
              </p>
            </div>
          </div>

          {/* Seção SERVIÇOS REALIZADOS */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">SERVIÇOS REALIZADOS</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Consulta de Viabilidade</li>
                <li>Coleta Eletrônica de informações</li>
                <li>Registro e Inscrições Tributárias</li>
                <li>Licenciamento das atividades</li>
                <li>Alteração e Baixa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}