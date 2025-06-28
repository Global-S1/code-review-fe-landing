import { motion, type Variants } from "framer-motion";
import { InstantMessages } from "./instant-messages";

interface Props {
  sendMessage: (value: string) => void;
}

export const EmptyChat = ({ sendMessage }: Props) => {
  const messages = [
    "Ver nuestros servicios",
    "¿Quiénes somos?",
    "Nuestros casos de éxito",
    "Contacto",
  ];

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
            <p className="heading-h2">¡Hola!</p>
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
            ¿En qué te puedo ayudar?
          </p>
        </div>
        <div className="mx-auto mb-4">
          <InstantMessages messages={messages} sendMessages={sendMessage} />
        </div>
      </div>
    </>
  );
};
