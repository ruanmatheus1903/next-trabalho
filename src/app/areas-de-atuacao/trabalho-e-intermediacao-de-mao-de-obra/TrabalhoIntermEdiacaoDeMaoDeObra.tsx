"use client";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaBuilding } from "react-icons/fa";

const IntermediacaoMaoDeObra = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
              "Segundo o portal Emprega Brasil, 'a intermediação de mão de obra visa colocar 
              trabalhadores no mercado de trabalho por meio de vagas captadas junto a empregadores, 
              reduzindo o tempo de espera e a assimetria de informação existente no mercado de trabalho, 
              tanto para o trabalhador quanto para o empregador. Portanto, o serviço busca promover o 
              encontro de oferta e demanda de trabalho'."
            </p>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Num mundo em que as oscilações da economia produzem uma imensa variação entre 
              necessidades de recursos humanos e criação de novas oportunidades ao mesmo tempo 
              em que milhares de pessoas estão desempregadas e funções antigas estão sendo 
              extintas dando lugar a um novo perfil de demanda e oferta de mão de obra, a 
              intermediação funciona como uma alternativa bastante eficiente na realocação 
              de pessoal e atendimento às demandas do mercado, adequando profissionais e 
              empresas da melhor forma possível.
            </p>

            <p>
              A Coordenação de Trabalho e Intermediação de Mão Obra, por meio da SETQE em 
              uma parceria com o Ministério do Trabalho, é responsável pelos serviços oferecidos 
              no âmbito do Sistema Público de Emprego, Trabalho e Renda (SPETR) em Jaboatão dos 
              Guararapes e visa inserir profissionais no mercado. Trata-se de uma série de 
              programas e ações de intermediação de mão de obra, orientação profissional, 
              seguro-desemprego e qualificação profissional implementada pelo Município por 
              meio da sua rede institucional de atendimento ao trabalhador, a qual está 
              composta por uma agência matriz e cinco postos estrategicamente situados 
              nas regionais de Jaboatão.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RedeAtendimento = () => {
  const unidades = [
    {
      id: 1,
      nome: "MATRIZ DA AGÊNCIA DO TRABALHADOR DO JABOATÃO",
      endereco: "AV. BARÃO DE LUCENA, S/N – JABOATÃO CENTRO (Regional 1)",
      telefones: ["81 3482-0032", "81 3481-1099", "81 3481-5338"],
      email: "cvagas.agenciadotrabalhador@jaboatao.pe.gov.br",
      tipo: "matriz"
    },
    {
      id: 2,
      nome: "POSTO DE ATENDIMENTO DE CAVALEIRO",
      endereco: "PRAÇA SEVERINA RITA COELHO, Nº20 – CAVALEIRO (Regional 2)",
      telefones: ["81 3455-9410"],
      tipo: "posto"
    },
    {
      id: 3,
      nome: "POSTO DE ATENDIMENTO DE CURADO",
      endereco: "RUA LEONARDO DA VINCI, Nº 28 – CURADO II (Regional 3)",
      telefones: ["81 3255-1553"],
      tipo: "posto"
    },
    {
      id: 4,
      nome: "POSTO DE ATENDIMENTO DE MURIBECA",
      endereco: "EIXO DA INTEGRAÇÃO, Nº 3033 PE 07 – MURIBECA (Regional 4)",
      telefones: ["81 3377-5754"],
      tipo: "posto"
    },
    {
      id: 5,
      nome: "POSTO DE ATENDIMENTO DA REGIONAL PRAZERES",
      endereco: "RUA SANTO ELIAS, Nº 124, CAJUEIRO SECO – PRAZERES (Regional 5)",
      telefones: ["81 3378-1783"],
      tipo: "posto"
    },
    {
      id: 6,
      nome: "POSTO DE ATENDIMENTO DA REGIONAL PRAIAS",
      endereco: "AV. PRESIDENTE KENNEDY, Nº578 – PIEDADE (Regional 6)",
      telefones: ["81 3469-5476"],
      tipo: "posto"
    }
  ];

  return (
   <div className="py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Rede de Atendimento ao Trabalhador
      </h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {unidades.map((unidade) => (
        <div 
          key={unidade.id} 
          className={`bg-white rounded-xl shadow-lg border ${unidade.tipo === 'matriz' ? 'border-blue-300' : 'border-gray-200'} p-6`}
        >
          <div className="flex items-center mb-4">
            <div className={`w-10 h-10 rounded-full ${unidade.tipo === 'matriz' ? 'bg-blue-100' : 'bg-green-100'} flex items-center justify-center mr-3 flex-shrink-0`}>
              {unidade.tipo === 'matriz' ? (
                <FaBuilding className="text-blue-600" />
              ) : (
                <FaMapMarkerAlt className="text-green-600" />
              )}
            </div>
            <h3 className="font-bold text-gray-900 text-sm">{unidade.nome}</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700 text-sm break-words">{unidade.endereco}</p>
            </div>
            
            <div className="flex items-start">
              <FaPhone className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
              <div className="min-w-0">
                {unidade.telefones.map((tel, idx) => (
                  <p key={idx} className="text-gray-700 text-sm truncate">{tel}</p>
                ))}
              </div>
            </div>
            
            {unidade.email && (
              <div className="flex items-start">
                <FaEnvelope className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                <a 
                  href={`mailto:${unidade.email}`}
                  className="text-blue-600 hover:text-blue-800 text-sm break-all hover:underline truncate block"
                  title={unidade.email}
                >
                  {unidade.email}
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

// Componente principal que combina as duas seções
export default function IntermediacaoERede() {
  return (
    <>
      <IntermediacaoMaoDeObra />
      <RedeAtendimento />
    </>
  );
}