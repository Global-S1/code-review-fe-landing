import { ELocalStorage } from "src/enums/local-storage.enum";
import type { ISendQuestionParam } from "./interfaces/send-question.params";
import { GET_IP, URL_CHAT_IA } from "src/constants/urls.constant";

const getUserIP = async (): Promise<string | null> => {
  try {
    const response = await fetch(GET_IP, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error obtaining IP:", error);
    return null;
  }
};

export const sendQuestion = async (
  fields: ISendQuestionParam,
  onMessage: (msg: string, success: boolean) => void
) => {
  try {
    const currentThreadId = localStorage.getItem(ELocalStorage.THREAD_ID);
    const userIp = await getUserIP();
    const body = {
      ...fields,
      ...(currentThreadId && { threadId: currentThreadId }),
    };
    const response = await fetch(`${URL_CHAT_IA}/chat/create-chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(userIp && { "ip-address": userIp }),
      },
      body: JSON.stringify(body),
    });

    const success = response.headers.get("success") === "true" ? true : false;
    const thredId = response.headers.get("thread-id");

    if (thredId) {
      localStorage.setItem(ELocalStorage.THREAD_ID, thredId);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder("utf-8");

    if (!reader) {
      throw new Error("No readable stream found.");
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      onMessage(chunk, success);
    }
  } catch (error) {
    console.error("Error while streaming:", error);
  }
};
