import InfoListRow from './InfoListRow';

interface InfoListSectionProps {
  label: string;
  rows: Array<{
    title: string;
    description: string;
  }>;
}

export default function InfoListSection({ label, rows }: InfoListSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-sm font-semibold tracking-tight text-foreground sm:text-[0.9375rem] md:hidden">
        {label}
      </h2>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="hidden w-[140px] flex-shrink-0 md:block">
          <h2 className="sticky top-24 text-sm font-semibold tracking-tight text-foreground sm:text-[0.9375rem]">
            {label}
          </h2>
        </div>

        <div className="flex-1 border-border pl-0 md:border-l md:border-zinc-200 md:pl-6 dark:md:border-zinc-800">
          {rows.map((row, index) => (
            <InfoListRow key={index} title={row.title} description={row.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
