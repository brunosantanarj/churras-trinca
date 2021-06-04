import React from 'react'
import { useRecoilState } from 'recoil';
import BarbecueEntity from '@core/barbecue/barbecue-entity';
import { barbecueFactory } from '@core/barbecue/barbecue-random-factory';
import { barbecueState } from './atoms';

export type BarbecueContainerProps = {
  barbecues: BarbecueEntity[],
  addBarbecue: () => void;
  removeBarbecue: (name: string) => void;
}

const BarbecuesContainer = (Component: React.FunctionComponent<BarbecueContainerProps>) => () => {
  const [ storedBarbecues, setBarbecues ] = useRecoilState(barbecueState);

  function addBarbecue() {
    setBarbecues(currentState => [...currentState, barbecueFactory()]);
  }

  function removeBarbecue(name: string) {
    setBarbecues(currentState => currentState.filter(barbecue => barbecue.name !== name));
  }

  return (
    <Component
      barbecues={storedBarbecues}
      addBarbecue={addBarbecue}
      removeBarbecue={removeBarbecue}
    />
  )
}

export default BarbecuesContainer
