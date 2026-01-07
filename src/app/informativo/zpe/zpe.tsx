"use client";
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ZPE - Zonas de Processamento de Exportação',
};

export default function ZPEPage() {
  return (
    <div className="overflow-hidden">
      {/* ÁREA COM GRADIENTE DE FUNDO */}
      <div className="relative py-16 px-4 sm:px-10 text-white flex items-center justify-center min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-400">
        {/* Gradiente de fundo */}
        <div className="fixed inset-0 w-full h-full -z-10"></div>
        
        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto px-4 py-8 w-full">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">
              ZONAS DE PROCESSAMENTO DE EXPORTAÇÃO
            </h1>
            <div className="h-1 bg-blue-600 w-1/4 mx-auto"></div>
          </div>

          {/* CONCEITO DE ZPE Section */}
          <Section title="CONCEITO DE ZPE">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                Caracterizam-se como áreas industriais preponderantemente exportadoras (80%) sob controle alfandegado (Zonas Primárias). Área segregada para controle, indústrias instaladas, administradora da ZPE e órgãos anuentes.
              </p>
              <p>
                É um distrito industrial onde empresas nele localizadas operam com suspensão de impostos, liberdade cambial e gozam de procedimentos administrativos simplificados.
              </p>
            </div>
          </Section>

          {/* PRINCIPAIS OBJETIVOS DAS ZPE NO BRASIL Section */}
          <Section title="PRINCIPAIS OBJETIVOS DAS ZPE NO BRASIL">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="list-disc pl-6 space-y-2">
                <li>Atrair investimentos estrangeiros e fortalecer o balanço de pagamentos</li>
                <li>Criação de empregos e redução de desequilíbrios regionais</li>
                <li>Promover o desenvolvimento econômico e social do país</li>
                <li>Promover a difusão tecnológica</li>
              </ul>
            </div>
          </Section>

          {/* BASE LEGAL Section */}
          <Section title="BASE LEGAL">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="list-disc pl-6 space-y-2">
                <li>Lei nº 11.508/2007 (alterada pelas Leis nº 11.784/2008 e nº 12.546/2011)</li>
                <li>Decretos nº 6.634/2008, nº 6.759/2009 e nº 6.814/2009</li>
                <li>Resoluções do CZPE</li>
                <li>Instrução Normativa SRF nº 952/2009</li>
                <li>Portarias RFB nº 2.438/2010 e nº 3.518/2011</li>
                <li>ZPEs autorizadas com fundamento na Lei nº 11.508/2007</li>
              </ul>
            </div>
          </Section>

          {/* PRINCIPAIS BENEFÍCIOS DO REGIME DAS ZPE Section */}
          <Section title="PRINCIPAIS BENEFÍCIOS DO REGIME DAS ZPE">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-blue-600 mb-3 text-lg">
                  Aquisição de Bens e Serviços - Mercado Interno
                </h3>
                <p className="text-gray-800 mb-3 font-medium">
                  Suspensão da exigência de:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-900">
                  <li>IPI</li>
                  <li>Cofins</li>
                  <li>PIS/Pasep</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-blue-600 mb-3 text-lg">
                  Aquisição de Bens e Serviços - Mercado Externo
                </h3>
                <p className="text-gray-800 mb-3 font-medium">
                  Suspensão da exigência de:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-900">
                  <li>AFRMM</li>
                  <li>Cofins Importação</li>
                  <li>PIS/Pasep Importação</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* BENEFÍCIOS TRIBUTÁRIOS E ADMINISTRATIVOS Section */}
          <Section title="BENEFÍCIOS TRIBUTÁRIOS E ADMINISTRATIVOS">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                As importações e exportações dispensam licença ou autorização de órgãos federais.
              </p>
              <p className="font-medium mb-2">Exceções:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Controles de interesses de segurança nacional</li>
                <li>Controles de ordem sanitária</li>
                <li>Controles de proteção ao meio ambiente</li>
                <li>Exportação de produtos destinados a países com os quais o Brasil mantenha convênio de pagamentos</li>
                <li>Produtos sujeitos ao regime de cotas de exportação</li>
                <li>Produtos sujeitos ao Imposto de Exportação (IE)</li>
              </ul>
            </div>
          </Section>

          {/* SEGURANÇA JURÍDICA Section */}
          <Section title="SEGURANÇA JURÍDICA">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                Os benefícios concedidos às empresas instaladas em ZPE são assegurados pelo prazo de 20 anos.
                O prazo pode ser prorrogado, por igual período, no caso de investimentos de grande vulto que exijam longos prazos de amortização.
              </p>
              <p>
                Outros regimes aduaneiros especiais não possuem prazo de vigência tão extenso, o que permite maior segurança aos investimentos realizados em ZPE.
              </p>
            </div>
          </Section>

          {/* VANTAGENS Section */}
          <Section title="VANTAGENS">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                Na Zona de Processamento de Exportação (ZPE), sua empresa vai usufruir de um tratamento fiscal e cambial diferenciado no processamento, na montagem, na fabricação e nos serviços para exportação livre de tributo.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Isenção de ICMS</li>
                <li>Redução de 75% do IR sobre os lucros</li>
                <li>Dispensa de licença de órgãos federais</li>
                <li>Suspensão de impostos de importação – IPI, AFRMM, PIS/COFINS</li>
                <li>Liberdade cambial</li>
                <li>Condições asseguradas pelo prazo de até 20 anos, prorrogáveis por mais 20</li>
              </ul>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

// Reusable Section Component
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b border-blue-200 pb-2">
        {title}
      </h2>
      <div className="text-gray-900">
        {children}
      </div>
    </section>
  );
}