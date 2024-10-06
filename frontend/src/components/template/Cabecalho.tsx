import Link from "next/link";
import Logo from "../shared/Logo";
import IconeCarrinho from '../shared/IconeCarrinho'

export default function Cabecalho() {
  return (
    <div
      className="flex flex-col h-20"
      style={{
        background:
          "linear-gradient(90deg, #14002d 0%, #430093 50%, #14002d 100%)",
      }}
    >
      <div className="flex-1 container flex-col justify-center">
        <div className="flex justify-between items-center">
          <Logo />
          <Link href="">
            <IconeCarrinho qtdeItens={0} />
          </Link>
        </div>

      </div>
    </div>
  );
}
