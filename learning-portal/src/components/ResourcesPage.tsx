import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { ResourceCardTile } from './RelatedResources';
import { resourceCards } from '../data/resources';

const chapterOptions = [
  { id: 'all', label: 'Show All' },
  { id: '1', label: 'Ch 1: Basics' },
  { id: '2', label: 'Ch 2: Organizing' },
  { id: '3', label: 'Ch 3: Development' },
];

export function ResourcesPage() {
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [query, setQuery] = useState('');

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return resourceCards.filter((resource) => {
      const chapterMatches = selectedChapter === 'all' || resource.section.startsWith(`${selectedChapter}.`);
      const queryMatches =
        normalizedQuery.length === 0 ||
        resource.title.toLowerCase().includes(normalizedQuery) ||
        resource.description.toLowerCase().includes(normalizedQuery) ||
        resource.section.toLowerCase().includes(normalizedQuery);

      return chapterMatches && queryMatches;
    });
  }, [query, selectedChapter]);

  return (
    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50/70">
      <section className="px-6 pb-16 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-[-0.04em] text-slate-900 sm:text-6xl">Resource Library</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Access the complete collection of research, templates, and guides. Use the filters below to find
              specific topics.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-3">
            {chapterOptions.map((option) => {
              const isActive = selectedChapter === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedChapter(option.id)}
                  className="rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.04em] transition"
                  style={
                    isActive
                      ? {
                          backgroundColor: '#0b5f22',
                          color: '#ffffff',
                          border: '1px solid #0b5f22',
                          boxShadow: '0 8px 20px -14px rgba(11, 95, 34, 0.65)',
                        }
                      : {
                          backgroundColor: '#ffffff',
                          color: '#475569',
                          border: '1px solid #cbd5e1',
                        }
                  }
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-6 max-w-xl">
            <div
              className="rounded-full bg-white shadow-sm"
              style={{
                alignItems: 'center',
                border: '1px solid #cbd5e1',
                display: 'flex',
                gap: '0.85rem',
                minHeight: '2.875rem',
                paddingLeft: '1.35rem',
                paddingRight: '1rem',
              }}
            >
              <Search className="h-4 w-4 shrink-0 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, topic, or section"
                className="w-full bg-transparent py-3 text-sm outline-none"
                style={{
                  color: '#334155',
                }}
              />
            </div>
          </div>

          <div className="mt-9 text-center text-sm text-slate-500">
            Showing {filteredResources.length} of {resourceCards.length} resources
          </div>

          {filteredResources.length > 0 ? (
            <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredResources.map((resource) => (
                <ResourceCardTile key={resource.id} resource={resource} tone="light" variant="library" />
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-16 max-w-2xl rounded-[2rem] bg-white px-8 py-12 text-center shadow-[0_24px_60px_-40px_rgba(15,23,42,0.4)]">
              <h2 className="text-2xl font-bold text-slate-900">No resources matched that search</h2>
              <p className="mt-3 text-slate-600">Try a broader chapter filter or a shorter search term.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
