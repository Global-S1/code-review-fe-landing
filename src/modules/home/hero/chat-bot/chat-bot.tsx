import { motion, type Variants } from "motion/react";
import { useRef, useState } from "react";
import { ELocalStorage } from "src/enums/local-storage.enum";
import { sendQuestion } from "src/services/home/home.service";
import { EmptyChat } from "./empty-chat";
import { InputChat } from "./input-chat";
import type { IMessage } from "./interfaces/message.interface";
import { Messages } from "./messages";
import { InputChatbot } from "./input-chatbot.draw";

export const ChatBot = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const containerCloudVariants: Variants = {
    focused: {
      width: "100%",
      height: "60vh",
      top: "-50vh",
      background: "linear-gradient(to right, #1A0259cc, #277686cc)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 0px rgba(39, 118, 134, 0.5)",
      transition: { duration: 0.2 },
    },
    unfocused: {
      width: "auto",
      height: "46px",
      fontSize: "10px",
      textWrap: "nowrap",
      padding: "11px 18px",
      background: "linear-gradient(to right, #1A0259, #277686)",
      border: "solid 2px #19DBCA",
      boxShadow: "none",
      backdropFilter: "none",
      transition: { duration: 0.2 },
    },
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

  return <InputChatbot setIsFocus={setIsFocus} />;
};
