import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/about"
      className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-border transition hover:ring-accent"
      aria-label="Home"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,#5eead4,transparent_45%),linear-gradient(145deg,#0f766e,#134e4a)]"
      />
      <span className="relative flex h-full w-full items-center justify-center text-sm font-semibold text-white">
        K
      </span>
    </Link>
  );
}
