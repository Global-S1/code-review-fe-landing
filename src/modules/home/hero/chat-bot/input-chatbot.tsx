import { LoaderDots } from "@components/loaders/loader-dots";
import { SendHorizonal } from "lucide-react";
import { motion, type Variants } from "motion/react";
import type { ChangeEvent, Dispatch } from "react";
import type { IContentInputChatBot } from "./interfaces/content.interface";

interface Props {
  content: IContentInputChatBot;
  input: string;
  setInput: Dispatch<string>;
  isFocus: boolean;
  setIsFocus: Dispatch<boolean>;
  isLoading: boolean;
  sendMessage: (value: string) => void;
}

export const InputChatbot = ({
  content,
  isFocus,
  setIsFocus,
  input,
  isLoading,
  sendMessage,
  setInput,
}: Props) => {
  const handleSend = () => {
    if (input.trim() !== "") {
      sendMessage(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }

    if (e.key === "Escape") {
      (e.target as HTMLInputElement).blur();
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
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
            placeholder={content.placeholder}
            className="outline-none h-full w-full"
            autoComplete="off"
            value={input}
            onChange={onChangeInput}
            onKeyDown={handleKeyDown}
          />
        </div>

        <button
          className={`bg-primary h-fit font-bold cursor-pointer ${
            isLoading ? "p-0 rounded-full" : "px-4 md:px-6 py-2 rounded-2xl"
          }`}
          onClick={() => {
            setIsFocus(true);
            if (!isLoading) {
              handleSend();
            }
          }}
          disabled={isLoading}
        >
          {isLoading ? (
            <LoaderDots scale={0.4} />
          ) : (
            <>
              <span className="hidden md:inline text-dark">
                {content.button}
              </span>
              <SendHorizonal className="md:hidden" />
            </>
          )}
        </button>
      </motion.label>
    </div>
  );
};
