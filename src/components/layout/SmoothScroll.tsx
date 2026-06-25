"use client";

import { ReactLenis } from "lenis/react";
import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

/** True when the user does NOT prefer reduced motion. */
function useMotionAllowed() {
  return useSyncExternalStore(
    subscribe,
    () => !window.matchMedia(QUERY).matches,
    () => true,
  );
}

/** Lenis smooth scroll, disabled when the user prefers reduced motion. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const enabled = useMotionAllowed();

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.09, duration: 1.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
