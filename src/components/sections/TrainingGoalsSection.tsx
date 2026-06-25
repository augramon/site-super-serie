"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowIcon } from "@/components/ui/Icons";
import { trainingGoals } from "@/lib/gym-data";
import { inView, riseItem, staggerParent } from "@/lib/motion";

export function TrainingGoalsSection() {
  return (
    <section
      id="treinos"
      className="relative scroll-mt-24 bg-surface py-[var(--section-y)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionLabel number="/04" className="mb-6">
            Treinos
          </SectionLabel>
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] text-paper">
            Um ambiente para <span className="text-accent">cada objetivo</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-silver">
            Aqui você encontra um ambiente preparado para diferentes objetivos:
            ganhar massa, melhorar o condicionamento, fortalecer o corpo ou
            simplesmente voltar à rotina com consistência.
          </p>
        </div>

        <motion.ul
          variants={staggerParent(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {trainingGoals.map((g, i) => (
            <motion.li
              key={g.label}
              variants={riseItem}
              className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-line bg-bg p-6 transition-colors duration-500 hover:border-accent/60"
            >
              {/* accent wash on hover */}
              <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-t from-forest/30 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
              <div className="relative z-10">
                <span className="font-mono-num text-xs text-silver">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl text-paper">{g.label}</h3>
                <p className="mt-1.5 text-sm text-silver">{g.desc}</p>
              </div>
              <ArrowIcon className="relative z-10 size-5 -translate-x-2 text-accent opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-8 text-xs text-silver/80">
          Objetivos possíveis no ambiente da academia. Não representam
          modalidades ou serviços confirmados.
        </p>
      </div>
    </section>
  );
}
