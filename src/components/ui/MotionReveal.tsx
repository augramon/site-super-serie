"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { inView, riseItem } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Tag to render. Defaults to a div. */
  as?: "div" | "section" | "li" | "span";
};

/** Drop-in scroll reveal for any block. Respects reduced motion via CSS. */
export function MotionReveal({ children, className, delay = 0, as = "div" }: Props) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={riseItem}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
