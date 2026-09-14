'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/uses', label: 'Toolkit' },
  { href: '/articles', label: 'Articles' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 pt-6 pb-2">
        <Logo />

        <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 items-center gap-6 rounded-full border border-border/80 bg-surface/80 px-5 py-2.5 shadow-sm backdrop-blur-md md:flex dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-nav transition-colors ${
                  active
                    ? 'nav-active'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-b border-border px-6 pb-4 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-nav ${
                    active ? 'text-accent' : 'text-muted hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
