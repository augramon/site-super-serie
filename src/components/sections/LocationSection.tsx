"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PinIcon } from "@/components/ui/Icons";
import { gym, links } from "@/lib/gym-data";
import { inView } from "@/lib/motion";

export function LocationSection() {
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    gym.address,
  )}&output=embed`;

  return (
    <section
      id="localizacao"
      className="relative scroll-mt-24 bg-surface py-[var(--section-y)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <SectionLabel number="/06" className="mb-6">
              Localização
            </SectionLabel>
            <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] text-paper">
              Fácil de <span className="text-accent">chegar</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-silver">
              A {gym.shortName} fica em {gym.neighborhood}, Salvador. Toque no
              botão abaixo para abrir a rota e chegar com facilidade.
            </p>

            <div className="mt-8 flex items-start gap-4 border-t border-line pt-6">
              <PinIcon className="mt-0.5 size-5 shrink-0 text-accent" />
              <div>
                <p className="text-paper">{gym.address}</p>
                <p className="mt-1 font-mono-num text-sm text-silver">
                  {gym.closingInfo}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button href={links.directions} size="lg" icon="route" iconPosition="left">
                Abrir rota
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={inView}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl border border-line lg:col-span-7"
          >
            <div className="aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[26rem]">
              <iframe
                title={`Mapa — ${gym.name}`}
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.3] contrast-[1.1] [filter:invert(0.9)_hue-rotate(120deg)_saturate(0.7)]"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
