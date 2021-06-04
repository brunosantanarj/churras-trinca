import { IParticipant } from "@core/participant/participant-types";
import { IBarbecue } from "./barbecue.types";

export default class BarbecueEntity implements IBarbecue {
  date: Date;
  name: string;
  description: string;
  participants: IParticipant[];

  constructor({
    name, date, description, participants
  }: IBarbecue) {
    this.name = name;
    this.date = date;
    this.description = description;
    this.participants = participants;
  }

  get calculatedMoney() {
    if (Array.isArray(this.participants) && this.participants.length > 0) {
      return this.participants
        .reduce((acc, cv) => acc + (cv.contribution + cv.drinkContribution), 0);
    }
    return 0
  }
}