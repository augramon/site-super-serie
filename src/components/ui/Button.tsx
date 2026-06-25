import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { type IconName, iconMap } from "@/components/ui/Icons";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-ink hover:bg-accent-bright shadow-[0_0_0_0_rgba(63,203,106,0)] hover:shadow-[0_8px_30px_-6px_rgba(63,203,106,0.5)]",
  outline:
    "border border-line-strong text-paper hover:border-accent hover:text-accent-bright bg-transparent",
  ghost: "text-paper/80 hover:text-accent-bright bg-transparent",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.82rem]",
  lg: "h-14 px-7 text-sm",
};

type Props = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

const baseClass =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-grotesk font-medium uppercase tracking-[0.14em] transition-all duration-300 ease-[var(--ease-out-quart)] focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  onClick,
  ...rest
}: Props) {
  const Icon = icon ? iconMap[icon] : null;
  const isExternal = href.startsWith("http") || href.startsWith("tel:");
  const classes = cn(baseClass, variants[variant], sizes[size], className);

  const inner = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="size-[1.05em] shrink-0" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="size-[1.05em] shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes} {...rest}>
      {inner}
    </Link>
  );
}
