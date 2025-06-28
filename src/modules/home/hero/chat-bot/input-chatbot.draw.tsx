import { SendHorizonal } from "lucide-react";
import { motion, type Variants } from "motion/react";
import type { Dispatch } from "react";

interface Props {
  isFocus: boolean;
  setIsFocus: Dispatch<boolean>;
}

export const InputChatbot = ({ isFocus, setIsFocus }: Props) => {
  const labelVariants: Variants = {
    focused: {
      opacity: 1,
      position: "absolute",
      bottom: "20px",
      left: "50%",
      translateX: "-50%",
      margin: "auto",
      maxWidth: "90%",
      width: "100%",
    },
    unfocused: {
      opacity: 1,
      position: "absolute",
      left: "50%",
      translateX: "-50%",
      margin: "auto",
      maxWidth: "80%",
      width: "100%",
    },
  };
  return (
    <div className="w-full h-12 md:h-20">
      <motion.label
        htmlFor="chat-bot"
        className={`z-10 border-1 md:border-3 border-primary rounded-xl text-xl bg-white/5 flex cursor-text pr-4 items-center`}
        initial={{ opacity: 0 }}
        variants={labelVariants}
        animate={isFocus ? "focused" : "unfocused"}
        onClick={() => setIsFocus(true)}
      >
        <div className="flex items-center gap-2 px-4 py-2 grow">
          <div className="size-6 md:size-10 bg-primary mask mask-[url('/chat-bot/bot-in-chat.svg')] mask-center mask-contain mask-no-repeat"></div>
          <input
            type="text"
            name="chat-bot"
            id="chat-bot"
            placeholder="Escríbenos, ¿Cómo podemos ayudarte?"
            className="outline-none h-full w-full"
            autoComplete="off"
          />
        </div>

        <button
          className="bg-primary px-4 md:px-6 py-2 h-fit rounded-2xl font-bold"
          onClick={() => setIsFocus(true)}
        >
          <span className="hidden md:inline">Hablemos ahora</span>
          <SendHorizonal className="md:hidden" />
        </button>
      </motion.label>
    </div>
  );
};
