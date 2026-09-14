import type { Metadata } from 'next';
import PageHeading from '../../components/ui/PageHeading';
import InfoListSection from '../../components/ui/InfoListSection';
import { skills } from '../../lib/data/skills';

export const metadata: Metadata = {
  title: 'Skills - Portfolio',
  description: 'Technologies and tools I use regularly.',
};

export default function SkillsPage() {
  return (
    <div>
      <PageHeading
        title="What I work with."
        description="Technologies and tools I use regularly."
      />
      
      {skills.map((category, index) => (
        <InfoListSection
          key={index}
          label={category.category}
          rows={category.items}
        />
      ))}
    </div>
  );
}