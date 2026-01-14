"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaClock, FaExternalLinkAlt } from "react-icons/fa";

// Dados dos endereços das agências
const agencias = [
  {
    id: 1,
    nome: "JABOATÃO CENTRO REGIONAL 01",
    endereco: "Av. BARÃO DE LUCENA, S/N",
    telefones: ["81 3482-5487", "81 3482-5494", "81 3482-5384"],
    horario: "08h às 16h",
    bairro: "Jaboatão Centro",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1122, lng: -34.9996 }
  },
  {
    id: 2,
    nome: "AGÊNCIA DO TRABALHADOR CAVALEIRO",
    endereco: "Rua Principal, 123",
    telefones: ["81 3482-XXXX", "81 3482-XXXX"],
    horario: "08h às 16h",
    bairro: "Cavaleiro",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1322, lng: -34.9796 }
  },
  {
    id: 3,
    nome: "AGÊNCIA DO TRABALHADOR PRAZERES",
    endereco: "Av. Beira Mar, 456",
    telefones: ["81 3482-YYYY", "81 3482-YYYY"],
    horario: "08h às 16h",
    bairro: "Prazeres",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1222, lng: -34.9896 }
  },
  {
    id: 4,
    nome: "AGÊNCIA DO TRABALHADOR CUIABÁ",
    endereco: "Rua Cuiabá, 789",
    telefones: ["81 3482-ZZZZ", "81 3482-ZZZZ"],
    horario: "08h às 16h",
    bairro: "Cuiabá",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1422, lng: -35.0096 }
  },
  {
    id: 5,
    nome: "AGÊNCIA DO TRABALHADOR MURIBECA",
    endereco: "Av. Muribeca, 101",
    telefones: ["81 3482-AAAA", "81 3482-AAAA"],
    horario: "08h às 16h",
    bairro: "Muribeca",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1522, lng: -35.0196 }
  },
  {
    id: 6,
    nome: "AGÊNCIA DO TRABALHADOR JARDIM PRAIA",
    endereco: "Rua da Praia, 202",
    telefones: ["81 3482-BBBB", "81 3482-BBBB"],
    horario: "08h às 16h",
    bairro: "Jardim Praia",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1622, lng: -35.0296 }
  }
];

export default function AgenciasTrabalho() {
  const [agenciaSelecionada, setAgenciaSelecionada] = useState(1);

  const agenciaAtiva = agencias.find(ag => ag.id === agenciaSelecionada);

  // Função para abrir o Google Maps
  const abrirNoMaps = (endereco: string, cidade: string) => {
    const enderecoFormatado = `${endereco}, ${cidade}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoFormatado)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="agencias" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            AGÊNCIA DO TRABALHADOR
            <span className="block text-blue-600">DO JABOATÃO DOS GUARARAPES</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              É uma Unidade técnica subordinada à Secretaria Executiva de Trabalho, 
              Qualificação e Empreendedorismo da Prefeitura do Jaboatão dos Guararapes, 
              em parceria com o Ministério do Trabalho. É responsável pela execução 
              do conjunto de ações e serviços do Sistema Público de Emprego, Trabalho 
              e Renda, cujo objetivo é facilitar o acesso dos trabalhadores ao mercado 
              de trabalho contribuindo com a redução do tempo médio de desemprego.
            </p>
          </div>

          {/* WAVES DE ENDEREÇO - AJUSTADO */}
          <div className="relative mt-16 mb-12">
            <div className="relative text-center py-12 bg-gradient-to-b from-[#1e40af] to-[#1e3a8a] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 tracking-tight">
                <span className="drop-shadow-xl">CONFIRA NOSSOS ENDEREÇOS</span>
              </h1>
              <p className="text-white/90 mt-3 text-lg md:text-xl font-light relative z-10">
                Agência do Trabalhador - Jaboatão dos Guararapes
              </p>
            </div>

            {/* WAVES SVG - AJUSTADO */}
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
                  fill="#1e40af"
                  className="transition-all duration-1000"
                />
                <path
                  opacity="0.66"
                  d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
                  fill="#1e40af"
                  className="transition-all duration-800"
                />
                <path
                  d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
                  fill="#1e40af"
                  className="transition-all duration-600"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Layout Principal - Cards ao lado do Mapa */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Cards das Agências (lado esquerdo) */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agencias.map((agencia) => (
                <div
                  key={agencia.id}
                  className={`group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer ${
                    agenciaSelecionada === agencia.id 
                      ? 'ring-2 ring-blue-500 border-blue-200 transform scale-[1.02]' 
                      : 'border border-gray-200 hover:-translate-y-1'
                  }`}
                  onClick={() => setAgenciaSelecionada(agencia.id)}
                >
                  {/* Header do Card */}
                  <div className={`p-4 ${agenciaSelecionada === agencia.id ? 'bg-blue-50' : 'bg-white'}`}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        agenciaSelecionada === agencia.id 
                          ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
                          : 'bg-gradient-to-br from-blue-500 to-blue-600'
                      }`}>
                        <FaMapMarkerAlt className="text-white text-lg" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">
                          {agencia.nome}
                        </h4>
                        <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                          Agência {agencia.id}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corpo do Card */}
                  <div className="p-4 pt-0">
                    <div className="space-y-4">
                      {/* Endereço */}
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaMapMarkerAlt className="text-blue-600 text-xs" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 font-medium">Endereço</p>
                          <p className="text-sm text-gray-800 mt-0.5">{agencia.endereco}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{agencia.bairro}</p>
                        </div>
                      </div>

                      {/* Telefones */}
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaPhone className="text-green-600 text-xs" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 font-medium">Telefone</p>
                          <div className="space-y-0.5 mt-0.5">
                            {agencia.telefones.map((tel, idx) => (
                              <a 
                                key={idx}
                                href={`tel:${tel}`}
                                className="block text-sm text-blue-700 hover:text-blue-900 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {tel}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Horário */}
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaClock className="text-amber-600 text-xs" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 font-medium">Horário</p>
                          <p className="text-sm text-gray-800 mt-0.5">{agencia.horario}</p>
                        </div>
                      </div>
                    </div>

                    {/* Botão Ver no Mapa */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        abrirNoMaps(agencia.endereco, agencia.cidade);
                      }}
                      className="mt-4 w-full py-2 px-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Ver no Mapa
                    </button>
                  </div>

                  {/* Indicador de seleção */}
                  {agenciaSelecionada === agencia.id && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mapa (lado direito) */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              {/* Card do Mapa */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100 h-full">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <FaMapMarkerAlt />
                    Mapa Interativo
                  </h3>
                </div>
                
                <div className="p-4">
                  {/* Mapa em destaque */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200 mb-4">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 relative">
                      {/* Simulação de mapa com marcador principal */}
                      <div className="absolute inset-0">
                        {/* Estradas */}
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1 bg-gray-300 transform rotate-45"></div>
                        <div className="absolute top-1/4 left-1/4 w-1 h-1/2 bg-gray-300 transform -rotate-45"></div>
                        
                        {/* Rios ou riachos */}
                        <div className="absolute top-2/3 left-1/3 w-1/3 h-1 bg-blue-300 rounded-full"></div>
                        
                        {/* Áreas verdes */}
                        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-green-200 rounded-full"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-green-200 rounded-full"></div>
                        
                        {/* Agência selecionada (marcador principal) */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                              <FaMapMarkerAlt className="text-white text-xl" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                            
                            {/* Tooltip */}
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 min-w-[160px]">
                              <p className="text-xs font-bold text-gray-900">{agenciaAtiva?.nome.split(' ')[0]}</p>
                              <p className="text-xs text-gray-600 mt-1">{agenciaAtiva?.bairro}</p>
                              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Outras agências (marcadores secundários) */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow"></div>
                        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow"></div>
                        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow"></div>
                        
                        {/* Rótulos das ruas */}
                        <div className="absolute top-1/4 left-1/4 transform -translate-y-2">
                          <span className="text-xs text-gray-500 bg-white/80 px-1 py-0.5 rounded">Av. Principal</span>
                        </div>
                        <div className="absolute bottom-1/3 right-1/4 transform translate-y-2">
                          <span className="text-xs text-gray-500 bg-white/80 px-1 py-0.5 rounded">Rua Secundária</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Informações da Agência Selecionada */}
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-gray-900 border-b pb-2">
                      {agenciaAtiva?.nome}
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-xs text-blue-600 font-semibold uppercase">Bairro</p>
                        <p className="text-sm font-bold text-gray-900">{agenciaAtiva?.bairro}</p>
                      </div>
                      
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <p className="text-xs text-indigo-600 font-semibold uppercase">Cidade</p>
                        <p className="text-sm font-bold text-gray-900">{agenciaAtiva?.cidade}</p>
                      </div>
                    </div>

                    {/* Endereço completo */}
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600 font-semibold uppercase mb-1">Endereço Completo</p>
                      <p className="text-sm text-gray-800">{agenciaAtiva?.endereco}</p>
                    </div>

                    {/* Horário em destaque */}
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border border-amber-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                          <FaClock className="text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs text-amber-700 font-semibold">Horário de Funcionamento</p>
                          <p className="text-base font-bold text-gray-900">{agenciaAtiva?.horario}</p>
                        </div>
                      </div>
                    </div>

                    {/* Botão para abrir no Google Maps */}
                    <button
                      onClick={() => abrirNoMaps(agenciaAtiva?.endereco || '', agenciaAtiva?.cidade || '')}
                      className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 mt-2"
                    >
                      <FaExternalLinkAlt />
                      Abrir no Google Maps
                    </button>
                  </div>

                  {/* Legenda */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="text-xs font-semibold text-gray-700 mb-2">Legenda do Mapa</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white"></div>
                        <span className="text-xs text-gray-600">Agência Ativa</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-blue-400 border-2 border-white"></div>
                        <span className="text-xs text-gray-600">Outras Agências</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        <span className="text-xs text-gray-600">Localização</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                        <span className="text-xs text-gray-600">Áreas Verdes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS personalizados */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}