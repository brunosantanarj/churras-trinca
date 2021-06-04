import { participantListFactory } from '@core/participant/participant-list-factory';
import faker from 'faker';
import BarbecueEntity from './barbecue-entity';

const createFakerBarbecue = () => ({
  date: faker.date.future(),
  name: faker.name.findName(),
  description: faker.commerce.productDescription(),
  participants: participantListFactory(20),
});

export const barbecueFactory = () => new BarbecueEntity(createFakerBarbecue());