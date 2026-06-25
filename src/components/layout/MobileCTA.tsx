"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { links } from "@/lib/gym-data";
import { WhatsappIcon, RouteIcon } from "@/components/ui/Icons";

/** Sticky bottom action bar — mobile only, appears after the hero. */
export function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/90 px-4 pb-[calc(0.7rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden"
        >
          <div className="flex gap-2.5">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-13 flex-[2] items-center justify-center gap-2 rounded-full bg-accent font-grotesk text-sm font-semibold uppercase tracking-[0.12em] text-ink"
            >
              <WhatsappIcon className="size-5" />
              WhatsApp
            </a>
            <a
              href={links.directions}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Como chegar"
              className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full border border-line-strong font-grotesk text-sm font-medium uppercase tracking-[0.12em] text-paper"
            >
              <RouteIcon className="size-5" />
              Rota
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
