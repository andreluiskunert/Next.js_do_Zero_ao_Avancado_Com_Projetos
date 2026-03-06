import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        <Link href="/" className="flex items-center gap-3">

          {/* LOGO */}
          <Image
            src="/meulogo.png"
            alt="ALKTECNO"
            width={150}
            height={150}
            priority
          />

          <span className="text-white font-semibold text-lg">
            ALKTECNO
          </span>

        </Link>

        <nav>
          <ul className="flex gap-6 text-white text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/projetos">Projetos</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}