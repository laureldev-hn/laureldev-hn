import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { SectionLink } from "@/components/SectionLink";
import { siteConfig } from "@/data/site";

const trustPoints = [
  { icon: ShieldCheck, label: "Controles de grado bancario" },
  { icon: Activity, label: "Onboarding y firma digital" },
  { icon: GitBranch, label: "El código queda en tu institución" },
];

const panelRows = [
  { label: "Canales digitales", value: "En producción", tone: "ok" as const },
  { label: "Integraciones", value: "15 VM → 1 clúster", tone: "ok" as const },
  { label: "Disponibilidad", value: "99.9%", tone: "ok" as const },
  { label: "Firma electrónica", value: "Prestador acreditado", tone: "neutral" as const },
];

const Hero = () => (
  <section className="relative overflow-hidden bg-navy pb-20 pt-32 text-white md:pb-28 md:pt-40">
    <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-70" />
    <div
      aria-hidden
      className="absolute -right-32 -top-40 h-[36rem] w-[36rem] rounded-full bg-white/5 blur-3xl"
    />

    <div className="container relative mx-auto px-4 md:px-6">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow onDark>Socio tecnológico de cooperativas, banca e instituciones</Eyebrow>

          <h1 className="mt-6 font-montserrat text-4xl font-bold leading-[1.05] tracking-tightest text-balance md:text-6xl lg:text-7xl">
            Tecnología de grado bancario para instituciones que{" "}
            <span className="relative whitespace-nowrap">
              no pueden fallar
              <span aria-hidden className="absolute inset-x-0 -bottom-1 h-1 bg-gold" />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 text-pretty">
            Diseñamos y construimos infraestructura digital para cooperativas y bancos en Honduras y
            Centroamérica —y también para organismos e instituciones que necesitan onboarding digital,
            firma electrónica avanzada y plataformas con la trazabilidad que exige un ente regulador.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer">
                Agendar un diagnóstico
                <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <SectionLink href="/#casos">Ver casos de éxito</SectionLink>
            </Button>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-3 text-sm text-white/70">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  Plataforma en producción
                </p>
                <p className="mt-2 font-montserrat text-xl font-bold">Cooperativa de ahorro y crédito</p>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Estable
              </span>
            </div>

            <dl className="divide-y divide-white/10">
              {panelRows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 py-4">
                  <dt className="text-sm text-white/60">{row.label}</dt>
                  <dd
                    className={
                      row.tone === "ok"
                        ? "text-right font-montserrat text-sm font-semibold text-white"
                        : "text-right font-montserrat text-sm font-semibold text-gold"
                    }
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-2 grid grid-cols-3 gap-4 rounded-xl bg-white/[0.04] p-5">
              <div>
                <p className="font-montserrat text-2xl font-bold">+10</p>
                <p className="mt-1 text-xs text-white/55">años de experiencia</p>
              </div>
              <div>
                <p className="font-montserrat text-2xl font-bold">+500k</p>
                <p className="mt-1 text-xs text-white/55">personas impactadas</p>
              </div>
              <div>
                <p className="font-montserrat text-2xl font-bold">99.9%</p>
                <p className="mt-1 text-xs text-white/55">disponibilidad</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
