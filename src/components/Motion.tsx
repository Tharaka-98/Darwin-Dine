"use client";
import { motion, MotionProps, useReducedMotion } from "framer-motion";
import React from "react";
import type { JSX } from "react";

type SimpleProps = React.PropsWithChildren<{
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}> &
  MotionProps;

export function FadeIn({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}: SimpleProps) {
  const reduce = useReducedMotion();
  const motionByTag = motion as unknown as Record<string, React.ElementType>;
  const Component: React.ElementType = motionByTag[as] ?? motion.div;
  if (reduce) {
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    );
  }
  return (
    <Component
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px", amount: 0.05 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}: SimpleProps) {
  const reduce = useReducedMotion();
  const motionByTag = motion as unknown as Record<string, React.ElementType>;
  const Component: React.ElementType = motionByTag[as] ?? motion.div;
  if (reduce) {
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    );
  }
  return (
    <Component
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "0px", amount: 0.05 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
