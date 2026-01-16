import EconomiaSolidaria from "./EconomiaSolidaria";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Economia Solidária - Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function Config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Economia Solidária"}
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
              Economia Solidária
            </span>
          </span>
        }
      >
        <EconomiaSolidaria />
      </Model>
    </div>
  );
}