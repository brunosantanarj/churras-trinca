import { participantListFactory } from '@core/participant';
import faker from 'faker';
import BarbecueEntity from './barbecue-entity';

const createFakerBarbecue = () => ({
  id: faker.datatype.uuid(),
  date: faker.date.future(),
  name: faker.name.findName(),
  description: faker.commerce.productDescription(),
  participants: participantListFactory(20)
});

export const barbecueFactory = () => new BarbecueEntity(createFakerBarbecue());
