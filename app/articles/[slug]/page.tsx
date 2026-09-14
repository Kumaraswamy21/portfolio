import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { articles } from '../../../lib/data/articles';
import Link from 'next/link';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

    return parts.map((part, partIndex) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
      }

      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={partIndex}>{part.slice(1, -1)}</em>;
      }

      return part;
    });
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={index} className="h-4" />;

      if (trimmed.startsWith('# ')) {
        return <h1 key={index} className="text-2xl font-bold mt-8 mb-4">{trimmed.slice(2)}</h1>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={index} className="text-xl font-bold mt-6 mb-3">{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={index} className="text-lg font-bold mt-4 mb-2">{trimmed.slice(4)}</h3>;
      }
      if (trimmed.startsWith('```')) {
        return null;
      }
      if (/^\d+\.\s/.test(trimmed)) {
        return (
          <li key={index} className="ml-4 mb-2 list-decimal">
            {renderInline(trimmed.replace(/^\d+\.\s/, ''))}
          </li>
        );
      }
      if (trimmed.startsWith('- ')) {
        return (
          <li key={index} className="ml-4 mb-2 list-disc">
            {renderInline(trimmed.slice(2))}
          </li>
        );
      }

      return (
        <p key={index} className="mb-4 leading-relaxed">
          {renderInline(trimmed)}
        </p>
      );
    });
  };

  return (
    <div>
      <Link
        href="/articles"
        className="text-meta mb-6 inline-block font-medium text-accent hover:underline"
      >
        ← Back to articles
      </Link>

      <div className="text-meta mb-4 text-muted">
        {article.date}
      </div>

      <h1 className="text-page-title mb-8 text-foreground">
        {article.title}
      </h1>

      <div className="prose prose-neutral max-w-none text-body dark:prose-invert prose-headings:tracking-tight prose-a:text-accent">
        {renderContent(article.content)}
      </div>
    </div>
  );
}