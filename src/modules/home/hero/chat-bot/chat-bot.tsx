import { useState } from "react";
import { InputChatbot } from "./input-chatbot";
import { BoxMessage } from "./box-message";

export const ChatBot = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <>
      {/* <BoxMessage isFocus={isFocus} /> */}
      <InputChatbot setIsFocus={setIsFocus} />
    </>
  );
};
