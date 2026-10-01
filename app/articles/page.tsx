import type { Metadata } from 'next';
import PageHeading from '../../components/ui/PageHeading';
import ArticleListItem from '../../components/articles/ArticleListItem';
import { articles } from '../../lib/data/articles';

export const metadata: Metadata = {
  title: 'Articles - Portfolio',
  description: 'Writing on software engineering and AI, published on LinkedIn.',
};

export default function ArticlesPage() {
  return (
    <div>
      <PageHeading
        title="Articles"
        description="Thoughts on software engineering and AI. Full posts are on LinkedIn."
      />

      <div className="space-y-0">
        {articles.map((article) => (
          <ArticleListItem
            key={article.slug}
            date={article.date}
            title={article.title}
            description={article.description}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}