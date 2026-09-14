import Link from 'next/link';

interface ArticleListItemProps {
  slug: string;
  date: string;
  title: string;
  description: string;
}

export default function ArticleListItem({ slug, date, title, description }: ArticleListItemProps) {
  return (
    <Link href={`/articles/${slug}`} className="group block">
      <article className="border-b border-border py-7 last:border-0">
        <time className="text-meta mb-2 block text-muted">{date}</time>

        <h3 className="mb-2 text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-[0.9375rem]">
          {title}
        </h3>

        <p className="text-body mb-3 text-muted">
          {description}
        </p>

        <span className="text-meta inline-block font-medium text-accent">
          Read article →
        </span>
      </article>
    </Link>
  );
}
