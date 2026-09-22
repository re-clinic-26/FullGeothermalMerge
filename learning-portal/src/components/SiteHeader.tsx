import { CircleChevronDown, Search } from 'lucide-react';
import mitLogo from '../assets/mit-logo.png';
import duspLogo from '../assets/dusp-logo.png';

const WIX_SITE_URL = 'https://renewable-energy.mit.edu';
const DUSP_URL = 'https://dusp.mit.edu';

const navLinks = [
  { label: 'Home', href: WIX_SITE_URL },
  { label: 'About', href: `${WIX_SITE_URL}/about` },
  { label: 'Blogs', href: `${WIX_SITE_URL}/blog` },
  { label: 'Publications', href: `${WIX_SITE_URL}/projects` },
  {
    label: 'Research',
    href: `${WIX_SITE_URL}/services-4`,
    highlighted: true,
    dropdown: [
      { label: 'Geothermal Energy Networks', href: `${WIX_SITE_URL}/geothermal-energy-networks` },
      { label: 'CBA Toolkit', href: `${WIX_SITE_URL}/cba-toolkit` },
      { label: 'Community-Owned Solar', href: `${WIX_SITE_URL}/community-owned-solar` },
    ],
  },
];

export function SiteHeader() {
  return (
    <header className="w-full bg-white">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex items-center gap-5">
          <a href={WIX_SITE_URL}>
            <img src={mitLogo} alt="MIT Renewable Energy Clinic" className="h-8 w-auto sm:h-10" />
          </a>
          <div className="h-8 w-px bg-slate-400 sm:h-10" />
          <a href={DUSP_URL}>
            <img src={duspLogo} alt="DUSP" className="h-8 w-auto sm:h-10" />
          </a>
        </div>

        <nav className="hidden items-center gap-10 md:flex lg:gap-16 xl:gap-20">
          {navLinks.map((link) => (
            <div key={link.label} className="group relative">
              <a
                href={link.href}
                className={`flex items-center gap-2 whitespace-nowrap text-[17px] transition-colors ${
                  link.highlighted
                    ? 'text-[#4a5fc4] hover:text-[#33459c]'
                    : 'text-slate-800 hover:text-[#4a5fc4]'
                }`}
              >
                {link.label}
                {link.dropdown ? <CircleChevronDown className="h-[18px] w-[18px]" strokeWidth={1.5} /> : null}
              </a>

              {link.dropdown ? (
                <div className="invisible absolute right-0 top-full z-50 whitespace-nowrap bg-slate-100 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-2 text-right text-[17px] text-slate-800 hover:bg-slate-200 hover:text-[#4a5fc4]"
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
            className="text-slate-900 transition-colors hover:text-[#4a5fc4]"
          >
            <Search className="h-5 w-5" strokeWidth={2} />
          </a>
        </nav>
      </div>
    </header>
  );
}
