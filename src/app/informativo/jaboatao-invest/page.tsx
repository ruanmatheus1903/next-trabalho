import JaboataoInvest from "./jaboatao-invest";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "JABOATÃO INVEST- Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function Config() { // Alterei para começar com letra maiúscula (convenção React)
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"JABOATÃO INVEST"}
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
            JABOATÃO INVEST
            </span>
          </span>
        }
      >
        <JaboataoInvest />
      </Model>
    </div>
  );
}