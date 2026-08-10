import * as React from "react";
import { useLocation } from "wouter";

const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

interface SectionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Destino en formato "/#id". Desde una página interna primero navega al inicio. */
  href: string;
}

/**
 * Enlace a una sección del inicio que funciona igual desde la landing y desde
 * las páginas de detalle, sin recargar la página.
 */
const SectionLink = React.forwardRef<HTMLAnchorElement, SectionLinkProps>(
  ({ href, onClick, children, ...props }, ref) => {
    const [location, setLocation] = useLocation();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented || event.metaKey || event.ctrlKey) return;

      const id = href.split("#")[1];
      if (!id) return;

      event.preventDefault();

      if (location === "/") {
        scrollToSection(id);
        return;
      }

      setLocation("/");
      // Esperamos a que la landing monte antes de buscar la sección.
      requestAnimationFrame(() => window.setTimeout(() => scrollToSection(id), 60));
    };

    return (
      <a ref={ref} href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }
);
SectionLink.displayName = "SectionLink";

export { SectionLink, scrollToSection };
