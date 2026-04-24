import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  className?: string;
}

export function SectionHeading({ title, subtitle, icon: Icon, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      {Icon && (
        <Icon className="mx-auto mb-4 h-12 w-12 text-primary" />
      )}
      <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
