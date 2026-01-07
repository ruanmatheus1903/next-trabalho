"use client";
import { ChevronDown } from "lucide-react";
import { RiHomeOfficeFill } from "react-icons/ri";
import Noticias from "../components/Noticias"

export default function AboutSection() {

  // Função para rolagem suave
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById("proxima-secao");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Seção O QUE É? com gradiente */}
      <section className="overflow-hidden">
        <div className="relative rounded-b-[50px] py-8 md:py-12 text-center flex flex-col items-center px-4 md:px-6 min-h-[600px] bg-gradient-to-b from-white via-blue-100 to-blue-400 text-blue-900">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="p-4 md:p-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">O QUE É?</h2>
              <span className="block w-[80px] md:w-[100px] h-1 bg-blue-900 mt-2 mx-auto"></span>
              <p className="text-base md:text-lg text-blue-900 text-justify mt-4">
                A Sala do Empreendedor visa centralizar os serviços de atendimento de forma presencial e pela rede mundial de computadores, fornecendo-lhe informações e instrumentos, de forma integrada e consolidada, de modo a agilizar e simplificar os procedimentos para instalação e desenvolvimento de seus empreendimentos.
                <br /><br />
                A sala tem uma importância bastante relevante para minimizar o tempo de atendimento e economia sobre os deslocamentos para os empreendedores que necessitam de viabilizar seus negócios. O local é um ponto de encontro para negócios, orientações e informações para empreendedores. A sala do Empreendedor também pode servi de encontro para fechamento de negócios.
              </p>
            </div>

            <div className="p-4 md:p-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">QUAL O SEU OBJETIVO?</h2>
              <span className="block w-[80px] md:w-[100px] h-1 bg-blue-900 mt-2 mx-auto"></span>
              <p className="text-base md:text-lg text-blue-900 text-justify mt-4">
                O objetivo da Sala do Empreendedor é atender de forma rápida e eficiente e que seja o mais próximo do local do estabelecimento do empreendedor, alcançado assim uma agilidade nas informações e menor tempo e custo econômico, com isto a Prefeitura consegue oferecer política pública que atenda ás necessidades primárias, propiciando o desenvolvimento empresarial.
              </p>
            </div>

            <div className="p-4 md:p-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">QUAL O PÚBLICO BENEFICIADO?</h2>
              <span className="block w-[80px] md:w-[100px] h-1 bg-blue-900 mt-2 mx-auto"></span>
              <p className="text-base md:text-lg text-blue-900 text-justify mt-4">
                No Município do Jaboatão dos Guararapes, tem hoje cerca de 21Mil MEIs, micro empreendedores individuais - MEI, fora as micro empresas - ME e empresas de pequeno porte - EPP , portanto, este público alvo será atendido na Sala do Empreendedor, justificado assim a criação deste espaço tornando uma referência local.
              </p>
            </div>
          </div>

          {/* Botão de rolagem suave */}
          <div className="w-fit mx-auto mt-4 md:mt-6">
            <button
              onClick={handleScroll}
              className="border border-blue-900 text-blue-900 bg-transparent px-4 py-2 text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-900 hover:text-white transition duration-300">
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Seção SERVIÇOS DISPONIBILIZADOS NAS SALAS DO EMPREENDEDOR com gradiente */}
      <section className="overflow-hidden">
        <div className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white via-blue-100 to-blue-400 text-blue-900">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <div id="proxima-secao" className="p-4 md:p-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">SERVIÇOS DISPONIBILIZADOS NAS SALAS DO EMPREENDEDOR</h2>
              <span className="block w-[80px] md:w-[100px] h-1 bg-blue-900 mt-2 mx-auto"></span>
              <div className="text-base md:text-lg text-blue-900 text-left md:text-justify font-bold mt-4 space-y-2">
                <p>- Planejamento de um novo negócio</p>
                <p>- Formalização de MEI</p>
                <p>- Alteração, declaração anual, impressão de boletos e baixa para o MEI</p>
                <p>- Gerenciamento de Empresa</p>
                <p>- Como vender para órgão publico</p>
                <p>- Custos de capacitação empresarial</p>
                <p>- Controles integrado de atendimento ao público</p>
                <p>- Atendimento com Consultores CRC (conselho de contadores)</p>
                <p>- Parceria com entidades financeiras (bancos)</p>
                <p>- Parceiras com entidades de ensino (faculdades)</p>
                <p>- Parcerias com entidades de classe (comercio e indústria)</p>
                <p>- Orientação ao Programa Municipal de Compras Governamentais</p>
                <p>- Atendimento de serviços do INSS e Auxilio de acesso ao Portal de Licenciamento Integrado.</p>
              </div>
            </div>
          </div>
          <div className="w-fit mx-auto mt-4 md:mt-6">
            <button
              onClick={handleScroll}
              className="border border-blue-900 text-blue-900 bg-transparent px-4 py-2 text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-900 hover:text-white transition duration-300">
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white text-blue-900">
        <div className="text-center py-8 md:py-10 bg-[#003470]">
          <h1 className="text-3xl md:text-4xl font-bold text-white">NOTÍCIAS</h1>
        </div>
        {/* DIVISOR DE FORMA*/}
        <div className="relative w-full">
          <svg
            width="100%"
            viewBox="0 0 2000 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.33"
              d="M946 62.22C538.2 152.254 419.8 27.5523 305.4 62.22C132 115.037 0 54.4708 0 54.4708V-6.40161H2000V54.4708C2000 54.4708 1875.8 81.0833 1810.2 84.3462C1744.6 87.711 1684.6 71.8046 1658.6 61.8122C1612 44.1724 1490.6 2.46924 1389.8 -1.60931C1289 -5.68786 984.8 53.757 946 62.22Z"
              fill="#003470"
            />
            <path
              opacity="0.66"
              d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
              fill="#003470"
            />
            <path
              d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
              fill="#003470"
            />
          </svg>
        </div>

      < Noticias/>

      </section>

      <section className="bg-white text-blue-900">
    <div className="text-center py-8 md:py-10 bg-[#003470]">
      <h1 className="text-3xl md:text-4xl font-bold text-white">LOCALIZAÇÃO DAS SALAS DO EMPREENDEDOR
        <span className="block w-[150px] md:w-[200px] h-1 bg-white mt-2 mx-auto"></span> </h1>
    </div>

    <div className="w-full max-w-[2000px] mx-auto">
      {/* Card 1 + Iframe 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[radial-gradient(circle,#549FCA,#224276)] overflow-hidden border-b border-black hover:shadow-2xl transition-all duration-300 h-[300px] md:h-[350px] flex flex-col group">
          {/* Conteúdo do Card 1 */}
          <div className="p-4 md:p-6 flex-grow flex flex-col items-center justify-center text-center relative h-full">
            <div className="group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center h-full">
              <RiHomeOfficeFill className="text-4xl md:text-5xl mb-3 md:mb-4 text-white" />
              <h3 className="text-xl md:text-2xl font-bold text-white">REGIONAL 1<br />JABOATÃO CENTRO</h3>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 bg-[radial-gradient(circle,#549FCA,#224276)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
              <h3 className="text-xl md:text-2xl lg:text-[30px] font-bold mb-3 md:mb-4 text-center">SALA DO EMPREENDEDOR REGIONAL 1</h3>
              <div className="text-sm md:text-base">
                <p className="text-center">
                  AV. BARÃO DE LUCENA, S/N - AGÊNCIA DO TRABALHADOR<br />
                  JABOATÃO CENTRO<br />
                  FONE: (81) 9.9939-1923<br />
                  SEGUNDA À SEXTA - 08 ÀS 14 HORAS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-b border-black h-[300px] md:h-[350px] w-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8958765707034!2d-35.017880624109445!3d-8.112083781168785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1d166b17473f%3A0x2254e2bb16fbce0c!2sAg%C3%AAncia%20do%20Trabalhador%20do%20Jaboat%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1743188656896!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa Sala do Empreendedor 1"
          ></iframe>
        </div>
      </div>

      {/* Card 2 + Iframe 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[radial-gradient(circle,#549FCA,#224276)] overflow-hidden border-b border-black hover:shadow-2xl transition-all duration-300 h-[300px] md:h-[350px] flex flex-col group">
          {/* Conteúdo do Card 2 */}
          <div className="p-4 md:p-6 flex-grow flex flex-col items-center justify-center text-center relative h-full">
            <div className="group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center h-full">
              <RiHomeOfficeFill className="text-4xl md:text-5xl mb-3 md:mb-4 text-white" />
              <h3 className="text-xl md:text-2xl font-bold text-white">REGIONAL 2<br />CAVALEIRO</h3>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 bg-[radial-gradient(circle,#549FCA,#224276)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
              <h3 className="text-xl md:text-2xl lg:text-[30px] font-bold mb-3 md:mb-4 text-center">SALA DO EMPREENDEDOR REGIONAL 2</h3>
              <div className="text-sm md:text-base">
                <p className="text-center">
                  RUA SEVERINO MONTEIRO, S/N - EM FRENTE AO BANCO DO BRASIL<br />
                  CAVALEIRO<br />
                  FONE: (81) 3455-8498<br />
                  SEGUNDA À SEXTA - 08 ÀS 14 HORAS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-b border-black h-[300px] md:h-[350px] w-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.8152262534454!2d-34.9713016089866!3d-8.09061394185776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1c38e7cae8df%3A0xf85a6438fe92ed5b!2sR.%20Severino%20Monteiro%20-%20Cavaleiro%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054250-538!5e0!3m2!1spt-BR!2sbr!4v1743188833313!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa Sala do Empreendedor 2"
          ></iframe>
        </div>
      </div>

      {/* Card 3 + Iframe 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[radial-gradient(circle,#549FCA,#224276)] overflow-hidden border-b border-black hover:shadow-2xl transition-all duration-300 h-[300px] md:h-[350px] flex flex-col group">
          {/* Conteúdo do Card 3 */}
          <div className="p-4 md:p-6 flex-grow flex flex-col items-center justify-center text-center relative h-full">
            <div className="group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center h-full">
              <RiHomeOfficeFill className="text-4xl md:text-5xl mb-3 md:mb-4 text-white" />
              <h3 className="text-xl md:text-2xl font-bold text-white">REGIONAL 3<br />CURADO</h3>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 bg-[radial-gradient(circle,#549FCA,#224276)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
              <h3 className="text-xl md:text-2xl lg:text-[30px] font-bold mb-3 md:mb-4 text-center">SALA DO EMPREENDEDOR REGIONAL 3</h3>
              <div className="text-sm md:text-base">
                <p className="text-center">
                  RUA 02, S/N - ANEXO DA POLICÍNICA<br />
                  CURADO IV<br />
                  FONE: (81) 9.9529-6266<br />
                  SEGUNDA À SEXTA - 08 ÀS 14 HORAS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-b border-black h-[300px] md:h-[350px] w-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1975.1467531702265!2d-34.994284!3d-8.071517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1c7d77bea29f%3A0xb97221f7ba092b47!2sPoliclinica%20Manoel%20Calheiros!5e0!3m2!1spt-BR!2sus!4v1743188869159!5m2!1spt-BR!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa Sala do Empreendedor 3"
          ></iframe>
        </div>
      </div>

      {/* Card 4 + Iframe 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[radial-gradient(circle,#549FCA,#224276)] overflow-hidden border-b border-black hover:shadow-2xl transition-all duration-300 h-[300px] md:h-[350px] flex flex-col group">
          {/* Conteúdo do Card 4 */}
          <div className="p-4 md:p-6 flex-grow flex flex-col items-center justify-center text-center relative h-full">
            <div className="group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center h-full">
              <RiHomeOfficeFill className="text-4xl md:text-5xl mb-3 md:mb-4 text-white" />
              <h3 className="text-xl md:text-2xl font-bold text-white">REGIONAL 4<br />MURIBECA</h3>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 bg-[radial-gradient(circle,#549FCA,#224276)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
              <h3 className="text-xl md:text-2xl lg:text-[30px] font-bold mb-3 md:mb-4 text-center">SALA DO EMPREENDEDOR REGIONAL 4</h3>
              <div className="text-sm md:text-base">
                <p className="text-center">
                  EIXO DA INTEGRAÇÃO, 3033 - MURIBECA<br />
                  SEGUNDA À SEXTA - 08 ÀS 14 HORAS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-b border-black h-[300px] md:h-[350px] w-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1974.7268151969408!2d-34.967672!3d-8.156967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae2142cdf0eb9%3A0xce5e94b12cd8a72e!2sEstr.%20Eixo%20da%20Integra%C3%A7%C3%A3o%2C%203033%20-%20Muribeca%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054352-310%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1743188936265!5m2!1spt-BR!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa Sala do Empreendedor 4"
          ></iframe>
        </div>
      </div>

      {/* Card 5 + Iframe 5 */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[radial-gradient(circle,#549FCA,#224276)] overflow-hidden border-b border-black hover:shadow-2xl transition-all duration-300 h-[300px] md:h-[350px] flex flex-col group">
          {/* Conteúdo do Card 5 */}
          <div className="p-4 md:p-6 flex-grow flex flex-col items-center justify-center text-center relative h-full">
            <div className="group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center h-full">
              <RiHomeOfficeFill className="text-4xl md:text-5xl mb-3 md:mb-4 text-white" />
              <h3 className="text-xl md:text-2xl font-bold text-white">REGIONAIS 5 E 7<br />PRAZERES E GUARARAPES</h3>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 bg-[radial-gradient(circle,#549FCA,#224276)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
              <h3 className="text-xl md:text-2xl lg:text-[30px] font-bold mb-3 md:mb-4 text-center">SALAS DO EMPREENDEDOR REGIONAIS 5 E 7</h3>
              <div className="text-sm md:text-base">
                <p className="text-center">
                  AV. BARRETO DE MENEZES, S/N - 1°ANDAR - MERCADO DAS MANGUEIRAS<br />
                  PRAZERES<br />
                  FONE: (81) 9.9142-5208<br />
                  SEGUNDA À SEXTA - 08 ÀS 14 HORAS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-b border-black h-[300px] md:h-[350px] w-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1974.7076627281729!2d-34.927459!3d-8.160843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1896974b6dd%3A0x2066fc1930fbde19!2sMercado%20das%20Mangueiras!5e0!3m2!1spt-BR!2sus!4v1743188967999!5m2!1spt-BR!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa Sala do Empreendedor 5 e 7"
          ></iframe>
        </div>
      </div>

      {/* Card 6 + Iframe 6 */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[radial-gradient(circle,#549FCA,#224276)] overflow-hidden border-b border-black hover:shadow-2xl transition-all duration-300 h-[300px] md:h-[350px] flex flex-col group">
          {/* Conteúdo do Card 6 */}
          <div className="p-4 md:p-6 flex-grow flex flex-col items-center justify-center text-center relative h-full">
            <div className="group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center h-full">
              <RiHomeOfficeFill className="text-4xl md:text-5xl mb-3 md:mb-4 text-white" />
              <h3 className="text-xl md:text-2xl font-bold text-white">REGIONAL 6<br />PRAIAS</h3>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 bg-[radial-gradient(circle,#549FCA,#224276)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
              <h3 className="text-xl md:text-2xl lg:text-[30px] font-bold mb-3 md:mb-4 text-center">SALA DO EMREENDEDOR REGIONAL 6</h3>
              <div className="text-sm md:text-base">
                <p className="text-center">
                  AV. PRESIDENTE KENNEDY Nº 578 - PRÉDIO DA REGIONAL VI<br />
                  PIEDADE<br />
                  FONE: (81) 9.9339-5057<br />
                  SEGUNDA À SEXTA - 08 ÀS 14 HORAS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-b border-black h-[300px] md:h-[350px] w-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1974.559643961365!2d-34.920662!3d-8.190737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae10e342157fb%3A0x92fd23be1da80efc!2sAv.%20Pres.%20Kennedy%2C%20578%20-%20Candeias%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054440-411%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1743189007109!5m2!1spt-BR!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa Sala do Empreendedor 6"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}