import Section1 from "./components/Home/Section1";
import Section2 from "./components/Home/Section2";
import FaleConosco from "./components/Home/Faleconosco";
import Atendimento from "./components/Home/Atendimento";

export default function Home() {
  return (
    <main>
      <Section1 />
      <Section2 />
      <FaleConosco />
      <Atendimento />
    </main>
  );
}
