import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15" />
          <span className="text-base font-semibold text-white">
            ALKTECNO
          </span>
        </Link>

        <nav aria-label="Menu principal">
          <ul className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/projetos"
                className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}