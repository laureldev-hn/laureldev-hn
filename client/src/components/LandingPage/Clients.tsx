import { Reveal } from "@/components/ui/reveal";
import { clients } from "@/data/site";

const Clients = () => (
  <section id="clientes" className="border-b border-border bg-background py-14">
    <div className="container mx-auto px-4 md:px-6">
      <Reveal className="flex flex-col items-center gap-10">
        <p className="text-center font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Instituciones que confían en LaurelDev
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {clients.map((client) => (
            <li key={client.name}>
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="h-14 w-auto max-w-[190px] object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-16"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Clients;
