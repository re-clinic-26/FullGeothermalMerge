import { Search } from 'lucide-react';
import mitLogo from '../assets/mit-logo.png';
import duspLogo from '../assets/dusp-logo.png';

const WIX_SITE_URL = 'https://renewable-energy.mit.edu';
const DUSP_URL = 'https://dusp.mit.edu';

const navLinks = [
  { label: 'Home', href: WIX_SITE_URL },
  {
    label: 'Research',
    href: `${WIX_SITE_URL}/services-4`,
    dropdown: [{ label: 'Geothermal Energy Networks', href: `${WIX_SITE_URL}/geothermal-energy-networks` }],
  },
  {
    label: 'About',
    href: `${WIX_SITE_URL}/about`,
    dropdown: [{ label: 'Education', href: `${WIX_SITE_URL}/general-8` }],
  },
  { label: 'Blogs', href: `${WIX_SITE_URL}/blog` },
  { label: 'Publications', href: `${WIX_SITE_URL}/projects` },
];

export function SiteHeader() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex items-center gap-3">
          <a href={WIX_SITE_URL}>
            <img src={mitLogo} alt="MIT Renewable Energy Clinic" className="h-5 w-auto sm:h-6" />
          </a>
          <div className="h-5 w-px bg-slate-300 sm:h-6" />
          <a href={DUSP_URL}>
            <img src={duspLogo} alt="DUSP" className="h-5 w-auto sm:h-6" />
          </a>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="group relative">
              <a
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
              >
                {link.label}
              </a>

              {link.dropdown ? (
                <div className="invisible absolute right-0 top-full z-50 whitespace-nowrap bg-slate-100 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-3 text-base text-slate-800 hover:bg-slate-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <a
            href={WIX_SITE_URL}
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
