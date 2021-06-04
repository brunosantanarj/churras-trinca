import faker from 'faker';
import ParticipantEntity from './participant-entity';

const createFakerParticipant = () => {
  const name = faker.name.findName();
  return {
    name,
    email: faker.internet.email(name),
    drinkContribution: +faker.finance.amount(10, 100),
    contribution: +faker.finance.amount(30, 150)
  }
}

export const participantListFactory = (totalParticipants: number) => Array
  .from({ length: totalParticipants }, () => new ParticipantEntity(createFakerParticipant()));
