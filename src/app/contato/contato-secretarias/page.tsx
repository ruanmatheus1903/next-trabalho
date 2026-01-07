import ContatoSecretarias from "./contato-secretarias";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "CONTATO SECRETARIAS EXECUTIVAS - Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"CONTATO SECRETARIAS EXECUTIVAS"}
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
            CONTATO SECRETARIAS EXECUTIVAS
            </span>
          </span>
        }
      >
        <ContatoSecretarias />
      </Model>
    </div>
  );
}