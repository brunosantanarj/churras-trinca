import { IParticipant } from './participant-types';

export default class ParticipantEntity implements IParticipant {
  name: string;

  email: string;

  drinkContribution: number;

  contribution: number;

  constructor({
    name, email, drinkContribution, contribution
  }: IParticipant) {
    this.name = name;
    this.email = email;
    this.drinkContribution = drinkContribution;
    this.contribution = contribution;
  }
}
