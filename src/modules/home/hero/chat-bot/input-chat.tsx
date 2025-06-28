import { motion, type Variants } from "framer-motion";
import { type ChangeEvent, type Dispatch } from "react";
import { Loader, Send } from "lucide-react";

interface Props {
  input: string;
  setInput: Dispatch<string>;
  isFocus: boolean;
  setIsFocus: Dispatch<boolean>;
  isLoading: boolean;
  sendMessage: (value: string) => void;
}

export const InputChat = ({
  input,
  setInput,
  isFocus,
  sendMessage,
  isLoading,
  setIsFocus,
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
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const iconVariants: Variants = {
    focused: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
      width: 0,
    },
    unfocused: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const inputSectionVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={inputSectionVariants}
      className={`border-[2px] border-[rgba(25,219,202,.7)] rounded-[12px_20px_20px_12px] bg-white/5 flex items-center justify-between w-full mx-auto relative z-[20] transition-all duration-150 ${
        isFocus && "max-w-[85%]"
      }`}
    >
      <label
        htmlFor="chat-input"
        className="relative flex items-center py-[2px] pl-[10px] w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.5 } }}
          className="relative"
        >
          <div className={`${!isFocus && "pl-2 duration-100"}`}>
            <motion.img
              src={`/chat-bot/bot-in-chat.svg`}
              alt="chatbot-image"
              variants={iconVariants}
              animate={isFocus ? "focused" : "unfocused"}
              className="size-[30px] md:size-[45px]"
            />
          </div>
        </motion.div>
        <input
          id="chat-input"
          type="text"
          autoComplete="off"
          placeholder="..."
          className={`tracking-widest text-sm md:text-base focus:border-transparent focus:ring-0 placeholder:text-white placeholder:text-ellipsis placeholder:overflow-hidden placeholder:line-clamp-1`}
          value={input}
          onChange={onChangeInput}
          onKeyDown={(e) => {
            !isLoading && handleKeyDown(e);
          }}
          onFocus={() => setIsFocus(true)}
        />
      </label>
      <button
        className={`px-[16px] bg-[#544DD2] hover:bg-[#544ddf] duration-200 rounded-[16px] text-nowrap h-[40px] text-sm md:text-base m-2`}
        onClick={() => {
          !isLoading && handleSend();
        }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <p className="hidden md:block font-urbanist font-medium">
              {isFocus ? <Send className="size-[30px]" /> : "Hablemos ahora"}
            </p>
            <Send className="md:hidden size-[30px]" />
          </>
        )}
      </button>
    </motion.div>
  );
};
