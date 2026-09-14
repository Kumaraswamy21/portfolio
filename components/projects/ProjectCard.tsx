import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ icon, title, description, link }: ProjectCardProps) {
  const domain = link.replace('https://', '').replace('http://', '').split('/')[0];

  return (
    <Link href={link} className="group block h-full" target="_blank" rel="noopener noreferrer">
      <article className="flex h-full flex-col rounded-2xl border border-border bg-surface/70 p-6 transition-colors hover:border-accent/40 hover:bg-surface dark:bg-zinc-900/50">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-xl">
          {icon}
        </div>

        <h3 className="mb-2 text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-[0.9375rem]">
          {title}
        </h3>

        <p className="text-body mb-5 flex-1 text-muted">
          {description}
        </p>

        <div className="text-meta flex items-center gap-2 font-medium text-accent">
          <ExternalLink className="h-4 w-4" />
          <span>{domain}</span>
        </div>
      </article>
    </Link>
  );
}
