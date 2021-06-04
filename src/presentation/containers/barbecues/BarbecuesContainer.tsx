import React from 'react'
import { useRecoilState } from 'recoil';
import BarbecueEntity from '@core/barbecue/barbecue-entity';
import { barbecueFactory } from '@core/barbecue/barbecue-random-factory';
import { barbecueState } from './atoms';
import ParticipantEntity from '@core/participant/participant-entity';

export type BarbecueContainerProps = {
  barbecues: BarbecueEntity[],
  addBarbecue: () => void;
  removeBarbecue: (name: string) => void;
  toogleParticipant: (uuid: string, participantId: string, isEnable: boolean) => void;
  enableParticipant: (uuid: string, participantId: string) => void;
}

type ComponentType = React.FunctionComponent<BarbecueContainerProps & any>
const BarbecuesContainer = (Component: ComponentType) => (props: any) => {
  const [ storedBarbecues, setBarbecues ] = useRecoilState(barbecueState);

  function addBarbecue() {
    setBarbecues(currentState => [...currentState, barbecueFactory()]);
  }

  function removeBarbecue(name: string) {
    setBarbecues(currentState => currentState.filter(barbecue => barbecue.name !== name));
  }

  function toogleParticipant(uuid: string, participantId: string, isEnable: boolean) {
    setBarbecues(currentState => currentState.map(barbecue => barbecue.id === uuid
      ? new BarbecueEntity({
        ...barbecue,
        participants: barbecue.participants.map(participant => participant.id === participantId
          ? new ParticipantEntity({ ...participant, isEnable })
          : participant)
        })
      : barbecue))
  }

  return (
    <Component
      barbecues={storedBarbecues}
      addBarbecue={addBarbecue}
      removeBarbecue={removeBarbecue}
      toogleParticipant={toogleParticipant}
      {...props}
    />
  )
}

export default BarbecuesContainer;
