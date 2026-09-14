import type { Metadata } from 'next';
import PageHeading from '../../components/ui/PageHeading';
import InfoListSection from '../../components/ui/InfoListSection';
import { changelog } from '../../lib/data/changelog';

export const metadata: Metadata = {
  title: 'Changelog - Portfolio',
  description: 'Professional history and significant milestones.',
};

export default function ChangelogPage() {
  return (
    <div>
      <PageHeading
        title="A running log of the work I've done."
        description="Professional history and significant milestones."
      />
      
      {changelog.map((entry, index) => (
        <InfoListSection
          key={index}
          label={entry.dateRange}
          rows={[
            {
              title: entry.role,
              description: entry.description
            }
          ]}
        />
      ))}
    </div>
  );
}