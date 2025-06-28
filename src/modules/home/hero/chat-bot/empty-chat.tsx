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
      <div className="px-[60px] mb-[10px] md:py-[20px] grow">
        <div className="flex gap-4 items-center mt-[30px]">
          <p className="font-futura font-bold text-[28px] md:text-[42px]">
            ¡Hola!
          </p>
          <motion.img
            src={`chat-bot/bot-in-chat.svg`}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
        <div>
          <p className={`text-[28px] md:text-[42px]`}>
            ¿En qué te puedo ayudar?
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto mb-4">
        <InstantMessages messages={messages} sendMessages={sendMessage} />
      </div>
    </>
  );
};
