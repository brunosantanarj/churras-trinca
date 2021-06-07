import { ParticipantEntity } from '..';
import { participantListFactory } from '../participant-list-factory';

describe('participantListFactory', () => {
  let list: ParticipantEntity[];

  beforeEach(() => {
    list = participantListFactory(1);
  });

  it('should be returned array', () => {
    expect(Array.isArray(list)).toBe(true);
  })

  it('array items should be instace of ParticipantEntity', () => {
    expect(list[0]).toBeInstanceOf(ParticipantEntity);
  })
});