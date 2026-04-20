import { type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <div
      data-ocid={`feature-card-${title.toLowerCase()}`}
      className="animate-fade-up"
      style={{ animationDelay: `${index * 0.12}s`, animationFillMode: "both" }}
    >
      <Card className="bg-card border-border p-6 h-full group hover:border-primary/40 transition-smooth shadow-card hover:shadow-elevated hover:-translate-y-1">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
          <Icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
        </div>
        <h3 className="font-display font-semibold text-foreground text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </div>
  );
}
