import LegislacaoAmbiental from "./legislacaoambiental";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title:
    "Legislação Ambiental - Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"LEGISLAÇÃO AMBIENTAL"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">LEGISLAÇÃO AMBIENTAL</span>
          </span>
        }
      >
        <LegislacaoAmbiental />
      </Model>
    </div>
  );
}
