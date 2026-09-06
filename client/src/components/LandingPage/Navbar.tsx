import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLink } from "@/components/SectionLink";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileMenuOpen
          ? "border-b border-border bg-white/95 backdrop-blur"
          : "border-b border-transparent bg-white"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6" aria-label="Principal">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center" aria-label="LaurelDev, ir al inicio">
            <img src="/logo-header.png" alt="LaurelDev" className="h-9 w-auto" />
          </Link>

          <div className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <SectionLink
                key={item.href}
                href={item.href}
                className="nav-link font-montserrat text-sm font-semibold text-ink/80 transition-colors hover:text-navy"
              >
                {item.label}
              </SectionLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <Button asChild size="default">
              <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer">
                Agendar diagnóstico
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="text-navy xl:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-border py-6 xl:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <SectionLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-2 py-3 font-montserrat text-base font-semibold text-ink transition-colors hover:bg-surface hover:text-navy"
                >
                  {item.label}
                </SectionLink>
              ))}
              <Button asChild size="lg" className="mt-4">
                <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer">
                  Agendar diagnóstico
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
