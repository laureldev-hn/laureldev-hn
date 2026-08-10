import { cn } from "@/lib/utils";

interface StatProps {
  value: string;
  label: string;
  detail?: string;
  onDark?: boolean;
  className?: string;
}

const Stat = ({ value, label, detail, onDark = false, className }: StatProps) => (
  <div className={cn("flex flex-col gap-2", className)}>
    <span
      className={cn(
        "font-montserrat text-4xl font-bold tracking-tightest md:text-5xl",
        onDark ? "text-white" : "text-navy"
      )}
    >
      {value}
    </span>
    <span aria-hidden className="h-px w-10 bg-gold" />
    <span
      className={cn(
        "font-montserrat text-sm font-semibold",
        onDark ? "text-white" : "text-ink"
      )}
    >
      {label}
    </span>
    {detail ? (
      <span className={cn("text-sm", onDark ? "text-white/60" : "text-muted-foreground")}>
        {detail}
      </span>
    ) : null}
  </div>
);

export { Stat };
