import Dadosdomunicipio from "./dadosdomunicipio";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Dados do Município - Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"DADOS DO MUNICÍPIO"}
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
            DADOS DO MUNICÍPIO
            </span>
          </span>
        }
      >
        <Dadosdomunicipio />
      </Model>
    </div>
  );
}