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
    coordenadas: { lat: -8.1122, lng: -34.9996 },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.325456016462!2d-34.9996!3d-8.1122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDYnNDMuOSJTIDM0wrA1OSc1OC42Ilc!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
  },
  {
    id: 2,
    nome: "AGÊNCIA DO TRABALHADOR CAVALEIRO",
    endereco: "Rua Principal, 123",
    telefones: ["81 3482-XXXX", "81 3482-XXXX"],
    horario: "08h às 16h",
    bairro: "Cavaleiro",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1322, lng: -34.9796 },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.325456016462!2d-34.9796!3d-8.1322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDcnNTUuOSJTIDM0wrA1OCc0Ni42Ilc!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
  },
  {
    id: 3,
    nome: "AGÊNCIA DO TRABALHADOR PRAZERES",
    endereco: "Av. Beira Mar, 456",
    telefones: ["81 3482-YYYY", "81 3482-YYYY"],
    horario: "08h às 16h",
    bairro: "Prazeres",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1222, lng: -34.9896 },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.325456016462!2d-34.9896!3d-8.1222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDcnMTkuOSJTIDM0wrA1OScyMi42Ilc!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
  },
  {
    id: 4,
    nome: "AGÊNCIA DO TRABALHADOR CUIABÁ",
    endereco: "Rua Cuiabá, 789",
    telefones: ["81 3482-ZZZZ", "81 3482-ZZZZ"],
    horario: "08h às 16h",
    bairro: "Cuiabá",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1422, lng: -35.0096 },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.325456016462!2d-35.0096!3d-8.1422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDgnMzEuOSJTIDM1wrAwMCczNC42Ilc!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
  },
  {
    id: 5,
    nome: "AGÊNCIA DO TRABALHADOR MURIBECA",
    endereco: "Av. Muribeca, 101",
    telefones: ["81 3482-AAAA", "81 3482-AAAA"],
    horario: "08h às 16h",
    bairro: "Muribeca",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1522, lng: -35.0196 },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.325456016462!2d-35.0196!3d-8.1522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDknMDcuOSJTIDM1wrAwMScxMC42Ilc!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
  },
  {
    id: 6,
    nome: "AGÊNCIA DO TRABALHADOR JARDIM PRAIA",
    endereco: "Rua da Praia, 202",
    telefones: ["81 3482-BBBB", "81 3482-BBBB"],
    horario: "08h às 16h",
    bairro: "Jardim Praia",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1622, lng: -35.0296 },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.325456016462!2d-35.0296!3d-8.1622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDknNDMuOSJTIDM1wrAwMSc0Ni42Ilc!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
  }
];

export default function AgenciasTrabalho() {
  const [agenciaSelecionada, setAgenciaSelecionada] = useState(1);

  const agenciaAtiva = agencias.find(ag => ag.id === agenciaSelecionada);

  // Função para abrir o Google Maps em nova aba
  const abrirNoMaps = (endereco: string, cidade: string) => {
    const enderecoFormatado = `${endereco}, ${cidade}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoFormatado)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="agencias" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      {/* Informação adicional simples */}
      
        <div className="mt-12 mb-8  ">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sobre as Agências do Trabalhador
            </h3>
            <p className="text-gray-600">
             É uma Unidade técnica subordinada à Secretaria Executiva de Trabalho, Qualificação e Empreendedorismo da Prefeitura do Jaboatão dos Guararapes, em parceria com o Ministério do Trabalho. É responsável pela execução do conjunto de ações e serviços do Sistema Público de Emprego, Trabalho e Renda, cujo objetivo é facilitar o acesso dos trabalhadores ao mercado de trabalho contribuindo com a redução do tempo médio de desemprego.
            </p>
          </div>
        </div>

        {/* Layout Principal: Cards + Mapa */}
        <div className="flex py-20 border-t border-gray-300 flex-col lg:flex-row gap-8">
          {/* Coluna dos Cards (Esquerda) */}
          <div className="lg:w-1/2">
            <div className="space-y-4">
              {agencias.map((agencia) => (
                <div
                  key={agencia.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    agenciaSelecionada === agencia.id 
                      ? 'border-blue-500 bg-blue-50 shadow-md' 
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setAgenciaSelecionada(agencia.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {agencia.nome}
                      </h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-start">
                          <FaMapMarkerAlt className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                          <span>{agencia.endereco} - {agencia.bairro}</span>
                        </div>
                        <div className="flex items-center">
                          <FaPhone className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                          <div className="flex gap-2">
                            {agencia.telefones.map((tel, idx) => (
                              <a 
                                key={idx}
                                href={`tel:${tel}`}
                                className="text-blue-600 hover:text-blue-800 hover:underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {tel}
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                          <span>{agencia.horario}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Indicador de seleção */}
                    {agenciaSelecionada === agencia.id && (
                      <div className="ml-4 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      abrirNoMaps(agencia.endereco, agencia.cidade);
                    }}
                    className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <FaExternalLinkAlt className="w-3 h-3 mr-1" />
                    Ver rota no Google Maps
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna do Mapa (Direita) */}
          <div className="lg:w-1/2">
            <div className="sticky top-4">
              {/* Card do Mapa */}
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                {/* Header do Mapa */}
                <div className="bg-gray-900 text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="w-5 h-5 mr-2" />
                      <h3 className="font-semibold">Localização da Agência</h3>
                    </div>
                    <span className="text-sm bg-blue-500 px-2 py-1 rounded">
                      {agenciaAtiva?.bairro}
                    </span>
                  </div>
                </div>

                {/* Mapa Embed do Google Maps */}
                <div className="h-96 bg-gray-100">
                  {agenciaAtiva?.googleMapsEmbedUrl ? (
                    <iframe
                      src={agenciaAtiva.googleMapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa da ${agenciaAtiva.nome}`}
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <FaMapMarkerAlt className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                        <p>Carregando mapa...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Informações da Agência Selecionada */}
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="mb-3">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {agenciaAtiva?.nome}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {agenciaAtiva?.endereco} • {agenciaAtiva?.bairro}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">Horário</p>
                      <p className="font-medium text-gray-900">{agenciaAtiva?.horario}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">Telefone</p>
                      {agenciaAtiva?.telefones.map((tel, idx) => (
                        <a 
                          key={idx}
                          href={`tel:${tel}`}
                          className="block font-medium text-blue-600 hover:text-blue-800"
                        >
                          {tel}
                        </a>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => abrirNoMaps(agenciaAtiva?.endereco || '', agenciaAtiva?.cidade || '')}
                    className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                    Abrir no Google Maps
                  </button>

                  <div className="mt-3 text-xs text-gray-500 text-center">
                    Arraste e clique no mapa para explorar a região
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}