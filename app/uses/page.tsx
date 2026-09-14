import type { Metadata } from 'next';
import PageHeading from '../../components/ui/PageHeading';
import InfoListSection from '../../components/ui/InfoListSection';
import { toolkit } from '../../lib/data/toolkit';

export const metadata: Metadata = {
  title: 'Toolkit - Portfolio',
  description: 'Hardware, software, and tools that make me productive.',
};

export default function UsesPage() {
  return (
    <div>
      <PageHeading
        title="The toolkit I reach for every day."
        description="Hardware, software, and tools that make me productive."
      />
      
      {toolkit.map((category, index) => (
        <InfoListSection
          key={index}
          label={category.category}
          rows={category.items}
        />
      ))}
    </div>
  );
}