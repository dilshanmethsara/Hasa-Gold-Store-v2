import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img 
        src="/hasalogo.png" 
        alt="HASA Gold Store" 
        className={`h-9 object-contain group-hover:scale-105 transition-transform ${compact ? 'w-9' : 'w-auto'}`}
      />
    </Link>
  );
}
