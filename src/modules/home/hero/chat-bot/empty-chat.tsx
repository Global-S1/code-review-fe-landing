import { motion, type Variants } from "framer-motion";
import { InstantMessages } from "./instant-messages";
import type { IContentEmptyChatBot } from "./interfaces/content.interface";

interface Props {
  content: IContentEmptyChatBot;
  sendMessage: (value: string) => void;
}

export const EmptyChat = ({ content, sendMessage }: Props) => {
  const iconVariants: Variants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.2,
        delay: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };
  return (
    <>
      <div className="px-6 md:px-16 md:py-[20px] grow flex flex-col justify-between">
        <div>
          <div className="flex gap-4 items-center mt-[30px]">
            <p className="heading-h2">{content.welcome}</p>
            <motion.div
              className="size-12 mask mask-[url('/chat-bot/bot-in-chat.svg')] mask-contain mask-center mask-no-repeat bg-secondary"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
          <p
            className={`heading-h4 mt-4 text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text`}
          >
            {content.message}
          </p>
        </div>
        {/* <div className="mx-auto mb-4">
          <InstantMessages
            messages={content.instantMessages}
            sendMessages={sendMessage}
          />
        </div> */}
      </div>
    </>
  );
};
