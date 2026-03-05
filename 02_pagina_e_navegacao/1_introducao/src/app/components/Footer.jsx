export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-white">ALKTECNO</h2>
          <p className="mt-2 text-sm text-white/70">
            Desenvolvimento Web & Soluções Full Stack
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/90">Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a className="hover:text-white" href="/">Home</a></li>
            <li><a className="hover:text-white" href="/sobre">Sobre</a></li>
            <li><a className="hover:text-white" href="/projetos">Projetos</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/90">Contato</h3>
          <p className="mt-3 text-sm text-white/70">
            E-mail: <span className="text-white/90">seuemail@exemplo.com</span>
          </p>
          <p className="mt-2 text-xs text-white/50">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}