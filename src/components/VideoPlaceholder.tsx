import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  title: string;
  thumbnail?: string;
}

export default function VideoPlaceholder({ title, thumbnail }: VideoPlaceholderProps) {
  return (
    <div className="group rounded-2xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 cursor-pointer">
      <div className="relative aspect-video bg-muted flex items-center justify-center">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted" />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-warm group-hover:scale-110 transition-transform">
            <Play className="h-6 w-6 text-primary-foreground ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-sm font-semibold text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1">Coming soon</p>
      </div>
    </div>
  );
}
