"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StarIcon } from "@/components/ui/Icons";
import { gym, reviews, reviewThemes } from "@/lib/gym-data";
import { inView, riseItem, staggerParent } from "@/lib/motion";

export function SocialProofSection() {
  const full = Math.floor(Number(gym.rating));
  // Duplicate the list so the marquee can loop seamlessly (-50% translate).
  const track = [...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden bg-bg py-[var(--section-y)]">
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
            className="lg:col-span-5"
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

          {/* Lead */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-end lg:col-span-7"
          >
            <p className="font-display text-3xl leading-[0.95] text-paper sm:text-5xl">
              Quem treina aqui, <span className="text-accent">recomenda.</span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-silver">
              Avaliações reais de alunos da {gym.shortName} no Google.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Full-bleed infinite review marquee */}
      <div className="marquee-mask relative mt-14 flex overflow-hidden">
        <ul
          className="animate-marquee flex w-max flex-none"
          aria-label="Avaliações de alunos"
        >
          {track.map((review, i) => (
            <li
              key={`${review.name}-${i}`}
              aria-hidden={i >= reviews.length}
              className="mr-4 flex h-60 w-[300px] shrink-0 flex-col rounded-2xl border border-line bg-surface p-6 sm:mr-5 sm:w-[340px]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-lg text-accent"
                    aria-hidden
                  >
                    {review.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-grotesk text-sm font-medium text-paper">
                      {review.name}
                    </p>
                    <p className="font-mono-num text-xs text-silver">
                      {review.timeAgo}
                    </p>
                  </div>
                </div>
                <span
                  className="flex gap-0.5"
                  aria-label={`${review.rating} de 5 estrelas`}
                >
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <StarIcon key={s} className="size-4 text-accent" />
                  ))}
                </span>
              </div>
              <p className="mt-4 line-clamp-6 text-pretty text-[0.95rem] leading-relaxed text-paper/85">
                {review.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
