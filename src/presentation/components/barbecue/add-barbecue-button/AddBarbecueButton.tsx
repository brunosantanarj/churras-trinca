import React from 'react'
import { BarbecueIcon } from '@presentation/ui';

const AddBarbecueButton = () => {
  return (
    <button className="shadow-md bg-gray-100">
      <BarbecueIcon />
      <span className="raleway font-bold text-xl mt-3 block">
        Adicionar Churras
      </span>
    </button>
  )
}

export default AddBarbecueButton;
