import { useEffect } from "react";
import { useLocation } from "wouter";

/** Devuelve el scroll al inicio al cambiar de ruta, salvo que se navegue a un ancla. */
const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return null;
};

export default ScrollToTop;
