import { useEffect, useMemo, useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { IndividualHomeHeating } from './components/IndividualHomeHeating';
import { DistrictHeating } from './components/DistrictHeating';
import { ElectricityGeneration } from './components/ElectricityGeneration';
import { Benefits } from './components/Benefits';
import { Costs } from './components/Costs';
import { BuildCoalition } from './components/BuildCoalition';
import { CommunityOpportunities } from './components/CommunityOpportunities';
import { DesignProcess } from './components/DesignProcess';
import { SiteSelection } from './components/SiteSelection';
import { ScopingStudies } from './components/ScopingStudies';
import { BuildingRetrofits } from './components/BuildingRetrofits';
import { CommunityEngagement } from './components/CommunityEngagement';
import { HomeownerFAQs } from './components/HomeownerFAQs';
import { InteractiveMap } from './components/InteractiveMap';
import { QuizSection } from './components/QuizSection';
import { GlossaryPage } from './components/GlossaryPage';
import { ResourcesPage } from './components/ResourcesPage';
import { TableOfContents } from './components/TableOfContents';
import { chapter3Quiz } from './data/quizzes';

type ChapterId = 'chapter-1' | 'chapter-2' | 'chapter-3';
type AppView = 'portal' | 'resources' | 'glossary';

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

const chapters: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Chapter 1',
    subtitle: 'Geothermal Basics',
    sections: [
      { id: 'introduction', label: 'Introduction', number: '1.1' },
      { id: 'individual-heating', label: 'Individual Home Heating', number: '1.2' },
      { id: 'district-heating', label: 'District Heating', number: '1.3' },
      { id: 'electricity-generation', label: 'Electricity Generation', number: '1.4' },
      { id: 'benefits', label: 'Benefits', number: '1.5' },
      { id: 'costs', label: 'Costs', number: '1.6' }
    ]
  },
  {
    id: 'chapter-2',
    title: 'Chapter 2',
    subtitle: 'Community Organizing',
    sections: [
      { id: 'build-coalition', label: 'Build a Coalition', number: '2.1' },
      { id: 'community-opportunities', label: 'Community Opportunities', number: '2.2' },
      { id: 'design-process', label: 'Coalition Process', number: '2.3' }
    ]
  },
  {
    id: 'chapter-3',
    title: 'Chapter 3',
    subtitle: 'Project Development',
    sections: [
      { id: 'site-selection', label: 'Site Selection', number: '3.1' },
      { id: 'scoping-studies', label: 'Scoping Studies', number: '3.2' },
      { id: 'building-retrofits', label: 'Building Retrofits', number: '3.3' },
      { id: 'community-engagement', label: 'Community Engagement', number: '3.4' },
      { id: 'homeowner-faqs', label: 'Homeowner FAQs', number: '3.5' },
      { id: 'global-map', label: 'Global Examples', number: '3.6' }
    ]
  }
];

function ChapterContent({ currentChapter }: { currentChapter: ChapterId }) {
  if (currentChapter === 'chapter-1') {
    return (
      <>
        <Introduction />
        <IndividualHomeHeating />
        <DistrictHeating />
        <ElectricityGeneration />
        <Benefits />
        <Costs />
      </>
    );
  }

  if (currentChapter === 'chapter-2') {
    return (
      <>
        <BuildCoalition />
        <CommunityOpportunities />
        <DesignProcess />
      </>
    );
  }

  return (
    <>
      <SiteSelection />
      <ScopingStudies />
      <BuildingRetrofits />
      <CommunityEngagement />
      <HomeownerFAQs />
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <QuizSection
            quizId="chapter-3-quiz"
            title="Chapter 3 Quiz: Project Development"
            questions={chapter3Quiz}
          />
        </div>
      </div>
      <InteractiveMap />
    </>
  );
}

export default function App() {
  const getViewFromPath = (): AppView => {
    const normalizedPath = window.location.pathname.replace(/\/+$/, '');
    if (normalizedPath.endsWith('/resources')) return 'resources';
    if (normalizedPath.endsWith('/glossary')) return 'glossary';
    return 'portal';
  };

  const [currentView, setCurrentView] = useState<AppView>(() => getViewFromPath());
  const [currentChapter, setCurrentChapter] = useState<ChapterId>('chapter-1');
  const visibleSections = useMemo(
    () => chapters.find((chapter) => chapter.id === currentChapter)?.sections ?? [],
    [currentChapter]
  );
  const [activeSection, setActiveSection] = useState(visibleSections[0]?.id ?? 'introduction');

  useEffect(() => {
    setActiveSection(visibleSections[0]?.id ?? 'introduction');
  }, [visibleSections]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getViewFromPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (currentView !== 'portal') {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const section of visibleSections) {
        const element = document.getElementById(section.id);
        if (!element) {
          continue;
        }

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView, visibleSections]);

  useEffect(() => {
    if (currentView !== 'portal') {
      return;
    }

    const chapterNav = document.getElementById('chapter-nav');
    if (!chapterNav) {
      return;
    }

    const top = chapterNav.getBoundingClientRect().top + window.pageYOffset - 24;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [currentChapter, currentView]);

  const buildPath = (view: AppView) => {
    const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';
    if (view === 'resources') return `${base}/resources` || '/resources';
    if (view === 'glossary') return `${base}/glossary` || '/glossary';
    return `${base}/` || '/';
  };

  const navigateToView = (view: AppView) => {
    const nextPath = buildPath(view);
    window.history.pushState({}, '', nextPath);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <SiteHeader />
      {currentView === 'portal' ? (
        <>
          <Hero />
          <TableOfContents
            chapters={chapters}
            currentChapter={currentChapter}
            setCurrentChapter={setCurrentChapter}
            activeSection={activeSection}
            visibleSections={visibleSections}
            currentView={currentView}
            onNavigatePortal={() => navigateToView('portal')}
            onNavigateResources={() => navigateToView('resources')}
            onNavigateGlossary={() => navigateToView('glossary')}
          />
          <div className="relative">
            <ChapterContent currentChapter={currentChapter} />
          </div>
        </>
      ) : (
        <>
          <TableOfContents
            chapters={chapters}
            currentChapter={currentChapter}
            setCurrentChapter={setCurrentChapter}
            activeSection={activeSection}
            visibleSections={visibleSections}
            currentView={currentView}
            onNavigatePortal={() => navigateToView('portal')}
            onNavigateResources={() => navigateToView('resources')}
            onNavigateGlossary={() => navigateToView('glossary')}
          />
          {currentView === 'resources' ? <ResourcesPage /> : <GlossaryPage />}
        </>
      )}
      <SiteFooter />
    </div>
  );
}
