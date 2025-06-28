import { motion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  messages: string[];
  sendMessages: (message: string) => void;
}

export const InstantMessages = ({ messages, sendMessages }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [hasLeftOverflow, setLeftOverflow] = useState(false);
  const [hasRightOverflow, setRightOverflow] = useState(false);

  const buttonVariants = (index: number): Variants => ({
    hidden: {
      scale: 0.2,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  });

  useEffect(() => {
    const container = contentRef.current;

    const checkOverflow = () => {
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setLeftOverflow(scrollLeft > 0);
        setRightOverflow(scrollLeft + clientWidth < scrollWidth);
      }
    };

    checkOverflow();

    container?.addEventListener("scroll", checkOverflow);

    return () => {
      container?.removeEventListener("scroll", checkOverflow);
    };
  }, [contentRef]);

  return (
    <div className="relative">
      <div
        ref={contentRef}
        className="flex gap-4 w-full overflow-x-auto scrollbar-hidden"
      >
        {messages.map((message, index) => (
          <motion.button
            key={index}
            variants={buttonVariants(index)}
            initial="hidden"
            animate="visible"
            className="rounded-[20px] px-[13px] md:px-[28px] py-[10px] shrink-0 bg-[#B14DFF40] border-2 border-[rgba(25,219,202,.4)] hover:border-white duration-100 font-urbanist font-medium text-[14px] md:text-[20px]"
            onClick={() => sendMessages(message)}
          >
            {message}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
