import ProjectCard from './ProjectCard';
import { Project } from '../../lib/types';

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          icon={project.icon}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}