import Comprasgovernamentais from "./comprasgovernamentais";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Compras Governamentais - Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"COMPRAS GOVERNAMENTAIS"}
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
            COMPRAS GOVERNAMENTAIS
            </span>
          </span>
        }
      >
        <Comprasgovernamentais />
      </Model>
    </div>
  );
}