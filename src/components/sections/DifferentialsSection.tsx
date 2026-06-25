"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { differentials } from "@/lib/gym-data";
import { inView, staggerParent, riseItem } from "@/lib/motion";

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="relative scroll-mt-24 bg-surface py-[var(--section-y)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="/02" className="mb-6">
              Diferenciais
            </SectionLabel>
            <h2 className="max-w-xl text-[clamp(2.2rem,5vw,3.8rem)] text-paper">
              O que faz a diferença <span className="text-accent">no treino</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-silver">
            Sem promessa. Estrutura real, pensada para quem treina de verdade,
            todos os dias.
          </p>
        </div>

        <motion.ul
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {differentials.map((d) => (
            <motion.li
              key={d.index}
              variants={riseItem}
              className="group relative flex flex-col bg-surface p-7 transition-colors duration-500 hover:bg-surface-2 sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono-num text-sm text-silver">
                  {d.index}
                </span>
                <span className="h-px w-10 bg-line-strong transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />
              </div>
              <h3 className="mt-12 text-2xl leading-tight text-paper sm:text-[1.7rem]">
                {d.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-silver">
                {d.body}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
