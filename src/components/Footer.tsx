import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-lg font-semibold text-foreground">Bamba Melon</p>
        <p className="mt-1 text-sm text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="h-3 w-3 text-primary fill-primary" /> for fluffy friends everywhere
        </p>
        <p className="mt-3 text-xs text-muted-foreground">© {new Date().getFullYear()} Bamba Melon. All rights reserved.</p>
      </div>
    </footer>
  );
}
