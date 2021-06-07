import React from 'react'
import { useRecoilState } from 'recoil';
import { BarbecueEntity, barbecueFactory } from '@core/barbecue';
import { ParticipantEntity, IParticipant, createFakerParticipant } from '@core/participant';
import { barbecueState } from './atoms';

export type BarbecueContainerProps = {
  barbecues: BarbecueEntity[],
  addBarbecue: () => void;
  removeBarbecue: (name: string) => void;
  toogleParticipant: (uuid: string, participantId: string, isEnable: boolean) => void;
  updateContribution: (uuid: string, participantId: string, contribution: number) => void;
  removeParticipants: (uuid: string) => void;
  addParticipant: (uuid: string) => void;
}

type ComponentType<T> = React.FunctionComponent<BarbecueContainerProps & T>;

function BarbecuesContainer<T>(Component: ComponentType<T>) {
  return (props: T) => {
    const [ storedBarbecues, setBarbecues ] = useRecoilState(barbecueState);
  
    function addBarbecue() {
      setBarbecues(currentState => [ ...currentState, barbecueFactory() ]);
    }
  
    function removeBarbecue(name: string) {
      setBarbecues(currentState => currentState.filter(barbecue => barbecue.name !== name));
    }
  
    function setByBarbecueUUID(uuid: string, rest: (barbecue: BarbecueEntity) => Partial<BarbecueEntity>) {
      setBarbecues(currentState => currentState.map(barbecue => barbecue.id === uuid
        ? new BarbecueEntity({ ...barbecue, ...rest(barbecue) })
        : barbecue)
      )
    }
  
    function updateParticipant(uuid: string, participantId: string, fields: Partial<IParticipant>) {
      setByBarbecueUUID(uuid, (barbecue) => ({
        participants: barbecue.participants.map(participant => participant.id === participantId
          ? new ParticipantEntity({ ...participant, ...fields })
          : participant)
      }))
    }
  
    function removeParticipants(uuid: string) {
      setByBarbecueUUID(uuid, (barbecue) => ({
        participants: barbecue.participants.filter(participant => participant.isEnable)
      }))
    }
  
    function addParticipant (uuid: string) {
      setByBarbecueUUID(uuid, (barbecue) => ({
        participants: [
          ...barbecue.participants,
          new ParticipantEntity(createFakerParticipant())
        ]
      }))
    }
  
    function toogleParticipant(uuid: string, participantId: string, isEnable: boolean) {
      updateParticipant(uuid, participantId, { isEnable });
    }
  
    function updateContribution(uuid: string, participantId: string, contribution: number) {
      updateParticipant(uuid, participantId, { contribution });
    }
  
    return (
      <Component
        barbecues={storedBarbecues}
        addBarbecue={addBarbecue}
        removeBarbecue={removeBarbecue}
        toogleParticipant={toogleParticipant}
        updateContribution={updateContribution}
        removeParticipants={removeParticipants}
        addParticipant={addParticipant}
        {...props}
      />
    )
  }
}

export default BarbecuesContainer;
