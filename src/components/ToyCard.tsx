import { ExternalLink } from "lucide-react";

interface ToyCardProps {
  name: string;
  image: string;
  description: string;
  price?: string;
  tag?: string;
  paypalLink?: string;
}

export default function ToyCard({ name, image, description, price, tag, paypalLink }: ToyCardProps) {
  return (
    <div className="group rounded-2xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-display font-semibold px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          {price && <span className="font-display text-lg font-bold text-primary">{price}</span>}
          {paypalLink && (
            <a
              href={paypalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-display text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Buy Now <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
