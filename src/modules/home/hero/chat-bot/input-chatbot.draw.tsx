import type { Dispatch } from "react";
import { SendHorizonal } from "lucide-react";

interface Props {
  setIsFocus: Dispatch<boolean>;
}

export const InputChatbot = ({ setIsFocus }: Props) => {
  return (
    <label
      htmlFor="chat-bot"
      className="w-full max-w-[80%] mx-auto border-1 md:border-3 border-primary rounded-l-xl rounded-r-[45px] text-xl bg-white/5 flex"
    >
      <div className="flex gap-2 px-4 py-2 grow">
        <div className="size-6 md:size-10 bg-primary mask mask-[url('/chat-bot/bot-in-chat.svg')] mask-center mask-contain mask-no-repeat"></div>
        <input
          type="text"
          name="chat-bot"
          id="chat-bot"
          placeholder="Escríbenos, ¿Cómo podemos ayudarte?"
          className="outline-none h-full w-full"
        />
      </div>

      <button
        className="bg-primary px-4 md:px-6 rounded-[45px] shadow-2xl shadow-secondary font-bold"
        onClick={() => setIsFocus(true)}
      >
        <span className="hidden md:inline">Hablemos ahora</span>
        <SendHorizonal className="md:hidden" />
      </button>
    </label>
  );
};
