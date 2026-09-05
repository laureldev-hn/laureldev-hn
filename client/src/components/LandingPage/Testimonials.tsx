import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index];

  const go = (direction: 1 | -1) => setIndex((current) => (current + direction + total) % total);

  return (
    <Section id="testimonios" tone="surface">
      <Reveal className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center">
          <Eyebrow>Lo que dicen nuestros clientes</Eyebrow>
        </div>

        <div className="mt-12 min-h-[19rem] sm:min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <Quote className="h-8 w-8 text-gold" aria-hidden />
              <blockquote className="mt-8 font-montserrat text-xl font-medium leading-relaxed text-navy text-balance md:text-2xl">
                “{active.quote}”
              </blockquote>
              <figcaption className="mt-8 flex flex-col items-center gap-1">
                <span className="font-montserrat text-sm font-bold text-navy">{active.author}</span>
                <span className="text-sm text-muted-foreground">
                  {active.role}, {active.organization}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Testimonio anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <span className="font-montserrat text-sm font-semibold tabular-nums text-muted-foreground">
            {index + 1} — {total}
          </span>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Siguiente testimonio"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Reveal>
    </Section>
  );
};

export default Testimonials;
