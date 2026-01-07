"use client";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  // Animação de entrada
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="overflow-hidden">
      {/* ÁREA COM GRADIENTE DE FUNDO */}
      <div className="relative py-16 px-4 sm:px-10 text-white flex items-center justify-center bg-gradient-to-b from-white via-blue-100 to-blue-400">
        
        <div className=" mx-auto">
          <div
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            
            <div>
              <p className=" text-lg text-black text-end">
                DECRETO 87-2014 - LICENCIAMENTO
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}