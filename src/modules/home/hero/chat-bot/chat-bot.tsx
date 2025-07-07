import { ChevronDown } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ELocalStorage } from "src/enums/local-storage.enum";
import { sendQuestion } from "src/services/home/home.service";
import { EmptyChat } from "./empty-chat";
import { InputChatbot } from "./input-chatbot";
import type { IMessage } from "./interfaces/message.interface";
import { Messages } from "./messages";
import type { IContentChatBot } from "./interfaces/content.interface";

interface Props {
  content: IContentChatBot;
}

export default function ChatBot({ content }: Props) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const containerCloudVariants: Variants = {
    focused: {
      width: "100%",
      height: "85%",
      bottom: "0px",
      background:
        "linear-gradient( to right, color-mix(in oklab, var(--color-primary) 35%, transparent), color-mix(in oklab, var(--color-secondary) 40%, transparent))",
      backdropFilter: "blur(10px)",
      transition: { duration: 0.2 },
      borderRadius: "20px",
    },
    unfocused: {
      width: "auto",
      height: "12px",
      fontSize: "10px",
      textWrap: "nowrap",
      padding: "11px 18px",
      boxShadow: "none",
      backdropFilter: "none",
      transition: { duration: 0.2 },
    },
  };

  const handleGlobalEvents = (event: MouseEvent | KeyboardEvent) => {
    if (event instanceof MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocus(false);
      }
    }

    if (event instanceof KeyboardEvent && event.key === "Escape") {
      setIsFocus(false);
    }
  };

  const setNewMessage = (message: IMessage) => {
    setMessages((prevMessages) => {
      const messageIndex = prevMessages
        ? prevMessages.findIndex((msg) => msg.id === message.id)
        : -1;

      if (messageIndex > -1) {
        const concatMessage = prevMessages[messageIndex].text + message.text;

        const updatedMessages = [...prevMessages];
        updatedMessages[messageIndex] = {
          ...prevMessages[messageIndex],
          text: concatMessage,
        };
        return updatedMessages;
      } else {
        return prevMessages ? [...prevMessages, message] : [message];
      }
    });

    let storedMessages: IMessage[] = [];
    const currentMessage = localStorage.getItem(
      ELocalStorage.CHAT_BOT_MESSAGES
    );

    if (currentMessage) {
      storedMessages = JSON.parse(currentMessage) as IMessage[];
    } else {
      localStorage.setItem(
        ELocalStorage.DATE_LAST_MESSAGE,
        JSON.stringify(new Date())
      );
    }

    const messageIndex = storedMessages.findIndex(
      (msg) => msg.id === message.id
    );

    if (messageIndex > -1) {
      storedMessages[messageIndex].text += message.text;
    } else {
      storedMessages.push(message);
    }

    localStorage.setItem(
      ELocalStorage.CHAT_BOT_MESSAGES,
      JSON.stringify(storedMessages)
    );
  };

  const sendMessage = (message: string) => {
    setIsLoading(true);
    const userMessage: IMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: message,
      timestamp: new Date(),
    };
    setNewMessage(userMessage);

    const botMessageId = `bot-${Date.now()}`;
    const errorMessage: IMessage = {
      id: `error-${Date.now()}`,
      sender: "error",
      text: "Ocurrió un error al procesar tu mensaje.",
      timestamp: new Date(),
    };

    sendQuestion({ message }, (partialResponse, success) => {
      if (success) {
        const botMessage: IMessage = {
          id: botMessageId,
          sender: "bot",
          text: partialResponse,
          timestamp: new Date(),
        };
        setNewMessage(botMessage);
      } else {
        setNewMessage(errorMessage);
      }
    }).finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const storedMessages = localStorage.getItem(
      ELocalStorage.CHAT_BOT_MESSAGES
    );
    if (storedMessages) {
      try {
        const parsed = JSON.parse(storedMessages) as IMessage[];
        setMessages(parsed);
      } catch (err) {
        console.warn("Error parsing stored chat messages", err);
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleGlobalEvents);
    document.addEventListener("keydown", handleGlobalEvents);

    return () => {
      document.removeEventListener("mousedown", handleGlobalEvents);
      document.removeEventListener("keydown", handleGlobalEvents);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <motion.div
        className={`absolute overflow-hidden z-0 ${
          isFocus && "after:opacity-0 before:opacity-0"
        }`}
        variants={containerCloudVariants}
        animate={isFocus ? "focused" : "unfocused"}
      >
        {isFocus && (
          <div className="flex flex-col h-[calc(100%-4rem)] md:h-[calc(100%-5rem)] mb-[4rem] md:mb-[5rem]">
            <div className="px-6 md:px-16 pt-[20px] md:block">
              <button
                className="size-[40px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-dark cursor-pointer duration-150"
                onClick={() => setIsFocus(false)}
              >
                <ChevronDown />
              </button>
            </div>

            {(!messages || messages.length == 0) && (
              <EmptyChat
                content={content.emptyChat}
                sendMessage={sendMessage}
              />
            )}
            {messages && messages.length > 1 && (
              <Messages messages={messages} />
            )}
          </div>
        )}
      </motion.div>
      <InputChatbot
        content={content.input}
        isFocus={isFocus}
        setIsFocus={setIsFocus}
        input={input}
        isLoading={isLoading}
        sendMessage={sendMessage}
        setInput={setInput}
      />
    </div>
  );
}
