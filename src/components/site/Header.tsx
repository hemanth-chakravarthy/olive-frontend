import { Link } from "@tanstack/react-router";
import logo from "@/assets/OliveApp.svg";
import { ArrowRight, ChevronDown } from "lucide-react";

const nav = [
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#", hasDropdown: true },
  { label: "Restaurants", href: "#" },
  { label: "Food", href: "#", hasDropdown: true },
];

export function Header() {
  return (
    <header className="relative bg-background border-b border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl text-primary z-10">
          <img src={logo} alt="Olive logo" width={36} height={36} className="h-20 w-20" />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/70 absolute left-1/2 -translate-x-1/2">
          {nav.map((n) => (
            <a 
              key={n.label} 
              href={n.href} 
              className="hover:text-primary transition-colors flex items-center gap-1 group"
            >
              {n.label}
              {n.hasDropdown && (
                <ChevronDown className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
              )}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3 z-10">
          <a href="#" className="hidden sm:inline text-sm text-foreground/80 hover:text-primary">
            Sign in
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Get Olive <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
