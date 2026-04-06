import { Menu, X } from "lucide-react";
import { useState } from "react";

interface TopNavigationProps {
  onNavigate: (id: string) => void;
}

export function TopNavigation({ onNavigate }: TopNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "chapter1", label: "CH. 1: FOUNDATIONS" },
    { id: "chapter2", label: "CH. 2: COMMUNITY PROCESS" },
    { id: "chapter3", label: "CH. 3: HARDWARE" },
    { id: "resources", label: "RESOURCES" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => onNavigate("hero")}
            className="flex items-center gap-1 text-lg font-serif font-semibold"
          >
            <span className="text-foreground">GEOTHERMAL</span>
            <span className="text-primary">PORTAL</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="nav-link text-xs tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default TopNavigation;
