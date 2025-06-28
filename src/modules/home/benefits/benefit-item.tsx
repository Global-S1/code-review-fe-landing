// src/components/ProgressItem.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  percent: number;
  children: React.ReactNode;
}

export function BenefitsItem({ percent, children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <li ref={ref} className="flex items-center gap-2">
      <div className="w-16 h-4 rounded-xl overflow-hidden border border-secondary">
        <motion.div
          className="bg-secondary h-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percent}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <p className="[&>span]:text-secondary [&>span]:font-semibold">
        {children}
      </p>
    </li>
  );
}
