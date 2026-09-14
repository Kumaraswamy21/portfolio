import Link from 'next/link';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/uses', label: 'Toolkit' },
  { href: '/articles', label: 'Articles' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-4 border-t border-border px-6 py-8 md:flex-row md:items-center">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-meta text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-meta text-muted">
          © {year} Kumaraswamy Godugu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
