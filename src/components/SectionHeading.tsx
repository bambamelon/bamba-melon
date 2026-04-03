import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  linkTo?: string;
  linkLabel?: string;
}

export default function SectionHeading({ title, subtitle, linkTo, linkLabel }: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
      </div>
      {linkTo && (
        <Link
          to={linkTo}
          className="hidden sm:inline-flex items-center gap-1 text-sm font-display font-medium text-primary hover:underline"
        >
          {linkLabel || "View all"} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
