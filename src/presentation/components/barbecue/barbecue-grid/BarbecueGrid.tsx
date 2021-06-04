import React from 'react';
import { CardBox } from '@presentation/components/primary';
import { BarbecuesContainer, BarbecueContainerProps } from '@presentation/containers';
import BarbecueInfoEvent from '../info-event';
import AddBarbecueButton from '../add-barbecue-button';
import * as Styled from './BarbecueGrid.styled';

const BarbecueGrid = ({ barbecues, addBarbecue, removeBarbecue }: BarbecueContainerProps) => (
  <Styled.Grid>
    {barbecues.length > 0 ? barbecues.map(barbecue => (
      <CardBox key={barbecue.name} onRemove={() => removeBarbecue(barbecue.name)}>
        <BarbecueInfoEvent
          eventDay={barbecue.date}
          eventName={barbecue.name}
          numberOfParticipants={barbecue.participants.length}
          moneyCollected={barbecue.calculatedMoney}
          type='box'
        />
      </CardBox>
    )): null}
    <AddBarbecueButton onClick={addBarbecue}/>
  </Styled.Grid>
)

export default BarbecuesContainer(BarbecueGrid);
