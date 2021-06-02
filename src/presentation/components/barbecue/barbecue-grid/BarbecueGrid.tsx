import { CardBox } from '@presentation/components/primary';
import React from 'react';
import BarbecueInfoEvent from '../info-event';
import AddBarbecueButton from '../add-barbecue-button';
import * as Styled from './BarbecueGrid.styled';

const info = {
  eventDay: new Date(),
  eventName: 'Aniversário Bruno',
  numberOfParticipants: 14,
  moneyCollected: 234
}

const BarbecueGrid = () => {
  return (
    <Styled.Grid>
      <CardBox>
        <BarbecueInfoEvent  {...info} type='box' />
      </CardBox>
      <CardBox>
        <BarbecueInfoEvent  {...info} type='box' />
      </CardBox>
      <CardBox>
        <BarbecueInfoEvent  {...info} type='box' />
      </CardBox>
      <AddBarbecueButton />
    </Styled.Grid>
  )
}

export default BarbecueGrid
