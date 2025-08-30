import { Link, NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold tracking-tight"
        >
          <span className="text-xl">
            Move Mode <span className="text-primary">Fit</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#produtos" className="hover:text-primary transition-colors">
            Produtos
          </a>
          <a href="#comprar" className="hover:text-primary transition-colors">
            Comprar
          </a>
          <a
            href="https://movemodefit.com.br"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            Site Oficial
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#comprar" className="hidden sm:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 py-2">
              Comprar agora
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto px-4 space-y-4 text-center text-sm">
        <p>© 2025 Move Mode Fit. Todos os direitos reservados.</p>
        <p className="text-white/70 max-w-3xl mx-auto">
          Este produto não garante a obtenção de resultados. Qualquer referência
          ao desempenho de uma estratégia não deve ser interpretada como uma
          garantia de resultados.
        </p>
      </div>
    </footer>
  );
}
