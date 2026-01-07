import IncentivoFiscais from "./incentivo-fiscais";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "INCENTIVO FISCAIS",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"INCENTIVO FISCAIS"}
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
            INCENTIVO FISCAIS
            </span>
          </span>
        }
      >
        < IncentivoFiscais/>
      </Model>
    </div>
  );
}