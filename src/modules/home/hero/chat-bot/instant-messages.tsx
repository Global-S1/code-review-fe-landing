import { motion, type Variants } from "framer-motion";

interface Props {
  messages: string[];
  sendMessages: (message: string) => void;
}

export const InstantMessages = ({ messages, sendMessages }: Props) => {
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

  return (
    <div className="relative">
      <div className="flex gap-4 w-full overflow-x-auto scrollbar-hidden">
        {messages.map((message, index) => (
          <motion.button
            key={index}
            variants={buttonVariants(index)}
            initial="hidden"
            animate="visible"
            className="rounded-[20px] px-[13px] md:px-[28px] py-[10px] shrink-0 bg-secondary/20 border-2 border-primary/40 hover:border-white duration-100 font-urbanist font-medium text-[14px] md:text-[20px] cursor-pointer"
            onClick={() => sendMessages(message)}
          >
            {message}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
