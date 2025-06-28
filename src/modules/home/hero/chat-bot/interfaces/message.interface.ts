export interface IMessage {
  id: string;
  text: string;
  sender: "user" | "bot" | "error";
  timestamp: Date;
}
