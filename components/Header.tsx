import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/essays", label: "Essays" },
  { href: "/about", label: "About" },
  { href: "/colophon", label: "Colophon" },
  { href: "/contact", label: "Contact" },
];

export function Header({ current }: { current?: string }) {
  return (
    <header className="masthead-wrap">
      <div className="masthead">
        <p className="masthead-title">
          <Link href="/">Aldine</Link>
        </p>
      </div>
      <nav className="site-nav" aria-label="Site">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={current === l.href ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
