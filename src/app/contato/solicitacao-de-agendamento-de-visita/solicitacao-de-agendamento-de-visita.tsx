"use client";

import { FormEvent } from "react";
import Swal from 'sweetalert2';

const AgendamentoVisita = () => {
  const endereco = "Estr. da Batalha, 1200 - Jardim Jordão, Jaboatão dos Guararapes - PE";

  const abrirMapa = () => {
    window.open(`https://www.google.com/maps?q=${encodeURIComponent(endereco)}`, "_blank");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget as HTMLFormElement;
    const formData = {
      name: (target[0] as HTMLInputElement).value,
      email: (target[1] as HTMLInputElement).value,
      message: (target[2] as HTMLTextAreaElement).value,
    };

    // Mostra alerta de carregamento
      Swal.fire({
        title: 'Enviando...',
        text: 'Por favor, aguarde',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
    
      try {
        const response = await fetch("/api/faleConosco", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          await Swal.fire({
            title: "Sucesso!",
            text: "Mensagem enviada com sucesso!",
            icon: "success",
            confirmButtonColor: "#FFC719",
            confirmButtonText: "OK"
          });
          target.reset();
        } else {
          const data = await response.json();
          await Swal.fire({
            title: "Erro!",
            text: data.message || "Ocorreu um erro ao enviar",
            icon: "error",
            confirmButtonColor: "#FFC719"
          });
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
        await Swal.fire({
          title: "Erro!",
          text: "Falha na conexão com o servidor",
          icon: "error",
          confirmButtonColor: "#FFC719"
        });
      }
    };

  return (
    <div className="overflow-hidden">
      {/* ÁREA COM GRADIENTE DE FUNDO */}
      <div className="relative py-16 px-4 sm:px-10 text-white flex items-center justify-center min-h-[600px] bg-gradient-to-b bg-white via-blue-100 to-blue-400">
        
      

        {/* Conteúdo */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-[1200px] w-full relative">
          {/* Mapa */}
          <div 
            className="w-full md:w-1/2 h-[500px] overflow-hidden shadow-lg transition-transform duration-700 ease-out cursor-pointer"
            onClick={abrirMapa}
            title="Clique para ver no Google Maps"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.389715635836!2d-34.92382692582081!3d-8.112919394153672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1e6f1b5d5d5d%3A0x1c3e9d9e3e3e3e3e!2s${encodeURIComponent(endereco)}!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Formulário */}
          <div className="w-full md:w-1/2 bg-[#000000cc] p-8 shadow-md flex flex-col justify-between h-full min-h-[500px] transition-transform duration-700 ease-out backdrop-blur-sm">
            <div>
              <h2 className="text-3xl font-semibold mb-6">SOLICITAÇÃO DE AGENDAMENTO DE VISITA</h2>
              
              <div className="mb-8 text-sm space-y-2">
                <p>Secretaria de Desenvolvimento Econômico e Sustentabilidade</p>
                <p>Avenida Estrada da Batalha, 1200 – Jardim Jordão</p>
                <p>Jaboatão dos Guararapes – CEP: 54.315-570</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full flex-1">
              <input
                type="text"
                placeholder="Seu nome"
                required
                className="w-full h-12 px-4 bg-transparent border border-white text-white placeholder-white focus:outline-none focus:border-[#FFC719]"
              />
              <input
                type="email"
                placeholder="Seu E-mail"
                required
                className="w-full h-12 px-4 bg-transparent border border-white text-white placeholder-white focus:outline-none focus:border-[#FFC719]"
              />
              <textarea
                placeholder="Mensagem/Observações"
                required
                className="w-full h-32 px-4 py-2 bg-transparent border border-white text-white placeholder-white focus:outline-none focus:border-[#FFC719] resize-none"
              />
              <button
                type="submit"
                className="w-full h-12 bg-transparent border border-white text-white hover:bg-[#FFC719] hover:text-black transition-colors duration-300 cursor-pointer"
              >
                ENVIAR SOLICITAÇÃO
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendamentoVisita;