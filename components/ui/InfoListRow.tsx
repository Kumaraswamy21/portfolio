interface InfoListRowProps {
  title: string;
  description: string;
}

export default function InfoListRow({ title, description }: InfoListRowProps) {
  return (
    <div className="mb-5 last:mb-0">
      <h3 className="mb-1 text-sm font-semibold tracking-tight text-foreground sm:text-[0.9375rem]">
        {title}
      </h3>
      <p className="text-body text-muted">
        {description}
      </p>
    </div>
  );
}
