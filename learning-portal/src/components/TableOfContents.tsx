import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

type ChapterId = 'chapter-1' | 'chapter-2' | 'chapter-3';

interface Section {
  id: string;
  label: string;
  number: string;
}

interface Chapter {
  id: ChapterId;
  title: string;
  subtitle: string;
  sections: Section[];
}

interface TableOfContentsProps {
  chapters: Chapter[];
  currentChapter: ChapterId;
  setCurrentChapter: (chapter: ChapterId) => void;
  activeSection: string;
  visibleSections: Section[];
  currentView: 'portal' | 'resources' | 'glossary';
  onNavigatePortal: () => void;
  onNavigateResources: () => void;
  onNavigateGlossary: () => void;
}

export function TableOfContents({
  chapters,
  currentChapter,
  setCurrentChapter,
  activeSection,
  visibleSections,
  currentView,
  onNavigatePortal,
  onNavigateResources,
  onNavigateGlossary
}: TableOfContentsProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeChapter = chapters.find((chapter) => chapter.id === currentChapter);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentChapter, currentView]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const offset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const navButtonClass = (isActive: boolean) =>
    currentView !== 'portal'
      ? `rounded-full px-5 py-3 text-sm font-semibold transition-all ${
          isActive
            ? 'shadow-sm'
            : 'shadow-sm hover:bg-slate-50'
        }`
      : `rounded-full px-5 py-3 text-sm font-semibold transition-all ${
          isActive
            ? 'border border-cyan-300/80 bg-gradient-to-r from-cyan-200 to-blue-200 text-slate-950 shadow-md shadow-cyan-200/60'
            : 'border border-slate-400/70 bg-slate-900 text-slate-100 shadow-sm hover:bg-slate-800'
        }`;

  return (
    <section
      id="chapter-nav"
      className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-md backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <a
                href="https://renewable-energy.mit.edu/geothermal-energy-networks"
                className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 hover:bg-cyan-100"
              >
                GEN Homepage
              </a>
              <h2 className="text-lg font-bold text-slate-950 sm:text-xl">
                {currentView === 'resources' ? (
                  <>
                    Resource Library <span className="text-slate-500">/ Browse all portal materials</span>
                  </>
                ) : currentView === 'glossary' ? (
                  <>
                    Glossary <span className="text-slate-500">/ Key geothermal terms</span>
                  </>
                ) : (
                  <>
                    {activeChapter?.title} <span className="text-slate-600">/ {activeChapter?.subtitle}</span>
                  </>
                )}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-950 shadow-md shadow-slate-300/30 transition hover:bg-slate-100 md:hidden"
              aria-label="Toggle chapter navigation"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 text-slate-950" /> : <Menu className="h-5 w-5 text-slate-950" />}
            </button>

            <nav className="hidden items-center gap-3 md:flex">
              {currentView === 'portal' ? (
                <>
                  {chapters.map((chapter) => {
                    const isActive = chapter.id === currentChapter;

                    return (
                      <motion.button
                        key={chapter.id}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setCurrentChapter(chapter.id)}
                        className={navButtonClass(isActive)}
                      >
                        {chapter.title}
                      </motion.button>
                    );
                  })}

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onNavigateResources}
                    className={navButtonClass(false)}
                  >
                    Resources
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onNavigateGlossary}
                    className={navButtonClass(false)}
                  >
                    Glossary
                  </motion.button>
                </>
              ) : (
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onNavigatePortal}
                  className={navButtonClass(true)}
                  style={{
                    backgroundColor: '#0b5f22',
                    color: '#ffffff',
                    border: '1px solid #0b5f22',
                    boxShadow: '0 8px 20px -14px rgba(11, 95, 34, 0.65)',
                  }}
                >
                  Back To Portal
                </motion.button>
              )}
            </nav>
          </div>

          {isMobileMenuOpen ? (
            <div className="mt-4 space-y-3 md:hidden">
              <div className="grid grid-cols-1 gap-2">
                {currentView === 'portal'
                  ? chapters.map((chapter) => {
                      const isActive = chapter.id === currentChapter;

                      return (
                        <button
                          key={chapter.id}
                          type="button"
                          onClick={() => setCurrentChapter(chapter.id)}
                          className={`rounded-2xl px-4 py-3 text-left transition ${
                            isActive
                              ? 'border border-cyan-300/80 bg-cyan-200 text-slate-950 shadow-md shadow-cyan-200/60'
                              : 'border border-slate-400/70 bg-slate-900 text-slate-100 shadow-sm'
                          }`}
                        >
                          <div className="font-semibold">{chapter.title}</div>
                          <div className={`text-sm ${isActive ? 'text-slate-900/80' : 'text-slate-300'}`}>
                            {chapter.subtitle}
                          </div>
                        </button>
                      );
                    })
                  : null}

                {currentView === 'portal' ? (
                  <button
                    type="button"
                    onClick={onNavigateGlossary}
                    className="rounded-2xl border border-slate-400/70 bg-slate-900 px-4 py-3 text-left text-slate-100 shadow-sm transition"
                  >
                    <div className="font-semibold">Glossary</div>
                    <div className="text-sm text-slate-300">Browse key geothermal terms</div>
                  </button>
                ) : null}

                <button
                  type="button"
                  onClick={() => {
                    if (currentView !== 'portal') {
                      onNavigatePortal();
                    } else {
                      onNavigateResources();
                    }
                  }}
                  className={`rounded-2xl px-4 py-3 text-left transition ${
                    currentView !== 'portal'
                      ? 'border border-emerald-900 bg-emerald-900 text-white shadow-sm'
                      : 'border border-slate-400/70 bg-slate-900 text-slate-100 shadow-sm'
                  }`}
                >
                  <div className="font-semibold">{currentView !== 'portal' ? 'Back To Portal' : 'Resources'}</div>
                  <div className={`text-sm ${currentView !== 'portal' ? 'text-white/80' : 'text-slate-300'}`}>
                    {currentView !== 'portal' ? 'Return to chapter view' : 'Browse all resource cards'}
                  </div>
                </button>
              </div>
            </div>
          ) : null}

          {currentView === 'portal' ? (
            <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-200 pt-4">
              {visibleSections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`rounded-full border px-3.5 py-2 text-sm font-medium shadow-sm transition ${
                      isActive
                        ? 'border-cyan-300/70 bg-cyan-100 text-slate-950 shadow-cyan-950/20'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-semibold">{section.number}</span> {section.label}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
              {currentView === 'resources'
                ? 'Browse the full research library by chapter or keyword.'
                : 'Browse glossary terms and definitions from the shared Airtable glossary.'}
            </div>
          )}
        </div>
      </section>
  );
}
