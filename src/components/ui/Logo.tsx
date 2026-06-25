import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoVariant = "header" | "footer";

/**
 * Brand lockup: the "S" mark + the SuperSérie Fitness wordmark.
 * `header` is the compact inline lockup; `footer` is the oversized stacked one.
 * The mark sits in a fixed-size box (fill + object-contain) so it always
 * reserves space and renders regardless of intrinsic-size timing.
 */
export function Logo({
  variant = "header",
  className,
}: {
  variant?: LogoVariant;
  className?: string;
}) {
  if (variant === "footer") {
    return (
      <div className={cn("flex items-center gap-5", className)}>
        <span className="relative block size-20 shrink-0 sm:size-24">
          <Image
            src="/logo-mark.png"
            alt="Logo Super Série Fitness"
            fill
            sizes="96px"
            className="object-contain"
            priority
          />
        </span>
        <p className="font-display text-5xl leading-none tracking-wide text-paper sm:text-6xl">
          Super<span className="text-accent">Série</span>
          <span className="block text-silver">Fitness</span>
        </p>
      </div>
    );
  }

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="relative block size-9 shrink-0 sm:size-11">
        <Image
          src="/logo-mark.png"
          alt="Logo Super Série Fitness"
          fill
          sizes="44px"
          className="object-contain"
          priority
        />
      </span>
      <span className="flex items-baseline gap-2">
        <span className="font-display text-2xl leading-none tracking-wide text-paper sm:text-[1.7rem]">
          Super<span className="text-accent">Série</span>
        </span>
        <span className="hidden font-grotesk text-[0.62rem] uppercase tracking-[0.3em] text-silver sm:inline">
          Fitness
        </span>
      </span>
    </span>
  );
}
