import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

const Faq = () => (
  <Section id="faq">
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <Reveal className="lg:sticky lg:top-32 lg:self-start">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Lo que todo comité pregunta antes de firmar"
          description="Si tu duda no está aquí, escríbenos y te respondemos con claridad."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-montserrat text-base font-semibold text-navy hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </Section>
);

export default Faq;
