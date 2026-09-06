import { cn } from "@/lib/utils";
import type { ArchitectureLayer } from "@/data/cases";

interface ArchitectureDiagramProps {
  layers: ArchitectureLayer[];
  caption?: string;
  onDark?: boolean;
  heading?: boolean;
  className?: string;
}

const ArchitectureDiagram = ({
  layers,
  caption = "Esquema anónimo de la plataforma de integración en producción.",
  onDark = false,
  heading = true,
  className,
}: ArchitectureDiagramProps) => (
  <figure className={cn("w-full", className)}>
    <div
      className={cn(
        "rounded-2xl border p-5 md:p-8",
        onDark ? "border-white/15 bg-white/[0.04]" : "border-border bg-surface"
      )}
    >
      {heading ? (
        <p
          className={cn(
            "font-montserrat text-xs font-semibold uppercase tracking-[0.16em]",
            onDark ? "text-white/50" : "text-muted-foreground"
          )}
        >
          Arquitectura
        </p>
      ) : null}
      <ol className={cn("space-y-3", heading && "mt-6")}>
        {layers.map((layer, index) => (
          <li key={layer.label}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <span
                className={cn(
                  "w-full shrink-0 font-montserrat text-xs font-semibold uppercase tracking-[0.14em] sm:w-44",
                  onDark ? "text-gold" : "text-navy"
                )}
              >
                {layer.label}
              </span>
              <ul className="flex flex-1 flex-wrap gap-2">
                {layer.nodes.map((node) => (
                  <li
                    key={node}
                    className={cn(
                      "rounded-md border px-3 py-2 font-montserrat text-sm font-semibold",
                      onDark
                        ? "border-white/20 bg-navy/40 text-white"
                        : "border-navy/15 bg-background text-navy"
                    )}
                  >
                    {node}
                  </li>
                ))}
              </ul>
            </div>
            {index < layers.length - 1 ? (
              <div
                aria-hidden
                className={cn(
                  "mx-auto my-1 h-4 w-px sm:ml-[5.5rem]",
                  onDark ? "bg-gold/50" : "bg-gold"
                )}
              />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
    <figcaption
      className={cn(
        "mt-3 text-xs leading-relaxed",
        onDark ? "text-white/50" : "text-muted-foreground"
      )}
    >
      {caption}
    </figcaption>
  </figure>
);

export { ArchitectureDiagram };
