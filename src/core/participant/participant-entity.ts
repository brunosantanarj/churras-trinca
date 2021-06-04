import { IParticipant } from './participant-types';

export default class ParticipantEntity implements IParticipant {
  id: string;

  name: string;

  email: string;

  drinkContribution: number;

  contribution: number;

  isEnable: boolean;

  constructor({
    name, email, drinkContribution, contribution, id, isEnable
  }: IParticipant) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.drinkContribution = drinkContribution;
    this.contribution = contribution;
    this.isEnable = isEnable;
  }
}
