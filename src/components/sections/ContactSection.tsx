"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { gym, links } from "@/lib/gym-data";
import { inView, riseItem, staggerParent } from "@/lib/motion";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden bg-bg py-[var(--section-y)]"
    >
      {/* Brand glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-forest/25 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={riseItem}>
            <SectionLabel number="/07" className="mb-8 justify-center">
              Contato
            </SectionLabel>
          </motion.div>

          <motion.h2
            variants={riseItem}
            className="max-w-4xl text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.9] text-paper"
          >
            Dê o próximo <span className="text-accent">passo</span>
          </motion.h2>

          <motion.p
            variants={riseItem}
            className="mt-7 max-w-xl text-base leading-relaxed text-silver sm:text-lg"
          >
            Quer conhecer a estrutura, tirar dúvidas sobre planos ou visitar a
            academia? Fale com a {gym.shortName} e dê o próximo passo.
          </motion.p>

          {/* Big phone */}
          <motion.a
            variants={riseItem}
            href={links.tel}
            className="mt-10 font-display text-[clamp(2.4rem,7vw,5rem)] leading-none text-paper transition-colors hover:text-accent-bright"
          >
            {gym.phone}
          </motion.a>

          {/* CTA grid */}
          <motion.div
            variants={riseItem}
            className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
          >
            <Button href={links.whatsapp} size="lg" icon="whatsapp" iconPosition="left">
              Chamar no WhatsApp
            </Button>
            <Button href={links.tel} variant="outline" size="lg" icon="phone" iconPosition="left">
              Ligar agora
            </Button>
            <Button href={links.instagram} variant="outline" size="lg" icon="instagram" iconPosition="left">
              Abrir Instagram
            </Button>
            <Button href={links.directions} variant="outline" size="lg" icon="route" iconPosition="left">
              Ver rota
            </Button>
          </motion.div>

          <motion.p
            variants={riseItem}
            className="mt-8 max-w-md text-xs leading-relaxed text-silver/70"
          >
            Não trabalhamos com matrícula online por aqui. Valores e
            disponibilidade são informados diretamente pela academia.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
