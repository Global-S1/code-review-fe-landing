import { useState } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

interface Props {
  isFocus: boolean;
}

export const BoxMessage = ({ isFocus }: Props) => {
  return (
    <motion.div
      className={clsx(
        "absolute left-0 bottom-0 bg-red-300 w-full h-[calc(100%-80px)]"
      )}
    ></motion.div>
  );
};

// {!isFocus && (
//   <div
//     className="absolute bottom-[-20px] left-8 w-6 h-6 bg-white rounded-full shadow-md"
//     style={{ zIndex: -1 }}
//   ></div>
// )}
