"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { inView, staggerParent, riseItem } from "@/lib/motion";

const sentence =
  "A Super Série Fitness é para quem quer treinar em um ambiente direto, equipado e preparado para rotina real.";
const tail = "Sem enrolação. Sem excesso. Apenas estrutura, orientação e consistência.";

export function PositioningSection() {
  const words = sentence.split(" ");

  return (
    <section className="relative bg-bg py-[var(--section-y)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel number="/01" className="mb-10">
          Posicionamento
        </SectionLabel>

        <motion.p
          variants={staggerParent(0.025)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="max-w-5xl font-display text-[clamp(2rem,6vw,4.75rem)] uppercase leading-[0.95] tracking-tight"
        >
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              variants={riseItem}
              className="mr-[0.28em] inline-block text-paper"
            >
              {w}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 max-w-xl text-lg leading-relaxed text-silver"
        >
          {tail}
        </motion.p>
      </div>
    </section>
  );
}
