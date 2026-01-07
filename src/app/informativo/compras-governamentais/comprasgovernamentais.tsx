"use client";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  // Configuração das animações de entrada
  const { ref: textRef, inView: isTextVisible } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <>
      <section className="overflow-hidden">
        {/* ÁREA COM GRADIENTE DE FUNDO */}
        <div className="relative py-12 xl:py-20 px-6 text-center flex flex-col items-center bg-gradient-to-b from-white via-blue-100 to-blue-400">
          
          <h2 className="text-[40px] font-bold relative inline-block transition-all duration-1000 ease-out delay-300 text-black">
            COMPRAS GOVERNAMENTAIS
          </h2>
          <p
            ref={textRef}
            className={`max-w-7xl mt-5 text-[18px] leading-relaxed text-justify transition-all duration-1000 ease-out delay-300 text-black ${
              isTextVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}>

            O Mercado de compras públicas deve ser considerado como uma grande oportunidade que os proprietários de pequenos negócios possam alavancar<br></br>
            as suas vendas. Por outro lado, sabe-se que participar de um processo licitatório não é muito fácil, bem como não se aprende do dia para a noite. Estar<br></br>
            capacitado para aproveitar essa oportunidade é essencial para produzir ou mesmo evitar contratempos na gestão do estabelecimento comercial.<br></br><br></br>

            Capacitar os pequenos negócios para a participação nos processos licitatórios é mais uma atividade desenvolvida através do Projeto de Compras<br></br>
            Governamentais. O plano de compras de governo, desenvolve uma política preferencial para as pequenas e microempresas e é o caminho para a<br></br>
            promoção do desenvolvimento local e qualificação das empresas de pequeno porte. Com o intuito, de tornar esta política uma prática cotidiana nas<br></br>
            suas aquisições.
          </p>
        </div>
      </section>
    </>
  );
}