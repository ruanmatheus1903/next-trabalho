"use client";
import { ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Componente para animação de contagem (mais rápido)
const AnimatedCounter = ({ value, duration = 1, prefix = "", suffix = "" }: { 
    value: number, 
    duration?: number, 
    prefix?: string, 
    suffix?: string 
  }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (value === 0) return;
      
      let start = 0;
      const end = value;
      // Reduzi o tempo de incremento para tornar a animação mais rápida
      const increment = Math.max(1, Math.floor(end / (duration * 30))); // Incremento maior para números grandes
  
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.min(start, end));
        if (start >= end) clearInterval(timer);
      }, 20); // Intervalo fixo muito curto
  
      return () => clearInterval(timer);
    }, [value, duration]);
  
    return (
      <span>
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    );
  };

export default function AboutSection() {
    const { ref: textRef, inView: isTextVisible } = useInView({ triggerOnce: true, threshold: 0.5 });
    const { ref: numbersRef, inView: areNumbersVisible } = useInView({ triggerOnce: true, threshold: 0.3 });

    const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const nextSection = document.getElementById("proxima-secao");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <section className="overflow-hidden">
                {/* ÁREA COM GRADIENTE DE FUNDO */}
                <div className="relative min-h-screen py-12 md:py-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center bg-gradient-to-b from-white via-blue-100 to-blue-400">
                    {/* Gradiente de fundo */}
                    <div className="fixed inset-0 w-full h-full -z-10"></div>

                    <div className="max-w-6xl mx-auto relative z-10 flex-grow flex flex-col justify-center">
                        <span className="block w-[80px] md:w-[180px] h-1 bg-[#E7C906] mt-2 mx-auto"></span>
                        <p 
                            ref={textRef}
                            className={`text-base md:text-[24px] text-black text-center mt-6 md:mt-4 leading-relaxed transition-all duration-1000 ease-out delay-300 ${
                                isTextVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                            }`}>
                            Com um amplo território de <span className="font-bold">256km²</span>, a cidade do Jaboatão dos Guararapes faz parte de uma localização estratégica e privilegiada de estar situada entre as principais vias de acesso ao Estado de Pernambuco, uma vez localizada justamente entre os portos de Recife e Suape, além de ficar muito próximo ao aeroporto internacional e ainda ser cortada por duas rodovias federais. Por essa localização estratégica é que Jaboatão foi naturalmente escolhido pelo empresariado para ser o Polo Logístico de Pernambuco, abrigando os principais centros de distribuição, operadores logísticos e transportes como: Wal-Mart, Honda, Coca Cola, Campari, Martins, Pão de Açúcar, Rapidão Cometa, dentre outros.<br /><br />

                            Vale ressaltar a proximidade com o Complexo Industrial e Portuário de Suape (aproximadamente 15km²), que está a apenas sete dias de Roterdã e Nova York e conectado a 160 portos em todos os continentes. Apto a se tornar o principal porto concentrador de cargas do Atlântico Sul, Suape tem atraído investimentos estruturadores como refinaria de petróleo, polo petroquímico e vários estaleiros.
                        </p>
                    </div>

                    {/* Botão de rolagem suave */}
                    <div className="w-fit mx-auto relative z-10 pb-8">
                        <button
                            onClick={handleScroll}
                            className="border border-white text-white bg-transparent px-6 py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-[#003470] transition duration-300">
                            <ChevronDown size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <section id="proxima-secao" className="min-h-screen bg-[radial-gradient(circle,#2F4E64,#011B39)] text-white py-12 xl:py-40 flex flex-col items-center px-6">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl mt-20 md:text-4xl lg:text-5xl font-bold text-white">
                            NÚMEROS DO JABOATÃO
                        </h2>
                        <div className="w-20 h-1 bg-[#E7C906] mx-auto mt-4"></div>
                    </div>

                    <div ref={numbersRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {/* Coluna da esquerda */}
                        <div className="text-center">
                            <div className="mb-6">
                            <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={areNumbersVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5 }}
                                    className="text-5xl font-bold text-[#FFFF00]"
                                >
                                    {areNumbersVisible && <AnimatedCounter value={256} duration={3} suffix=" km²" />}
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={areNumbersVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-2x1 mt-2 text-white"
                                >
                                    AMPLO TERRITÓRIO
                                </motion.p>
                            </div>
                        </div>

                        {/* Coluna do meio (POPULAÇÃO) */}
                        <div className="text-center flex flex-col justify-center items-center">
                            <div className="mb-6">
                            <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={areNumbersVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-5xl font-bold text-[#FFFF00]"
                                >
                                    {areNumbersVisible && <AnimatedCounter value={695956} duration={3} />}
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={areNumbersVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="text-2x1 text-white"
                                >
                                    POPULAÇÃO
                                </motion.p>
                            </div>
                        </div>

                        {/* Coluna da direita (PIB) */}
                        <div className="text-center flex flex-col justify-center">
                            <div className="mb-6">
                            <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={areNumbersVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-5xl font-bold text-[#FFFF00]"
                                >
                                    {areNumbersVisible && <AnimatedCounter value={13000} duration={3} prefix="R$" suffix=".000.000.000" />}
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={areNumbersVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                    className="text-2x1 mt-2 text-white"
                                >
                                    PIB
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    {/* Lista de características */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={areNumbersVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="mt-6 text-center max-w-4xl mx-auto"
                    >
                        <ul className="space-y-4 text-white text-lg md:text-xl">
                            {[
                                "LOCALIZAÇÃO ESTRATÉGICA",
                                "INTEGRANTE DO TERRITÓRIO ESTRATÉGICO DE SUAPE",
                                "ZPE (ZONA DE PROCESSAMENTO E EXPORTAÇÃO)",
                                "MELHOR POLO LOGÍSTICO DE PERNAMBUCO",
                                "DISPONIBILIDADE DE GRANDE ÁREA PARA PROJETOS HABITACIONAIS"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={areNumbersVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                                    className="flex items-center justify-center"
                                >
                                    <span>– {item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </>
    );
}