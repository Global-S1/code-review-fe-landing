import { GET_IP, UNIQUE_TOKEN, URL_CHAT_IA } from "src/constants/urls.constant";
import type { ISendQuestionParam } from "./interfaces/send-question.params";
import type { ISendQuestionResponse } from "./interfaces/send-question.response";
import { LocalStorage } from "src/constants/local-storage.constant";

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
    const currentUniqueQuestionCode = localStorage.getItem(
      LocalStorage.UNIQUE_QUESTION_CODE
    );
    const userIp = await getUserIP();

    const body = {
      ...fields,
      uniqueOrganizationToken: UNIQUE_TOKEN,
    };

    const response = await fetch(`${URL_CHAT_IA}/chat/create-chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(userIp && { "ip-address": userIp }),
      },
      body: JSON.stringify(body),
    });

    const json = (await response.json()) as ISendQuestionResponse;

    if (!json.success || !json.data?.stream) {
      // Si el servidor respondió con éxito false
      const errorMsg = json.kindMessage || "Ha ocurrido un error inesperado.";
      onMessage(errorMsg, false); // ← callback con error
      return;
    }

    const simulatedStream = json.data.stream;
    const threadId = json.data.uniqueOrganizationToken;

    if (threadId) {
      localStorage.setItem(LocalStorage.UNIQUE_QUESTION_CODE, threadId);
    }

    const words = simulatedStream.split(" ");
    let index = 0;

    const interval = setInterval(() => {
      if (index >= words.length) {
        clearInterval(interval);
        return;
      }

      const word = words[index];
      onMessage(word + " ", true); // ← éxito
      index++;
    }, 50);
  } catch (error) {
    console.error("Error simulating stream:", error);
    onMessage("Error de conexión. Intenta nuevamente más tarde.", false); // ← error en fetch
  }
};
