import Saladoempreendedor from "./saladoempreendedor";
import Model from "../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Sala do Empreendedor - Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"SALA DO EMPREENDEDOR"}
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
            SALA DO EMPREENDEDOR
            </span>
          </span>
        }
      >
        <Saladoempreendedor />
      </Model>
    </div>
  );
}