"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/constants";
import { gym, links } from "@/lib/gym-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        {/* Wordmark */}
        <a
          href="#top"
          className="group flex items-baseline gap-2"
          aria-label={`${gym.shortName} — início`}
        >
          <span className="font-display text-2xl leading-none tracking-wide text-paper sm:text-[1.7rem]">
            Super<span className="text-accent">Série</span>
          </span>
          <span className="hidden font-grotesk text-[0.62rem] uppercase tracking-[0.3em] text-silver sm:inline">
            Fitness
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-grotesk text-[0.78rem] uppercase tracking-[0.16em] text-paper/70 transition-colors hover:text-paper"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href={links.whatsapp}
            size="md"
            icon="whatsapp"
            iconPosition="left"
            className="hidden sm:inline-flex"
          >
            Chamar agora
          </Button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="relative z-50 flex size-11 items-center justify-center rounded-full border border-line text-paper lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-px w-full bg-current transition-all duration-300",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-current transition-all duration-300",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 grain bg-deep/98 backdrop-blur-2xl lg:hidden"
          >
            <nav
              className="flex h-full flex-col justify-center gap-1 px-6"
              aria-label="Navegação mobile"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  className="flex items-baseline gap-4 border-b border-line py-4"
                >
                  <span className="font-mono-num text-xs text-accent">
                    0{i + 1}
                  </span>
                  <span className="font-display text-4xl uppercase text-paper">
                    {link.label}
                  </span>
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 flex flex-col gap-3"
              >
                <Button
                  href={links.whatsapp}
                  size="lg"
                  icon="whatsapp"
                  iconPosition="left"
                  onClick={() => setOpen(false)}
                >
                  Chamar no WhatsApp
                </Button>
                <Button
                  href={links.tel}
                  variant="outline"
                  size="lg"
                  icon="phone"
                  iconPosition="left"
                  onClick={() => setOpen(false)}
                >
                  {gym.phone}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
