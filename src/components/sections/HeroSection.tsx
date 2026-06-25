"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { StatBadge } from "@/components/ui/StatBadge";
import { images } from "@/lib/constants";
import { gym, heroBadges, links } from "@/lib/gym-data";
import { lineReveal, staggerParent, riseItem } from "@/lib/motion";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const headline = [
    { text: "Treino sério.", accent: false },
    { text: "Estrutura forte.", accent: false },
    { text: "Resultado no ritmo certo.", accent: true },
  ];

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-dvh flex-col justify-end overflow-hidden pb-10 pt-28 sm:pb-16"
    >
      {/* Background image + parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src={images.hero}
          alt="Ambiente de treino de musculação na Academia Super Série Fitness"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Tonal overlays — pull image into brand green/black */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-ink/30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep/90 via-deep/40 to-transparent" />
      <div className="absolute inset-0 -z-10 mix-blend-color bg-forest/30" />

      {/* Side vertical mark */}
      <span className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 font-grotesk text-[0.7rem] uppercase tracking-[0.5em] text-silver/60 lg:block">
        São Caetano · Salvador — BA
      </span>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={staggerParent(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={riseItem} className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="label-eyebrow">Academia · Musculação</span>
          </motion.div>

          {/* Headline with masked line reveals */}
          <h1 className="text-[clamp(3.2rem,11vw,9rem)] leading-[0.88]">
            {headline.map((line) => (
              <span
                key={line.text}
                className="block overflow-hidden py-[0.04em]"
              >
                <motion.span
                  variants={lineReveal}
                  className={`block ${line.accent ? "text-gradient" : "text-paper"}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={riseItem}
            className="mt-7 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg"
          >
            A {gym.shortName} reúne equipamentos, profissionais e ambiente
            climatizado para quem quer treinar com foco em {gym.neighborhood}.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={riseItem}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href={links.whatsapp} size="lg" icon="whatsapp" iconPosition="left">
              Chamar no WhatsApp
            </Button>
            <Button href={links.directions} variant="outline" size="lg" icon="route" iconPosition="left">
              Como chegar
            </Button>
          </motion.div>

          {/* Proof strip */}
          <motion.div
            variants={riseItem}
            className="mt-12 grid grid-cols-2 gap-y-4 border-t border-line pt-6 sm:flex sm:flex-wrap sm:gap-x-2 sm:gap-y-3"
          >
            {heroBadges.map((b) => (
              <StatBadge
                key={b.value}
                value={b.value}
                label={b.label}
                icon={b.icon}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="pointer-events-none mx-auto mt-10 hidden w-full max-w-7xl px-8 sm:block"
      >
        <span className="flex items-center gap-2 font-grotesk text-[0.65rem] uppercase tracking-[0.3em] text-silver">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="inline-block h-8 w-px bg-accent"
          />
          Role para conhecer
        </span>
      </motion.div>
    </section>
  );
}
