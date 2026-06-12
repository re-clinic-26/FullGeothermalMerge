import { Search } from 'lucide-react';
import mitLogo from '../assets/mit-logo.png';
import duspLogo from '../assets/dusp-logo.png';

const WIX_SITE_URL = 'https://renewable-energy.mit.edu';
const DUSP_URL = 'https://dusp.mit.edu';

const navLinks = [
  { label: 'Home', href: WIX_SITE_URL },
  { label: 'Research', href: `${WIX_SITE_URL}/research` },
  { label: 'About', href: `${WIX_SITE_URL}/about` },
  { label: 'Blogs', href: `${WIX_SITE_URL}/blog` },
  { label: 'Publications', href: `${WIX_SITE_URL}/projects` },
];

export function SiteHeader() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-4">
          <a href={WIX_SITE_URL} target="_blank" rel="noreferrer">
            <img src={mitLogo} alt="MIT Renewable Energy Clinic" className="h-8 w-auto sm:h-10" />
          </a>
          <div className="h-8 w-px bg-slate-300 sm:h-10" />
          <a href={DUSP_URL} target="_blank" rel="noreferrer">
            <img src={duspLogo} alt="DUSP" className="h-8 w-auto sm:h-10" />
          </a>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WIX_SITE_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Search"
            className="text-slate-700 transition-colors hover:text-blue-700"
          >
            <Search className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
