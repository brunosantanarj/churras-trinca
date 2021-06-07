import ParticipantEntity from '../participant-entity';

const participantPayload = {
  id: 'id-participant',
  name: 'bruno-participant',
  email: 'bruno@id.com.br',
  drinkContribution: 23,
  contribution: 250,
  isEnable: true,
}

describe('ParticipantEntity', () => {
  it('should create correct instance', () => {
    const instance = new ParticipantEntity(participantPayload);
    expect(instance).toBeInstanceOf(ParticipantEntity);
  });
});