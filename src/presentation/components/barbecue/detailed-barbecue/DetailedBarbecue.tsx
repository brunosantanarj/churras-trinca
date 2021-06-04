import BarbecueEntity from '@core/barbecue/barbecue-entity';
import { createBarbecueInfoProps } from '@core/barbecue/create-barbecue-info-props';
import { IParticipant } from '@core/participant/participant-types';
import { BarbecuesContainer } from '@presentation/containers';
import React from 'react'
import InfoEvent from '../info-event';
import * as Styled from './DetailedBarbecue.styled';

type Props = {
  selectedBarbecue: BarbecueEntity
  toogleParticipant: (uuid: string, participantId: string, isEnable: boolean) => void;
}

const DetailedBarbecue = ({ selectedBarbecue, toogleParticipant }: Props) => {
  const toogle = (participant: IParticipant) => {
    const toogleArguments = [selectedBarbecue.id, participant.id];
    if (participant.isEnable) {
      toogleParticipant(...[...toogleArguments, false]);
      return;
    }

    toogleParticipant(...[...toogleArguments, true]);
  }
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <InfoEvent {...createBarbecueInfoProps(selectedBarbecue, 'header')} />
        {selectedBarbecue.participants.map(participant => (
          <button className="flex" onClick={() => toogle(participant)}>
            {participant.name} - {String(participant.isEnable)}
          </button>
        ))}
        
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default BarbecuesContainer(DetailedBarbecue);
