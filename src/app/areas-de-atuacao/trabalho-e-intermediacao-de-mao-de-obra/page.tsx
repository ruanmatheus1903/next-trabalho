import TrabalhoIntermediacaoDeMaoDeObra from "./TrabalhoIntermEdiacaoDeMaoDeObra";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Trabalho e Intermediação da Mão de Obra - Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function Config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Trabalho e Intermediação da Mão de Obra"}
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
              Trabalho e Intermediação da Mão de Obra
            </span>
          </span>
        }
      >
        <TrabalhoIntermediacaoDeMaoDeObra />
      </Model>
    </div>
  );
}