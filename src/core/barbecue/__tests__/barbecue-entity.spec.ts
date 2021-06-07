import { ParticipantEntity } from '../../participant';
import BarbecueEntity  from '../barbecue-entity';

const participantsPayload = [
  {
    id: 'id-participant',
    name: 'bruno-participant',
    email: 'bruno@id.com.br',
    drinkContribution: 1,
    contribution: 10,
    isEnable: true,
  },
  {
    id: 'id-participant-2',
    name: 'bruno-participant-2',
    email: 'bruno@id.com.br',
    drinkContribution: 2,
    contribution: 20,
    isEnable: true,
  },
  {
    id: 'id-participant-3',
    name: 'bruno-participant-3',
    email: 'bruno@id.com.br',
    drinkContribution: 3,
    contribution: 30,
    isEnable: false,
  }
]

const barbecuePayload = {
  id: 'id-barbecue',
  date: (new Date),
  name: 'Churrasco do Bruno',
  description: 'Meu aniversário',
  participants: participantsPayload.map(participant => new ParticipantEntity(participant))
}

describe('BarbecueEntity', () => {
  let instance: BarbecueEntity;

  beforeEach(() => {
    instance = new BarbecueEntity(barbecuePayload);
  });

  it('should create correct instance', () => {
    expect(instance).toBeInstanceOf(BarbecueEntity);
  });

  it('should have total of valid participants', () => {
    expect(instance.totalOfParticipants).toBe(2);
  });

  it('should calculate total contribution', () => {
    expect(instance.calculatedMoney).toBe(33);
  });
});