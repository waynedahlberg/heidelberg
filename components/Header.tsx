"use client";

import { useMediaQuery, PHONE_NAV_QUERY } from "@/hooks/useMediaQuery";
import { quietTransitionFast } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/essays", label: "Essays" },
  { href: "/about", label: "About" },
  { href: "/colophon", label: "Colophon" },
  { href: "/contact", label: "Contact" },
];

export function Header({ current }: { current?: string }) {
  const pathname = usePathname();
  const navId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const phone = useMediaQuery(PHONE_NAV_QUERY, true);
  const reduceMotion = useReducedMotion();
  const expanded = !phone || open;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="masthead-wrap">
      <div className="masthead">
        <div className="masthead-bar">
          <p className="masthead-title">
            <Link href="/">Aldine</Link>
          </p>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls={navId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle-label">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>
      <motion.nav
        id={navId}
        className="site-nav"
        aria-label="Site"
        data-expanded={expanded ? "true" : undefined}
        initial={false}
        animate={expanded ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
            opacity: 1,
          },
          closed: {
            height: 0,
            opacity: 0,
          },
        }}
        transition={reduceMotion ? { duration: 0 } : quietTransitionFast}
        style={{ overflow: "hidden" }}
        inert={phone && !open ? true : undefined}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="site-nav-link"
            aria-current={current === l.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </motion.nav>
    </header>
  );
}
