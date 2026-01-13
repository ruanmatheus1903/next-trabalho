import EnderecosAgenciaDoTrabalhador from "./endereco";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "ENDEREÇOS DAS AGÊNCIAS - Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"ENDEREÇOS DAS AGÊNCIAS"}
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
            ENDEREÇOS DAS AGÊNCIAS
            </span>
          </span>
        }
      >
        <EnderecosAgenciaDoTrabalhador/>
      </Model>
    </div>
  );
}