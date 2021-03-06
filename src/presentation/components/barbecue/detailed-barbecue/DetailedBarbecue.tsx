import React from 'react'
import { BarbecueEntity, createBarbecueInfoProps } from '@core/barbecue';
import { IParticipant } from '@core/participant';
import { BarbecuesContainer } from '@presentation/containers';
import { Button } from '@presentation/ui';
import InfoEvent from '../info-event';
import * as Styled from './DetailedBarbecue.styled';
import ListParticipants from './components/list-participants';

type ContainerProps = {
  selectedBarbecue: BarbecueEntity
}

type Props = ContainerProps & {
  toogleParticipant: (uuid: string, participantId: string, isEnable: boolean) => void;
  updateContribution: (uuid: string, participantId: string, contribution: number) => void;
  removeParticipants: (uuid: string) => void;
  addParticipant: (uuid: string) => void;
}

const DetailedBarbecue = ({
  selectedBarbecue, toogleParticipant, updateContribution, removeParticipants, addParticipant }: Props) => {
  const toogle = (participant: IParticipant) => {
    function wrapperToogleParticipant(isEnable: boolean) {
      toogleParticipant(selectedBarbecue.id, participant.id, isEnable);
    }
  
    if (participant.isEnable) {
      wrapperToogleParticipant(false);
      return;
    }

    wrapperToogleParticipant(true);
  }

  const setNewContribution = ({ id }: IParticipant, contribution: number) => {
    updateContribution(selectedBarbecue.id, id, contribution);
  }

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <InfoEvent {...createBarbecueInfoProps(selectedBarbecue, 'header')} />
        <ListParticipants
          participants={selectedBarbecue.participants}
          onToggle={toogle}
          onChangeContribution={setNewContribution}
        />
        <Styled.WrapperButtons>
          <Button onClick={() => addParticipant(selectedBarbecue.id)}>
            Adicionar participante
          </Button>
          <Styled.RemoveParticipantsButton onClick={() => removeParticipants(selectedBarbecue.id)}>
            Remover participantes
          </Styled.RemoveParticipantsButton>
        </Styled.WrapperButtons>
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default BarbecuesContainer<ContainerProps>(DetailedBarbecue);
