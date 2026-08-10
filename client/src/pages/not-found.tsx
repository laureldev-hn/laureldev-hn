import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { SectionLink } from "@/components/SectionLink";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-40 text-white md:px-6">
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-70" />

      <div className="container relative mx-auto max-w-2xl text-center">
        <Eyebrow onDark className="justify-center">
          Error 404
        </Eyebrow>
        <h1 className="mt-6 font-montserrat text-4xl font-bold tracking-tightest md:text-6xl">
          Esta página no existe
        </h1>
        <p className="mt-6 text-lg text-white/70">
          Puede que el enlace haya cambiado o que la dirección esté mal escrita. Desde el inicio
          encuentras todo lo que hacemos.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild variant="gold" size="lg">
            <Link href="/">
              <ArrowLeft className="mr-1" />
              Volver al inicio
            </Link>
          </Button>
          <Button asChild variant="onDark" size="lg">
            <SectionLink href="/#contacto">Contáctanos</SectionLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
