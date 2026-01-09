"use client";

import { FormEvent } from "react";
import Swal from 'sweetalert2';

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

const FaleConosco = () => {
  return (
    <div id="faleconosco" className=" overflow-hidden">
      <div className=" border-t border-[#FFC719]"></div>
      
      <div className="text-center py-10 bg-gradient-to-b from-[#FFD24E] to-[#FDA417]">
  <h1 className="text-4xl font-bold text-white">FALE CONOSCO</h1>
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
              fill="#FDA417"
            />
            <path
              opacity="0.66"
              d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
              fill="#FDA417"
            />
            <path
              d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
              fill="#FDA417"
            />
          </svg>
        </div>

      {/* ÁREA COM VÍDEO DE FUNDO OTIMIZADO */}
      <div className="relative py-16 px-4 sm:px-10 text-white flex items-center justify-center min-h-[600px]">
        {/* Container do vídeo fixo */}
        <div className="fixed inset-0 w-full h-full -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/bg-ceu.webm" type="video/webm" />
            <source src="/videos/bg-ceu.mp4" type="video/mp4" />
          </video>
          {/* Overlay para melhor contraste */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-[1200px] w-full z-10 relative">
          <div className="w-full md:w-1/2 h-[500px] overflow-hidden shadow-lg transition-transform duration-700 ease-out">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1974.7536411173098!2d-34.920609!3d-8.151535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1dbb3127331%3A0x88a42537f8d55ff0!2sEstr.%20da%20Batalha%2C%201200%20-%20Jardim%20Jord%C3%A3o%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054315-570%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1767978890126!5m2!1spt-BR!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="w-full md:w-1/2 bg-[#00000023] p-3 shadow-md flex flex-col justify-between h-full min-h-[500px] transition-transform duration-700 ease-out backdrop-blur-sm">
            <h2 className="text-3xl font-semibold mb-4">Fale Conosco</h2>

            <p className="mb-10 text-sm">
              Qualquer dúvida, reclamação ou sugestão entre em contato com a nossa área de relacionamento com o cidadão. Queremos nos aproximar cada vez mais de você cidadão.
            </p>

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
                placeholder="Mensagem"
                required
                className="w-full h-32 px-4 py-2 bg-transparent border border-white text-white placeholder-white focus:outline-none focus:border-[#FFC719] resize-none"
              />
              <button
                type="submit"
                className="w-full h-12 bg-transparent border border-white text-white hover:bg-[#FFC719] hover:text-black transition-colors duration-300 cursor-pointer"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;