import { cn } from "@/lib/utils";
import { type IconName, iconMap } from "@/components/ui/Icons";

type Props = {
  value: string;
  label?: string;
  icon?: IconName;
  className?: string;
};

/** Compact proof badge used in the hero strip. */
export function StatBadge({ value, label, icon, className }: Props) {
  const Icon = icon ? iconMap[icon] : null;
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 border-l border-line pl-3.5",
        className,
      )}
    >
      {Icon && <Icon className="size-4 shrink-0 text-accent" />}
      <span className="flex flex-wrap items-baseline gap-x-1.5">
        <span className="font-mono-num text-sm font-semibold text-paper">
          {value}
        </span>
        {label && (
          <span className="text-xs uppercase tracking-wider text-silver">
            {label}
          </span>
        )}
      </span>
    </div>
  );
}
