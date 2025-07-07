import { useInView, motion } from "motion/react";
import { useRef } from "react";

interface Props {
  percent: number;
}

export const BenefitsPill = ({ percent }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="w-16 h-4 rounded-xl overflow-hidden border border-secondary"
    >
      <motion.div
        className="bg-secondary h-full"
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${percent}%` : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};
