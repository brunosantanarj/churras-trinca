import { IParticipant } from "@core/participant";
export interface IBarbecue {
  date: Date;
  name: string;
  description: string;
  participants: IParticipant[];
  id: string;
}
