import { Reveal } from "@/components/ui/reveal";
import { Stat } from "@/components/ui/stat";
import { metrics } from "@/data/metrics";

const Metrics = () => (
  <section className="border-y border-border bg-background py-16 md:py-20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Reveal key={metric.label} delay={index * 0.08}>
            <Stat value={metric.value} label={metric.label} detail={metric.detail} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Metrics;
