import Zpe from "./zpe";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "ZPE - Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"ZPE"}
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
            ZPE
            </span>
          </span>
        }
      >
        <Zpe />
      </Model>
    </div>
  );
}