import type { Variants } from "framer-motion";

/* Refined, restrained motion language. No bounce. */
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/** Container that staggers its children into view. */
export const staggerParent = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Child item: rises gently with a soft fade. */
export const riseItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

/** Headline reveal — clips upward from a mask. */
export const lineReveal: Variants = {
  hidden: { opacity: 0, y: "120%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

/** Simple fade for backdrops / images. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: easeOutExpo } },
};

/** Image reveal with a slight scale settle. */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: easeOutExpo },
  },
};

/** Shared viewport config for scroll-triggered reveals. */
export const inView = { once: true, margin: "-12% 0px -12% 0px" } as const;

export { easeOutExpo };
