import Link from 'next/link';

interface ArticleListItemProps {
  date: string;
  title: string;
  description: string;
  url: string;
}

export default function ArticleListItem({ date, title, description, url }: ArticleListItemProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      aria-label={`${title} (opens on LinkedIn in a new tab)`}
    >
      <article className="border-b border-border py-7 last:border-0">
        <time className="text-meta mb-2 block text-muted">{date}</time>

        <h3 className="mb-2 text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-[0.9375rem]">
          {title}
        </h3>

        <p className="text-body mb-3 text-muted">
          {description}
        </p>

        <span className="text-meta inline-block font-medium text-accent">
          Read on LinkedIn →
        </span>
      </article>
    </Link>
  );
}
