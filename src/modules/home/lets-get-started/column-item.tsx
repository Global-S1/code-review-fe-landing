// components/ColumnItem.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  height: string;
  columnsPerSide: number;
}

export default function ColumnItem({ height, columnsPerSide }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ height: 0 }}
      animate={{ height: isInView ? height : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: `${100 / (columnsPerSide * 2)}%`,
      }}
      className="bg-gradient-to-b from-dark to-primary"
    />
  );
}
