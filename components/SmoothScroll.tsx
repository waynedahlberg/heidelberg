"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import "lenis/dist/lenis.css";

function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

function LenisRoot() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.05,
        smoothWheel: true,
        touchMultiplier: 1.4,
      }}
    >
      <ScrollToTop />
    </ReactLenis>
  );
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <>
      {enabled ? <LenisRoot /> : null}
      {children}
    </>
  );
}
