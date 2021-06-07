import React from 'react'
import { IParticipant } from '@core/participant';
import { formatCurrencyToReal } from '@helpers/format';
import * as Styled from './ListParticipants.styled';

type Props = {
  participants: IParticipant[];
  onToggle: (participant: IParticipant) => void;
  onChangeContribution: (participant: IParticipant, contribution: number) => void;
}

const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  }
};

const ListParticipants = ({ participants, onToggle, onChangeContribution }: Props) => {
  const getInputProps = (participant: IParticipant) => {
    return {
      currency: "BRL",
      config: currencyConfig,
      onChange: (_: React.SyntheticEvent, value: number) => onChangeContribution(participant, value),
      value: formatCurrencyToReal(participant.contribution, false),
      isEnable: participant.isEnable,
      disabled: !participant.isEnable
    }
  }

  return (
    <Styled.WrapperList>
      {participants.map((participant) => (
        <Styled.WrapperLine key={participant.id}>
          <Styled.WrapperButton onClick={() => onToggle(participant)}>
            <Styled.ElementCircle isEnable={participant.isEnable}  />
            <Styled.LabelName>{participant.name}</Styled.LabelName>
          </Styled.WrapperButton>
          <Styled.ContributionInput {...getInputProps(participant)} />
        </Styled.WrapperLine>
      ))}
    </Styled.WrapperList>
  )
}

export default ListParticipants;
