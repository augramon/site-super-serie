import { navLinks } from "@/lib/constants";
import { gym, links } from "@/lib/gym-data";
import { iconMap } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = 2025;
  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        {/* Oversized wordmark */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <Logo variant="footer" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver">
              Academia em {gym.neighborhood}, {gym.city.replace(" - BA", "")} —
              Bahia. Estrutura, equipamentos e ambiente climatizado para sua
              rotina de treino.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Rodapé">
              <p className="label-eyebrow mb-4">Navegar</p>
              <ul className="space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-paper/75 transition-colors hover:text-accent-bright"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="label-eyebrow mb-4">Contato</p>
              <ul className="space-y-3 text-sm text-paper/75">
                <li>
                  <a
                    href={links.tel}
                    className="font-mono-num transition-colors hover:text-accent-bright"
                  >
                    {gym.phone}
                  </a>
                </li>
                <li className="max-w-[15rem] leading-relaxed text-silver">
                  {gym.address}
                </li>
                <li className="flex gap-3 pt-1">
                  {(
                    [
                      { href: links.whatsapp, icon: "whatsapp" as const, label: "WhatsApp" },
                      { href: links.instagram, icon: "instagram" as const, label: "Instagram" },
                      { href: links.directions, icon: "route" as const, label: "Rota" },
                    ]
                  ).map(({ href, icon, label }) => {
                    const Icon = iconMap[icon];
                    return (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex size-10 items-center justify-center rounded-full border border-line text-paper/80 transition-colors hover:border-accent hover:text-accent-bright"
                      >
                        <Icon className="size-[18px]" />
                      </a>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-silver sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {gym.name} — {gym.unit}.
          </p>
          <p className="max-w-md leading-relaxed">
            Informações de horários, planos e disponibilidade podem mudar.
            Consulte a academia antes de visitar.
          </p>
        </div>
      </div>
    </footer>
  );
}
