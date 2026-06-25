"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StarIcon } from "@/components/ui/Icons";
import { gym, reviewNotes, reviewThemes } from "@/lib/gym-data";
import { inView, riseItem, staggerParent } from "@/lib/motion";

export function SocialProofSection() {
  const full = Math.floor(Number(gym.rating));
  return (
    <section className="relative bg-bg py-[var(--section-y)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel number="/05" className="mb-12">
          Reputação
        </SectionLabel>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Rating block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="flex items-end gap-4">
              <span className="font-display text-[7rem] leading-[0.8] text-paper sm:text-[9rem]">
                {gym.rating}
              </span>
              <div className="mb-4 flex flex-col gap-2">
                <span className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`size-5 ${i < full ? "text-accent" : "text-line-strong"}`}
                    />
                  ))}
                </span>
                <span className="font-mono-num text-sm text-silver">
                  {gym.reviewsCount} avaliações
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver">
              Reputação construída por quem treina na {gym.shortName}, em{" "}
              {gym.neighborhood}.
            </p>

            {/* Theme chips */}
            <motion.ul
              variants={staggerParent(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              className="mt-8 flex flex-wrap gap-2"
            >
              {reviewThemes.map((t) => (
                <motion.li
                  key={t}
                  variants={riseItem}
                  className="rounded-full border border-line bg-surface px-4 py-2 font-grotesk text-xs uppercase tracking-wider text-paper/80"
                >
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Notes */}
          <motion.ul
            variants={staggerParent(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="flex flex-col justify-center gap-px lg:col-span-8"
          >
            {reviewNotes.map((note) => (
              <motion.li
                key={note}
                variants={riseItem}
                className="border-t border-line py-7 last:border-b"
              >
                <p className="text-pretty text-xl leading-snug text-paper sm:text-2xl">
                  {note}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
