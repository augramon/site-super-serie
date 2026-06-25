"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { images } from "@/lib/constants";
import { structurePoints } from "@/lib/gym-data";
import { imageReveal, inView, riseItem, staggerParent } from "@/lib/motion";

export function StructureSection() {
  return (
    <section
      id="estrutura"
      className="relative scroll-mt-24 overflow-hidden bg-bg py-[var(--section-y)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text column */}
          <motion.div
            variants={staggerParent(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="lg:col-span-5"
          >
            <motion.div variants={riseItem}>
              <SectionLabel number="/03" className="mb-6">
                Estrutura
              </SectionLabel>
            </motion.div>
            <motion.h2
              variants={riseItem}
              className="text-[clamp(2.4rem,5.5vw,4.2rem)] text-paper"
            >
              Pensada para <span className="text-accent">a intensidade</span>
            </motion.h2>
            <motion.p
              variants={riseItem}
              className="mt-6 max-w-md text-base leading-relaxed text-silver"
            >
              Do primeiro treino ao treino pesado, a estrutura foi pensada para
              acompanhar constância, evolução e intensidade.
            </motion.p>

            <motion.ul variants={riseItem} className="mt-9 space-y-px">
              {structurePoints.map((p, i) => (
                <li
                  key={p}
                  className="flex items-center gap-4 border-t border-line py-4 last:border-b"
                >
                  <span className="font-mono-num text-xs text-accent">
                    0{i + 1}
                  </span>
                  <span className="text-paper">{p}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Image column — editorial stack */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-5 gap-4">
              <motion.div
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={inView}
                className="col-span-3 aspect-[3/4] overflow-hidden rounded-xl"
              >
                <Image
                  src={images.structure}
                  alt="Área de musculação com equipamentos na Super Série Fitness"
                  width={800}
                  height={1066}
                  sizes="(max-width: 1024px) 60vw, 40vw"
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div className="col-span-2 flex flex-col gap-4">
                <motion.div
                  variants={imageReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={inView}
                  transition={{ delay: 0.12 }}
                  className="aspect-square overflow-hidden rounded-xl"
                >
                  <Image
                    src={images.weights}
                    alt="Detalhe de halteres e pesos livres"
                    width={500}
                    height={500}
                    sizes="(max-width: 1024px) 40vw, 28vw"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <motion.div
                  variants={riseItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={inView}
                  transition={{ delay: 0.2 }}
                  className="flex flex-1 flex-col justify-center rounded-xl border border-line bg-surface p-5"
                >
                  <span className="font-display text-5xl leading-none text-accent">
                    AC
                  </span>
                  <span className="mt-2 text-xs leading-snug text-silver">
                    Ambiente climatizado o ano inteiro
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
