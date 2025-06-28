import { useEffect, useRef } from "react";
import type { IMessage } from "./interfaces/message.interface";
import { motion } from "motion/react";
import Markdown from "react-markdown";
import { AlertCircle } from "lucide-react";

interface Props {
  messages: IMessage[];
}

export const Messages = ({ messages }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="grow max-w-[85%] mx-auto w-full overflow-auto relative scrollbar-hidden my-2">
      <div
        className="max-h-full flex flex-col gap-4 overflow-auto scrollbar-hidden relative"
        ref={containerRef}
      >
        {messages.map((mess) => {
          if (mess.sender == "user") {
            return (
              <motion.div
                key={mess.id}
                className="w-full flex items-center justify-end"
                initial={{ x: "10%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <p className="max-w-[60vw] py-[10px] px-[30px] bg-[#ffffff11] text-white rounded-[12px] text-wrap  font-urbanist font-medium overflow-hidden">
                  {mess.text}
                </p>
              </motion.div>
            );
          }

          if (mess.sender == "bot") {
            return (
              <motion.div
                initial={{ x: "-10%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                key={mess.id}
                className="flex gap-2 items-start max-w-[90%] bg-[#ffffff11] p-4 rounded-[12px]"
              >
                <motion.img
                  src={`/chat-bot/bot-in-chat.svg`}
                  alt="icon"
                  className="size-[22px] mt-[2px]"
                />
                <div>
                  <Markdown
                    components={{
                      a: (e) => (
                        <a
                          {...e}
                          className="underline bg-gradient-to-b from-[#19DBCA] to-[#6C6EF0] bg-clip-text text-transparent font-semibold"
                        >
                          {e.children}
                        </a>
                      ),
                      p: (e) => (
                        <p {...e} className="font-medium text-lg">
                          {e.children}
                        </p>
                      ),
                      ol: (e) => (
                        <ol
                          {...e}
                          className="flex flex-col gap-2 mt-3 list-decimal"
                        >
                          {e.children}
                        </ol>
                      ),
                      ul: (e) => (
                        <ul
                          {...e}
                          className="flex flex-col gap-2 mt-3 list-disc"
                        >
                          {e.children}
                        </ul>
                      ),
                      li: (e) => (
                        <li {...e} className="font-urbanist">
                          {e.children}
                        </li>
                      ),
                    }}
                  >
                    {mess.text}
                  </Markdown>
                </div>
              </motion.div>
            );
          }

          if (mess.sender == "error") {
            return (
              <motion.div
                key={mess.id}
                className="w-fit flex gap-4 items-center max-w-[60vw] bg-red-500 rounded-[12px] pl-4 pr-8"
                initial={{ x: "10%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <AlertCircle />
                <p className="text-wrap font-urbanist font-medium py-[10px]">
                  {mess.text}
                </p>
              </motion.div>
            );
          }
        })}
      </div>
    </div>
  );
};
