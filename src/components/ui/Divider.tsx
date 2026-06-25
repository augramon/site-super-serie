import { cn } from "@/lib/utils";

/** Thin animated hairline used between sections. */
export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-line-strong to-transparent",
        className,
      )}
      aria-hidden
    />
  );
}
