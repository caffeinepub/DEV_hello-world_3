import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "glass border-b border-border shadow-subtle" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-6 mx-auto max-w-6xl">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className="flex items-center gap-2 font-display font-semibold text-lg text-foreground hover:text-primary transition-smooth"
          aria-label="Go to top"
        >
          <span className="w-7 h-7 rounded-md gradient-primary flex items-center justify-center shadow-subtle">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </span>
          <span>HelloWorld</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm font-body text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/40"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-smooth"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="flex flex-col gap-1.5 w-5">
            <span className={`block h-0.5 bg-current transition-smooth origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-smooth ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-smooth origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-border px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground transition-smooth border-b border-border/40 last:border-0"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname = typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border/60">
      <div className="container mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded gradient-primary flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-primary-foreground" />
          </span>
          <span className="font-display text-sm font-medium text-foreground">HelloWorld</span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          © {year}. Built with love using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-smooth underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </p>
        <p className="text-xs text-muted-foreground/60 italic">
          Running on the Internet Computer
        </p>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
