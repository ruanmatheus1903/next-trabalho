"use client";
import { useState } from "react";
import { 
  FaHandshake, 
  FaShieldAlt, 
  FaGraduationCap, 
  FaUsers, 
  FaIdCard, 
  FaBriefcase,
  FaFileAlt,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaUserTie,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaBookOpen
} from "react-icons/fa";

export default function ServicosPage() {
  const [activeSection, setActiveSection] = useState("intermediacao");

  const sections = [
    { id: "intermediacao", label: "Intermediação", icon: FaHandshake },
    { id: "seguro", label: "Seguro Desemprego", icon: FaShieldAlt },
    { id: "qualificacao", label: "Qualificação", icon: FaGraduationCap },
    { id: "juventude", label: "Juventude", icon: FaUsers },
    { id: "ctps", label: "CTPS Digital", icon: FaIdCard },
    { id: "vagas", label: "Vagas", icon: FaBriefcase }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navegação - Sem scroll horizontal */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {sections.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105"
                      : "text-blue-800 hover:bg-blue-50 border border-blue-200 hover:border-blue-300"
                  }`}
                >
                  <Icon className="mr-2" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Seção 1: Intermediação de Mão de Obra */}
        {activeSection === "intermediacao" && (
          <section className="mb-12 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 px-8 py-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mr-4">
                    <FaHandshake className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Intermediação de Mão de Obra
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    As ações na área de intermediação de mão de obra são desenvolvidas de forma integrada e articulada com as demais áreas, facilitando o encaminhamento do trabalhador desempregado ou sob-risco de desocupação, para que ele possa retornar ao mercado de trabalho num menor espaço de tempo.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                      <FaInfoCircle className="mr-2" />
                      Para isto, é necessário:
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Comparecimento em um dos 6 (seis) Postos de Atendimento da Agência do Trabalhador para realização do cadastro pessoal e curricular, munido dos seguintes documentos:
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <FaBookOpen className="mr-3 text-blue-600" />
                      Documentos Necessários
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { doc: "RG", desc: "Documento de Identidade" },
                        { doc: "CPF", desc: "Cadastro de Pessoa Física" },
                        { doc: "CTPS", desc: "Carteira de Trabalho" },
                        { doc: "Comprovante de Residência", desc: "Conta de luz, água ou telefone" },
                        { doc: "Nº do PIS/NIT", desc: "Número do PIS ou NIT" },
                        { doc: "Certificado Militar", desc: "Para pessoas do sexo masculino acima de 18 anos" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                          <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-900">{item.doc}</h4>
                            <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-yellow-800 mb-2">📌 Informação Importante</h4>
                    <p className="text-yellow-700">
                      Todos os documentos devem ser originais. Traga também cópias para agilizar o atendimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Seção 2: Seguro Desemprego */}
        {activeSection === "seguro" && (
          <section className="mb-12 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mr-4">
                    <FaShieldAlt className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Seguro Desemprego
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    O seguro desemprego é um benefício de natureza temporária destinado a prestar assistência financeira ao trabalhador desempregado que foi dispensado sem justa causa, auxiliando o mesmo na busca de emprego com ações integradas de orientação, recolocação e qualificação profissional.
                  </p>

                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <FaFileAlt className="mr-3 text-green-600" />
                      Como requerer o benefício?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      O trabalhador deverá comparecer a um dos nossos postos de atendimento munido dos seguintes documentos:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Guias do seguro-desemprego conforme Resolução CODEFAT nº 736 (Empregador Web)",
                        "Cartão do PIS-Pasep, extrato atualizado ou Cartão do Cidadão",
                        "Carteira de Trabalho e Previdência Social- CTPS (verificar todas que o requerente possuir)",
                        "Termo de Rescisão do Contrato de Trabalho – TRCT devidamente quitado",
                        "Carteira de trabalho (modelo novo); ou Passaporte ou certificado de reservista",
                        "Três últimos contracheques, dos três meses anteriores ao mês de demissão",
                        "Documento de levantamento dos depósitos do FGTS (CPFGTS) ou extrato comprobatório dos depósitos ou relatório da fiscalização ou documento judicial (Certidão das Comissões de Conciliação Prévia / Núcleos Intersindicais / Sentença / Certidão da Justiça)",
                        "Comprovante de residência",
                        "Comprovante de escolaridade",
                        "Documentos de Identificação: Carteira de identidade; ou Certidão de nascimento; ou Certidão de casamento com o protocolo de requerimento da identidade (somente para recepção); ou Carteira nacional de habilitação (modelo novo); ou Carteira de trabalho (modelo novo); ou Passaporte ou certificado de reservista"
                      ].map((documento, index) => (
                        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="bg-blue-100 text-blue-800 text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{documento}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">ℹ️ Informações Adicionais</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Comparecer pessoalmente ao posto de atendimento</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Levar documentos originais e cópias</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Atendimento por ordem de chegada</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Seção 3: Qualificação Social e Profissional */}
        {activeSection === "qualificacao" && (
          <section className="mb-12 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mr-4">
                    <FaGraduationCap className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Qualificação Social e Profissional
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Os trabalhadores inscritos na Agência do Trabalhador do Jaboatão podem participar de cursos de qualificação social e profissional. Os cursos são estruturados para atender às necessidades do mercado, buscando a melhoria da qualidade da força de trabalho em diversos setores econômicos do município e da Região.
                  </p>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Além de preparar os trabalhadores para o exercício de uma profissão, os cursos enfocam temas ligados aos direitos sociais e trabalhistas, meio ambiente, empreendedorismo e o estímulo à melhoria da escolaridade.
                  </p>

                  <div className="bg-purple-50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">🎯 Temas Abordados nos Cursos</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        "Direitos Sociais",
                        "Direitos Trabalhistas",
                        "Meio Ambiente",
                        "Empreendedorismo",
                        "Escolaridade",
                        "Marketing Pessoal",
                        "Tecnologia",
                        "Gestão"
                      ].map((tema, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 text-center border border-purple-200">
                          <span className="text-sm font-medium text-purple-700">{tema}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <FaUserTie className="mr-2 text-blue-600" />
                      Benefícios da Qualificação
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Aumento das chances de empregabilidade",
                        "Melhoria da qualidade da mão de obra",
                        "Atendimento às demandas do mercado local",
                        "Desenvolvimento de habilidades técnicas e sociais",
                        "Preparação para diferentes setores da economia"
                      ].map((beneficio, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <FaCheckCircle className="text-green-600 text-sm" />
                          </div>
                          <span className="text-gray-700">{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Seção 4: Ações para a Juventude */}
        {activeSection === "juventude" && (
          <section className="mb-12 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mr-4">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Ações para a Juventude
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    A Agência do Trabalhador do Jaboatão desenvolve ainda ações para os jovens que procuram oportunidades de trabalho. São realizadas palestras de orientação profissional, demandas do mercado de trabalho, marketing profissional, elaboração de "curriculum vitae" com psicólogos qualificados para a função.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">🎯 Serviços Oferecidos para Jovens</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Palestras de Orientação",
                          desc: "Informações sobre o mercado de trabalho e oportunidades",
                          icon: "🎤"
                        },
                        {
                          title: "Marketing Profissional",
                          desc: "Como se apresentar e se comunicar no ambiente profissional",
                          icon: "📈"
                        },
                        {
                          title: "Elaboração de Currículo",
                          desc: "Auxílio na criação de currículo com psicólogos especializados",
                          icon: "📄"
                        },
                        {
                          title: "Preparação para Entrevistas",
                          desc: "Simulações e dicas para entrevistas de emprego",
                          icon: "💼"
                        }
                      ].map((servico, index) => (
                        <div key={index} className="bg-orange-50 rounded-lg p-6 border border-orange-200 hover:border-orange-300 transition-colors">
                          <div className="text-3xl mb-3">{servico.icon}</div>
                          <h4 className="text-lg font-bold text-orange-800 mb-2">{servico.title}</h4>
                          <p className="text-gray-700">{servico.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">📝 Como Participar</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-blue-800 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Compareça à Agência</h4>
                          <p className="text-gray-700">Visite um dos nossos postos de atendimento</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-blue-800 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Faça seu Cadastro</h4>
                          <p className="text-gray-700">Registre-se no sistema da Agência do Trabalhador</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-blue-800 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Participe das Atividades</h4>
                          <p className="text-gray-700">Inscreva-se nas palestras e workshops disponíveis</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Seção 5: Emissão de CTPS */}
        {activeSection === "ctps" && (
          <section className="mb-12 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-lg border border-cyan-100 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-8 py-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mr-4">
                    <FaIdCard className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Emissão de Carteira de Trabalho e Previdência Social (CTPS)
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      <strong>Informamos que por determinação do Ministério da Economia, a Carteira física de trabalho será substituída pela CARTEIRA DE TRABALHO DIGITAL.</strong> Portanto, a partir do dia 01/03/2020 o serviço de agendamento de CTPS estará suspenso em nosso site, pois, não estaremos realizando emissão de carteiras físicas nos postos das agências do trabalho no município.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-6">📱 Como Acessar a Carteira Digital</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center mr-3">
                          <FaExternalLinkAlt className="text-cyan-600" />
                        </div>
                        <h4 className="text-lg font-bold text-cyan-800">Via Aplicativo</h4>
                      </div>
                      <p className="text-gray-700 mb-4">Baixe gratuitamente o aplicativo conforme sua plataforma:</p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center mr-2 text-xs">A</div>
                          <span className="text-gray-700">AppleStore (iOS)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-2 text-xs">P</div>
                          <span className="text-gray-700">Play Store (Android)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                          <FaExternalLinkAlt className="text-blue-600" />
                        </div>
                        <h4 className="text-lg font-bold text-blue-800">Via Web</h4>
                      </div>
                      <p className="text-gray-700 mb-4">Acesse pelo navegador:</p>
                      <div className="bg-white rounded-lg p-4 border border-gray-300">
                        <a 
                          href="https://servicos.mte.gov.br" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium break-all"
                        >
                          https://servicos.mte.gov.br
                        </a>
                        <p className="text-sm text-gray-600 mt-2">Onde estará disponível o passo a passo do serviço oferecido.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-300">
                    <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-blue-600" />
                      Precisa de Ajuda?
                    </h4>
                    <p className="text-gray-700">
                      Caso tenham alguma dificuldade na confecção da carteira de trabalho digital, orientamos que se dirija ao posto da agência do trabalhador mais próximo de sua residência.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Seção 6: Oferta de Vagas */}
        {activeSection === "vagas" && (
          <section className="mb-12 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 px-8 py-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mr-4">
                    <FaBriefcase className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    OFERTA DE VAGAS PELA AGÊNCIA DO TRABALHADOR DO JABOATÃO
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <FaUserTie className="mr-3 text-blue-600" />
                      Para o Trabalhador
                    </h3>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      O trabalhador que estiver procurando emprego poderá realizar buscas e cadastrar seu currículo no sistema. Uma vez feito o cadastro e habilitado para concorrer à vaga, o candidato deve comparecer a um dos nossos postos de atendimento para pegar a carta de encaminhamento.
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-dashed border-blue-300 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                        <FaExternalLinkAlt className="text-blue-600 text-2xl" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-blue-800 mb-4">
                        PARA FAZER O SEU CADASTRO ACESSE:
                      </h4>
                      
                      <a 
                        href="https://empregabrasil.mte.gov.br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xl font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        https://empregabrasil.mte.gov.br
                      </a>
                      
                      <p className="text-gray-600 mt-4">
                        Sistema oficial do Ministério do Trabalho e Emprego
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">📋 Passo a Passo para Busca de Vagas</h3>
                    <div className="space-y-6">
                      {[
                        {
                          step: "1",
                          title: "Cadastro Online",
                          desc: "Acesse o sistema e faça seu cadastro com dados pessoais e profissionais"
                        },
                        {
                          step: "2",
                          title: "Busca de Vagas",
                          desc: "Utilize o sistema para encontrar vagas compatíveis com seu perfil"
                        },
                        {
                          step: "3",
                          title: "Candidatura",
                          desc: "Se candidate às vagas de seu interesse através do sistema"
                        },
                        {
                          step: "4",
                          title: "Encaminhamento Presencial",
                          desc: "Compareça à agência para receber sua carta de encaminhamento"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                            <p className="text-gray-700">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Rodapé Informativo */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Precisa de mais informações?
              </h3>
              <p className="text-gray-700">
                Entre em contato conosco ou visite uma de nossas agências.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#agencias"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <FaMapMarkerAlt className="mr-2" />
                Encontrar Agências
              </a>
              <a
                href="/#faleconosco"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <FaPhoneAlt className="mr-2" />
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}