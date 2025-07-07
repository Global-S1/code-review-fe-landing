export interface IContentChatBot {
  input: IContentInputChatBot;
  emptyChat: IContentEmptyChatBot;
}

export interface IContentInputChatBot {
  placeholder: string;
  button: string;
}

export interface IContentEmptyChatBot {
  instantMessages: string[];
  welcome: string;
  message: string;
}
