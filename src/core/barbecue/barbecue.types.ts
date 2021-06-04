import { IParticipant } from "@core/participant/participant-types";
export interface IBarbecue {
  date: Date;
  name: string;
  description: string;
  participants: IParticipant[];
  id: string;
}
