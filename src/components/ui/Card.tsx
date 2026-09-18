import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -5 } : undefined}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-colors",
          hover && "hover:border-slate-700 hover:bg-slate-900/80",
          className
        )}
        {...props}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";
