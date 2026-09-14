interface BioTextProps {
  paragraphs: string[];
}

export default function BioText({ paragraphs }: BioTextProps) {
  return (
    <div className="space-y-8">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-body text-muted [&_em]:font-medium [&_em]:not-italic [&_em]:text-foreground"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
}
