import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, FileText, Newspaper, PlayCircle, Radio, Presentation } from 'lucide-react';
import { resourceCards, type ResourceCard } from '../data/resources';

type Tone = 'light' | 'dark';
type ResourceCardVariant = 'default' | 'library';

interface RelatedResourcesProps {
  sections: string[];
  tone?: Tone;
  title?: string;
  description?: string;
}

export const typeLabel: Record<ResourceCard['type'], string> = {
  leaflet: 'Leaflet',
  'fact-sheet': 'Fact Sheet',
  video: 'Video',
  document: 'Document',
  presentation: 'Slides',
  flyer: 'Flyer',
  article: 'Article',
  radio: 'Audio',
  report: 'Report',
  chart: 'Chart',
  timeline: 'Timeline',
  guide: 'Guide',
  study: 'Study',
  draft: 'Draft',
  sample: 'Sample',
  faqs: 'FAQs',
};

export function getTypeIcon(type: ResourceCard['type']) {
  if (type === 'video') return PlayCircle;
  if (type === 'radio') return Radio;
  if (type === 'article') return Newspaper;
  if (type === 'presentation') return Presentation;
  return FileText;
}

function getResourceActionLabel(type: ResourceCard['type']) {
  if (type === 'video') return 'Watch Video';
  if (type === 'radio') return 'Listen Now';
  if (type === 'presentation') return 'View Slides';
  if (type === 'flyer' || type === 'fact-sheet') return 'View Fact Sheet';
  if (type === 'leaflet') return 'Read Leaflet';
  if (type === 'article') return 'Read Article';
  if (type === 'report' || type === 'study') return 'Read Report';
  if (type === 'timeline') return 'View Timeline';
  if (type === 'chart') return 'Open Chart';
  if (type === 'guide' || type === 'sample' || type === 'draft' || type === 'faqs') return 'Open Guide';
  return 'Open Resource';
}

export function ResourceCardTile({
  resource,
  tone,
  variant = 'default',
}: {
  resource: ResourceCard;
  tone: Tone;
  variant?: ResourceCardVariant;
}) {
  const Icon = getTypeIcon(resource.type);
  const isDark = tone === 'dark';
  const isLibrary = variant === 'library';
  const actionLabel = getResourceActionLabel(resource.type);

  if (isLibrary) {
    return (
      <motion.a
        href={resource.url}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -6 }}
        className="group min-w-0 transition-all duration-300"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          overflow: 'hidden',
          borderRadius: '28px',
          background: '#ffffff',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          boxShadow: '0 24px 60px -38px rgba(15, 23, 42, 0.28)',
        }}
      >
        <div
          className="relative bg-slate-100"
          style={{
            height: '230px',
            overflow: 'hidden',
            borderTopLeftRadius: '28px',
            borderTopRightRadius: '28px',
            flexShrink: 0,
          }}
        >
          {resource.thumbnail ? (
            <img
              src={resource.thumbnail}
              alt={resource.title}
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 via-stone-50 to-emerald-50">
              <div className="rounded-full bg-white p-4 text-slate-700 shadow-md">
                <Icon className="h-8 w-8" />
              </div>
            </div>
          )}
        </div>

        <div
          className="pb-6 pt-5"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minHeight: '290px',
            background: '#ffffff',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingBottom: '2rem',
          }}
        >
          <h3
            className="font-bold leading-[1.06] tracking-[-0.03em] text-slate-900"
            style={{ fontSize: '1.1rem', maxWidth: '16ch' }}
          >
            {resource.title}
          </h3>

          <div className="mt-4">
            <span
              className="inline-flex text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white"
              style={{ borderRadius: '999px', background: '#0b5f22', padding: '0.45rem 0.85rem' }}
            >
              Section {resource.section}
            </span>
          </div>

          <p className="mt-4 text-base leading-8 text-slate-600" style={{ flex: 1, maxWidth: '26ch' }}>
            {resource.description}
          </p>

          <div className="mt-8 inline-flex items-center gap-1.5 text-base font-semibold text-red-700">
            <span>{actionLabel}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6, scale: 1.01 }}
      className={[
        'group overflow-hidden rounded-2xl border transition-all duration-300',
        isDark
          ? 'border-white/10 bg-white/5 shadow-lg shadow-slate-950/30 hover:border-blue-400/40 hover:bg-white/10'
          : 'border-slate-200 bg-white shadow-lg hover:border-blue-200 hover:shadow-xl',
      ].join(' ')}
    >
      <div className="relative h-44 overflow-hidden">
        {resource.thumbnail ? (
          <>
            <img
              src={resource.thumbnail}
              alt={resource.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className={[
                'absolute inset-0',
                isDark
                  ? 'bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent'
                  : 'bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent',
              ].join(' ')}
            />
          </>
        ) : (
          <div
            className={[
              'flex h-full w-full items-center justify-center bg-gradient-to-br',
              isDark ? 'from-blue-950 via-slate-900 to-emerald-950' : 'from-blue-100 via-slate-100 to-emerald-100',
            ].join(' ')}
          >
            <div
              className={[
                'rounded-full p-4',
                isDark ? 'bg-white/10 text-blue-200' : 'bg-white text-blue-600 shadow-md',
              ].join(' ')}
            >
              <Icon className="h-8 w-8" />
            </div>
          </div>
        )}

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span
            className={[
              'rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
              isDark ? 'bg-white/10 text-white backdrop-blur' : 'bg-white/90 text-slate-700 shadow-sm',
            ].join(' ')}
          >
            Section {resource.section}
          </span>
        </div>
      </div>

      <div className="px-6 py-5 md:px-7 md:py-6">
        <div className="mb-3 flex items-center gap-2">
          <div
            className={[
              'rounded-full px-2.5 py-1 text-xs font-semibold',
              isDark ? 'bg-blue-500/15 text-blue-200' : 'bg-blue-50 text-blue-700',
            ].join(' ')}
          >
            {typeLabel[resource.type]}
          </div>
        </div>

        <h3 className={['mb-3 text-lg font-bold leading-snug', isDark ? 'text-white' : 'text-slate-800'].join(' ')}>
          {resource.title}
        </h3>
        <p className={['text-sm leading-6', isDark ? 'text-slate-300' : 'text-slate-600'].join(' ')}>
          {resource.description}
        </p>
        <div className={['mt-5 flex items-center gap-2 text-sm font-semibold', isDark ? 'text-blue-200' : 'text-blue-600'].join(' ')}>
          <span>Open resource</span>
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  );
}

export function RelatedResources({
  sections,
  tone = 'light',
  title = 'Related Resources',
  description = 'Browse research cards, explainers, and source materials connected to this section.',
}: RelatedResourcesProps) {
  const cards = resourceCards.filter((resource) => sections.includes(resource.section));
  const isDark = tone === 'dark';

  if (cards.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={[
        'mt-14 rounded-3xl border p-8',
        isDark
          ? 'border-white/10 bg-white/5 backdrop-blur'
          : 'border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50',
      ].join(' ')}
    >
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className={['mb-2 text-sm font-semibold uppercase tracking-[0.18em]', isDark ? 'text-blue-200' : 'text-blue-600'].join(' ')}>
            Research Library
          </p>
          <h3 className={['text-2xl font-bold', isDark ? 'text-white' : 'text-slate-800'].join(' ')}>{title}</h3>
        </div>
        <p className={['max-w-2xl text-sm leading-relaxed md:text-right', isDark ? 'text-slate-300' : 'text-slate-600'].join(' ')}>
          {description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((resource) => (
          <ResourceCardTile key={resource.id} resource={resource} tone={tone} />
        ))}
      </div>
    </motion.div>
  );
}
