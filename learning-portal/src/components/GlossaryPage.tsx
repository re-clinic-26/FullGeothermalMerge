const glossaryUrl = 'https://airtable.com/appdMggAnww76txbq/shrjAMIUyayH2pA9O/tblLn4Ci0omIlqI48';
const glossaryEmbedUrl = 'https://airtable.com/embed/appdMggAnww76txbq/shrjAMIUyayH2pA9O/tblLn4Ci0omIlqI48?backgroundColor=green&viewControls=on';

export function GlossaryPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="px-3 pb-3 pt-3">
        <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_18px_60px_-46px_rgba(15,23,42,0.45)]">
          <iframe
            title="Geothermal glossary Airtable"
            src={glossaryEmbedUrl}
            className="block w-full bg-white"
            style={{ height: 'calc(100vh - 185px)', minHeight: '780px' }}
          />
        </div>
        <div className="mt-2 text-right text-xs text-slate-500">
          Having trouble viewing the embedded glossary?{' '}
          <a href={glossaryUrl} target="_blank" rel="noreferrer" className="font-semibold text-emerald-800 underline">
            Open it in Airtable
          </a>
          .
        </div>
      </section>
    </div>
  );
}
