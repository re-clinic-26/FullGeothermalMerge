import mitLogo from '../assets/mit-logo.png';
import duspLogo from '../assets/dusp-logo.png';

const WIX_SITE_URL = 'https://renewable-energy.mit.edu';
const DUSP_URL = 'https://dusp.mit.edu';

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="flex w-full flex-col items-center gap-6 px-4 py-8 sm:px-6">
        {/* Contact row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <span>105 Massachusetts Ave Cambridge, MA 02139</span>
          <span className="hidden h-4 w-px bg-slate-300 sm:block" />
          <a href="mailto:renewable-energy@mit.edu" className="text-blue-600 hover:underline">
            renewable-energy@mit.edu
          </a>
          <span className="hidden h-4 w-px bg-slate-300 sm:block" />
          <span>(617) 253-2026</span>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-slate-200" />

        {/* Logos */}
        <div className="flex items-center gap-6">
          <a href={WIX_SITE_URL}>
            <img src={mitLogo} alt="MIT Renewable Energy Clinic" className="h-6 w-auto sm:h-8" />
          </a>
          <a href={DUSP_URL}>
            <img src={duspLogo} alt="DUSP" className="h-6 w-auto sm:h-8" />
          </a>
        </div>

        {/* Accessibility link */}
        <a
          href="https://accessibility.mit.edu"
          className="text-sm text-blue-600 hover:underline"
        >
          https://accessibility.mit.edu
        </a>
      </div>
    </footer>
  );
}
