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

          <div className="mt-10">
            <h3 className="text-3xl font-bold text-blue-800 mb-6">
              CONFIRA NOSSOS ENDEREÇOS
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Layout Principal - Cards + Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Cards das Agências (2/3 da largura) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agencias.map((agencia) => (
                <div
                  key={agencia.id}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1 ${
                    agenciaSelecionada === agencia.id 
                      ? 'ring-2 ring-blue-500 border-blue-200' 
                      : 'border border-gray-200'
                  }`}
                  onClick={() => setAgenciaSelecionada(agencia.id)}
                >
                  {/* Indicador de seleção */}
                  {agenciaSelecionada === agencia.id && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  )}

                  {/* Header do Card */}
                  <div className={`p-4 ${agenciaSelecionada === agencia.id ? 'bg-gradient-to-r from-blue-50 to-indigo-50' : 'bg-white'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <FaMapMarkerAlt className="text-white text-lg" />
                        </div>
                        <span className="ml-3 text-xs font-semibold text-blue-800 uppercase tracking-wider">
                          AGÊNCIA {agencia.id}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                      {agencia.nome}
                    </h4>
                  </div>

                  {/* Corpo do Card */}
                  <div className="p-4 pt-0">
                    <div className="space-y-4">
                      {/* Endereço */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <FaMapMarkerAlt className="text-blue-600 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Endereço</p>
                          <p className="text-sm text-gray-800 mt-1">{agencia.endereco}</p>
                          <p className="text-xs text-gray-500 mt-1">{agencia.bairro} - {agencia.cidade}</p>
                        </div>
                      </div>

                      {/* Telefones */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <FaPhone className="text-green-600 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Telefone</p>
                          <div className="space-y-1 mt-1">
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
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                          <FaClock className="text-amber-600 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Horário</p>
                          <p className="text-sm text-gray-800 mt-1">{agencia.horario}</p>
                        </div>
                      </div>
                    </div>

                    {/* Botão Ver no Mapa */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        abrirNoMaps(agencia.endereco, agencia.cidade);
                      }}
                      className="mt-6 w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Ver no Mapa
                    </button>
                  </div>

                  {/* Efeito hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mapa e Informações Detalhadas (1/3 da largura) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Card de Agência Selecionada */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {agenciaAtiva?.nome}
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    {/* Mapa (placeholder interativo) */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                      <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 relative">
                        {/* Simulação de mapa com marcador */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="relative inline-block">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <FaMapMarkerAlt className="text-white text-2xl" />
                              </div>
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
                            </div>
                            <p className="text-gray-700 font-medium">Localização da Agência</p>
                            <p className="text-sm text-gray-500 mt-1">{agenciaAtiva?.bairro}</p>
                          </div>
                        </div>
                        
                        {/* Pontos de referência no "mapa" */}
                        <div className="absolute top-4 left-4 w-3 h-3 bg-gray-400 rounded-full"></div>
                        <div className="absolute top-8 right-8 w-3 h-3 bg-gray-400 rounded-full"></div>
                        <div className="absolute bottom-8 left-8 w-3 h-3 bg-gray-400 rounded-full"></div>
                        <div className="absolute bottom-12 right-12 w-3 h-3 bg-gray-400 rounded-full"></div>
                      </div>
                      
                      <button
                        onClick={() => abrirNoMaps(agenciaAtiva?.endereco || '', agenciaAtiva?.cidade || '')}
                        className="mt-4 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                      >
                        <FaExternalLinkAlt />
                        Abrir no Google Maps
                      </button>
                    </div>

                    {/* Informações Detalhadas */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-gray-900 border-b pb-2">Informações Detalhadas</h4>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Bairro</p>
                          <p className="text-lg font-bold text-gray-900">{agenciaAtiva?.bairro}</p>
                        </div>
                        
                        <div className="bg-indigo-50 p-4 rounded-xl">
                          <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">Cidade</p>
                          <p className="text-lg font-bold text-gray-900">{agenciaAtiva?.cidade}</p>
                        </div>
                      </div>

                      {/* Horário em destaque */}
                      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-xl border border-amber-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <FaClock className="text-amber-600" />
                          </div>
                          <div>
                            <p className="text-sm text-amber-700 font-semibold">Horário de Funcionamento</p>
                            <p className="text-xl font-bold text-gray-900">{agenciaAtiva?.horario}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legenda do Mapa */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-500" />
                  Como Chegar
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Agência selecionada no mapa
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    Pontos de referência próximos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    Localização ativa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Informativo */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-blue-900 mb-4">
              ✨ Encontre a Agência Mais Próxima de Você
            </h4>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Todas as agências oferecem serviços gratuitos de intermediação de mão de obra, 
              cadastro de currículos, orientação profissional e informações sobre o mercado de trabalho.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                🆓 Serviços Gratuitos
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                📋 Cadastro de Currículos
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                💼 Intermediação de Emprego
              </span>
              <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                🕐 Atendimento das 8h às 16h
              </span>
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