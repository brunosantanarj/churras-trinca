import React from 'react';
import { CardBox } from '@presentation/components/primary';
import { BarbecuesContainer, BarbecueContainerProps } from '@presentation/containers';
import { createBarbecueInfoProps } from '@core/barbecue';
import BarbecueInfoEvent from '../info-event';
import AddBarbecueButton from '../add-barbecue-button';
import * as Styled from './BarbecueGrid.styled';

const renderIfExistes = (condition: boolean, element: unknown) => condition ? element : null;

const BarbecueGrid = ({ barbecues, addBarbecue, removeBarbecue }: BarbecueContainerProps) => (
  <Styled.Grid>
    {renderIfExistes(barbecues.length > 0, barbecues.map(barbecue => (
      <CardBox
        key={barbecue.name}
        onRemove={() => removeBarbecue(barbecue.name)}
        uuid={barbecue.id}
      >
        <BarbecueInfoEvent {...createBarbecueInfoProps(barbecue, 'box')} />
      </CardBox>
    )))}
    <AddBarbecueButton onClick={addBarbecue}/>
  </Styled.Grid>
)

export default BarbecuesContainer(BarbecueGrid);
