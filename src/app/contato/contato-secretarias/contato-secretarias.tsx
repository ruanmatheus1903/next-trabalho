"use client";

const ContatoSecretarias = () => {
  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="relative py-16 px-4 sm:px-10 text-white flex items-center justify-center min-h-[600px] bg-gradient-to-b from-white via-blue-100 to-blue-400">
      {/* Gradiente de fundo fixo */}
      <div className="fixed inset-0 w-full h-full -z-10"></div>

      <div className="w-full max-w-6xl bg-[#fdfdfb] shadow-md rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-[#22579E] mb-10 text-center">
            Contato das Secretarias Municipais
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
            {[
              {
                titulo:
                  "Secretaria Municipal de Desenvolvimento Econômico e Sustentabilidade",
                telefone1: "81 99975 3901",
                telefone2: "81 99165 0144",
                email: "desenvolvimento@jaboatao.pe.gov.br",
              },
              {
                titulo:
                  "Secretaria Executiva de Turismo, Cultura, Esportes e Lazer",
                telefone1: "81 99975 5780",
                email: "danielle.lapenda@jaboatao.pe.gov.br",
              },
              {
                titulo:
                  "Secretaria Executiva de Trabalho, Qualificação e Empreendedorismo",
                telefone1: "81 99113 5836",
                email: "setge@jaboatao.pe.gov.br",
              },
              {
                titulo:
                  "Secretaria Executiva de Meio Ambiente e Gestão Urbana",
                telefone1: "81 99143 1508",
                email: "semag@jaboatao.pe.gov.br",
              },
              {
                titulo: "Procon Jaboatão dos Guararapes",
                telefone1: "0800 281 6970 (Doutrina)",
                telefone2: "81 97323 7953 (Denúncia)",
              },
              {
                titulo: "Ennume Jaboatão",
                telefone1: "81 3462 8046 / 3462 8776 (Atendimento e Denúncia)",
              },
              {
                titulo: "Comaþ - Mercados Públicos",
                telefone1: "Mercado das Nangueiras: 3476 4707",
                telefone2: "Mercado de Cavaleiro e COAME: 3465 9568",
                email: "comaib@jaboatao.pe.gov.br",
              },
            ].map((secretaria, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-3 text-[#22579E]">
                  {secretaria.titulo}
                </h2>
                {secretaria.telefone1 && (
                  <p className="mb-1">
                    <span className="font-medium">Telefone:</span>{" "}
                    {secretaria.telefone1}
                  </p>
                )}
                {secretaria.telefone2 && (
                  <p className="mb-1">
                    <span className="font-medium">Telefone:</span>{" "}
                    {secretaria.telefone2}
                  </p>
                )}
                {secretaria.email && (
                  <p>
                    <span className="font-medium">E-mail:</span>{" "}
                    <a
                      href={`mailto:${secretaria.email}`}
                      className="text-blue-400 hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEmailClick(secretaria.email!);
                      }}
                    >
                      {secretaria.email}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoSecretarias;
