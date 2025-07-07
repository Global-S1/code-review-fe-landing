export interface ISendQuestionResponse {
  success: boolean;
  kindMessage: string;
  data: {
    stream: string;
    uniqueOrganizationToken: string;
  };
  httpCode: number;
  timeLapse: {
    started: string;
    ended: string;
    duration: number;
  };
}
