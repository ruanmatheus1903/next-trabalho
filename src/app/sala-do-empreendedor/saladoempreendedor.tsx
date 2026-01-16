"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaClock, FaExternalLinkAlt } from "react-icons/fa";

// Dados dos endereços das agências
const agencias = [
  {
    id: 1,
    nome: "JABOATÃO CENTRO REGIONAL 01",
    endereco: "Av. Barão de Lucena, S/N",
    telefones: ["(81) 3482-5487 /", "(81) 3482-5494 /", "(81) 3482-5384"],
    horario: "Segunda à sexta - 08 às 14 horas",
    bairro: "Jaboatão Centro",
    cidade: "Jaboatão dos Guararapes",
    coordenadas: { lat: -8.1122, lng: -34.9996 },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7899.773549570481!2d-35.028494!3d-8.11301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1d375ceed533%3A0xd837a99c84e4e9ab!2sAv.%20Bar%C3%A3o%20de%20Lucena%20-%20Jaboat%C3%A3o%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1768586028120!5m2!1spt-BR!2sus" 
  },
  {
    id: 2,
    nome: "CAVALEIRO REGIONAL 02",
    endereco: "Praça Severina Rita Coelho, 20 - Cavaleiro",
    telefones: ["(81) 3455-8498"],
    horario: "Segunda à sexta - 08 às 14 horas",
    bairro: "Cavaleiro",
    cidade: "Jaboatão dos Guararapes",
    googleMapsEmbedUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7900.14514367345!2d-34.972839!3d-8.094082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1c480107fa67%3A0xae007c7be5738e7b!2sPra%C3%A7a%20Severina%20Rita%20Coelho%2C%2020%20-%20Cavaleiro%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054250-603%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1768586367425!5m2!1spt-BR!2sus" 
  },
  {
    id: 3,
    nome: "CURADO REGIONAL 03",
    endereco: "Rua Leonardo da Vinci, 28 - Curado II",
    telefones: [" (81) 3255-2412"],
    horario: "Segunda à sexta - 08 às 14 horas",
    bairro: "Curado",
    cidade: "Jaboatão dos Guararapes",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7900.426170525221!2d-34.997379!3d-8.079738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1c8bdb9eb44d%3A0x1a6ea667f86fc180!2sR.%20Leonardo%20da%20Vinci%2C%2028%20-%20Curado%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054220-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1768586812507!5m2!1spt-BR!2sus"
  },
  {
    id: 4,
    nome: "MURIBECA REGIONAL 04",
    endereco: "Eixo da integração, 3033 - Muribeca",
    telefones: ["(81) 3377-5517"],
    horario: "Segunda à sexta - 08 às 14 horas",
    bairro: "Muribeca",
    cidade: "Jaboatão dos Guararapes",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.325456016462!2d-35.0096!3d-8.1422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDgnMzEuOSJTIDM1wrAwMCczNC42Ilc!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
  },
  {
    id: 6,
    nome: "PRAIAS REGIONAL 06",
    endereco: "AV. Presidente Kennedy Nº 578",
    telefones: ["(81) 3469-5476"],
    horario: "Segunda à sexta - 08 às 14 horas",
    bairro: "Candeias",
    cidade: "Jaboatão dos Guararapes",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7898.23857584546!2d-34.920662!3d-8.190737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae10e342157fb%3A0x92fd23be1da80efc!2sAv.%20Pres.%20Kennedy%2C%20578%20-%20Candeias%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054440-411%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1768587312756!5m2!1spt-BR!2sus" 
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
    <div className="mt-12 mb-8">
  <div className="text-center max-w-4xl mx-auto">
    <div className="rounded-xl p-6 md:p-8   ">
      
      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
        A Sala do Empreendedor é uma parceria do Sebrae com as prefeituras para 
        incentivar a formalização de negócios informais. Além disso, o micro e 
        pequeno empreendedor poderá ser orientado sobre o programa municipal de 
        compras governamentais, linhas de financiamento, concessão de alvará, 
        tributações, promoções de palestras e oficinas para capacitação, entre 
        outros assuntos.
      </p>

      <div className="mb-6">
        <h4 className="text-xl py-5 mb-10 font-semibold text-gray-800">
          Na Sala do Empreendedor você tem os seguintes serviços:
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            {[
              "Formalização",
              "Certificado MEI", 
              "Comprovante de CNPJ",
              "Impressão de DAS",
             
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <ul className="space-y-2">
            {[
               "Declaração de faturamento",
              "Certidão de cancelamento (baixa)",
              "Parcelamento de débitos (MEI)", 
              "Palestras e oficinas para capacitação",
            
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 border border-blue-200">
        <p className="text-gray-800 mb-3">
          Para mais informações sobre empreendedorismo acesse o site oficial do 
          Portal do Empreendedor:
        </p>
        <a 
          href="https://www.portaldoempreendedor.gov.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium hover:underline"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
          www.portaldoempreendedor.gov.br
        </a>
      </div>
    </div>
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