import Emlume from "./emlume";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title:
    "Regulamento de Licitações – EMLUME- Secretaria de Desenvolvimento Econômico e Turismo",
};

export default function Config() {
  // Alterei para começar com letra maiúscula (convenção React)
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Regulamento de Licitações – EMLUME"}
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
              Regulamento de Licitações – EMLUME
            </span>
          </span>
        }
      >
        <Emlume />
      </Model>
    </div>
  );
}
