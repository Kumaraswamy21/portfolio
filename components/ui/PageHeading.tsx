interface PageHeadingProps {
  title: string;
  description: string;
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <h1 className="text-page-title mb-4 text-foreground">
        {title}
      </h1>
      <p className="text-body-lg text-muted">
        {description}
      </p>
    </div>
  );
}
