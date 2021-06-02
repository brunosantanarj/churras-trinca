import React from 'react';
import { PeopleIcon, MoneyIcon } from '@presentation/ui';
import * as Styled from './InfoEvent.styled';
import { ThemeProvider } from 'styled-components';
import { formatCurrencyToReal, formatDateToPT } from '@helpers/format';

type Props = {
  eventDay: Date;
  eventName: string;
  numberOfParticipants: number;
  moneyCollected: number;
  type: 'box'|'header';
}

const InfoEvent = ({ eventDay, eventName, numberOfParticipants, moneyCollected, type }: Props) => (
  <ThemeProvider theme={{ type }}>
    <Styled.Container>
      <div>
        <Styled.EventDate>{formatDateToPT(eventDay)}</Styled.EventDate>
        <Styled.EventName>{eventName}</Styled.EventName>
      </div>
      <Styled.Infos>
        <Styled.WrapperPeoplesAndMoney>
          <PeopleIcon />
          <Styled.TextInfo>{numberOfParticipants}</Styled.TextInfo>
        </Styled.WrapperPeoplesAndMoney>
        <Styled.WrapperPeoplesAndMoney>
          <MoneyIcon />
          <Styled.TextInfo>{formatCurrencyToReal(moneyCollected)}</Styled.TextInfo>
        </Styled.WrapperPeoplesAndMoney>
      </Styled.Infos>
    </Styled.Container>
  </ThemeProvider>
);

export default InfoEvent;
