import * as React from "react";
import { cn } from "@/lib/utils";

type SectionTone = "light" | "surface" | "navy";

const toneStyles: Record<SectionTone, string> = {
  light: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  navy: "bg-navy text-white",
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  containerClassName?: string;
  bleed?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ tone = "light", className, containerClassName, bleed = false, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("relative py-20 md:py-28", toneStyles[tone], className)}
      {...props}
    >
      {bleed ? (
        children
      ) : (
        <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>{children}</div>
      )}
    </section>
  )
);
Section.displayName = "Section";

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  onDark?: boolean;
}

const Eyebrow = ({ className, onDark = false, children, ...props }: EyebrowProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-3 font-montserrat text-xs font-semibold uppercase tracking-[0.18em]",
      onDark ? "text-white/70" : "text-navy/70",
      className
    )}
    {...props}
  >
    <span aria-hidden className="h-px w-8 bg-gold" />
    {children}
  </span>
);

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  as?: "h1" | "h2" | "h3";
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  as: Heading = "h2",
  className,
  ...props
}: SectionHeadingProps) => (
  <div
    className={cn(
      "flex flex-col gap-4",
      align === "center" && "items-center text-center",
      className
    )}
    {...props}
  >
    {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
    <Heading
      className={cn(
        "font-montserrat font-bold tracking-tightest text-balance",
        Heading === "h1"
          ? "text-4xl leading-[1.05] md:text-6xl lg:text-7xl"
          : "text-3xl leading-[1.1] md:text-4xl lg:text-5xl",
        onDark ? "text-white" : "text-navy"
      )}
    >
      {title}
    </Heading>
    {description ? (
      <p
        className={cn(
          "max-w-2xl text-base leading-relaxed text-pretty md:text-lg",
          align === "center" && "mx-auto",
          onDark ? "text-white/70" : "text-muted-foreground"
        )}
      >
        {description}
      </p>
    ) : null}
  </div>
);

export { Section, SectionHeading, Eyebrow };
