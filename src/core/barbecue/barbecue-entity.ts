import { IParticipant } from "@core/participant";
import { IBarbecue } from "./barbecue.types";

export default class BarbecueEntity implements IBarbecue {
  id: string;
  date: Date;
  name: string;
  description: string;
  participants: IParticipant[];

  constructor({
    name, date, description, participants, id
  }: IBarbecue) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
    this.participants = participants;
  }

  getValidParticipants() {
    if (Array.isArray(this.participants) && this.participants.length > 0) {
      return this.participants.filter(participant => participant.isEnable)
    }

    return []
  }

  get totalOfParticipants() {
    return this.getValidParticipants().length;
  } 

  get calculatedMoney() {
    const validParticipants = this.getValidParticipants() 
    if (validParticipants.length > 0) {
      return validParticipants
        .reduce((acc, cv) => acc + (cv.contribution + cv.drinkContribution), 0);
    }
    return 0
  }
}
