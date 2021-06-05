import faker from 'faker';
import ParticipantEntity from './participant-entity';

export const createFakerParticipant = () => {
  const name = faker.name.findName();
  return {
    id: faker.datatype.uuid(),
    name,
    email: faker.internet.email(name),
    drinkContribution: +faker.finance.amount(10, 100),
    contribution: +faker.finance.amount(30, 150),
    isEnable: faker.datatype.boolean(),
  }
}

export const participantListFactory = (totalParticipants: number) => Array
  .from({ length: totalParticipants }, () => new ParticipantEntity(createFakerParticipant()));
