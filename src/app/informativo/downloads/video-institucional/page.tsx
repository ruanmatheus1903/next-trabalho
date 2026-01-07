import TelefonesParaAtendimento from "./video";
import Model from "../../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "VIDEO INSTITUCIONAL - Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"VIDEO INSTITUCIONAL"}
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
            VIDEO INSTITUCIONAL
            </span>
          </span>
        }
      >
        <TelefonesParaAtendimento />
      </Model>
    </div>
  );
}