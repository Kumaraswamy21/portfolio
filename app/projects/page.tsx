import type { Metadata } from 'next';
import PageHeading from '../../components/ui/PageHeading';
import ProjectsGrid from '../../components/projects/ProjectsGrid';
import { projects } from '../../lib/data/projects';

export const metadata: Metadata = {
  title: 'Projects - Portfolio',
  description: 'A collection of projects I have worked on.',
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeading
        title="Things I've built — mostly for myself, sometimes for everyone else."
        description="A collection of projects I've worked on."
      />
      
      <ProjectsGrid projects={projects} />
    </div>
  );
}