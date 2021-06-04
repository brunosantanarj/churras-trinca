import React from 'react'
import { BarbecueIcon } from '@presentation/ui';
import { AddBarbecueBoxButton } from './AddBarbecueButton.styled';

const AddBarbecueButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <AddBarbecueBoxButton {...props}>
      <BarbecueIcon />
      <span className="raleway font-bold text-xl mt-3 block">
        Adicionar Churras
      </span>
    </AddBarbecueBoxButton>
  )
}

export default AddBarbecueButton;
