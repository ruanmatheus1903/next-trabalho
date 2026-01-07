import AgendamentoVisita from "./solicitacao-de-agendamento-de-visita";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title:
    "SOLICITAÇÃO DE AGENDAMENTO DE VISITA - Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"SOLICITAÇÃO DE AGENDAMENTO DE VISITA"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">
              SOLICITAÇÃO DE AGENDAMENTO DE VISITA
            </span>
          </span>
        }
      >
        <AgendamentoVisita />
      </Model>
    </div>
  );
}
