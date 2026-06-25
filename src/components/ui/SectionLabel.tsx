import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  number?: string;
  className?: string;
};

/** Editorial eyebrow: index number + accent line + label. */
export function SectionLabel({ children, number, className }: Props) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {number && (
        <span className="font-mono-num text-xs text-silver">{number}</span>
      )}
      <span className="h-px w-8 bg-accent" aria-hidden />
      <span className="label-eyebrow">{children}</span>
    </div>
  );
}
