import React from 'react';
import styled from 'styled-components';
import { Colors }from '@presentation/ui';

/** 
 * Library not support Typescript 
 * https://github.com/thiagozanetti/react-intl-currency-input/issues/104 
 * */
// @ts-ignore
import IntlCurrencyInput from "react-intl-currency-input"

type ElementProps<T> =  React.HTMLAttributes<T> & { isEnable: boolean }

export const WrapperList = styled.li.attrs({
  className: 'mt-10'
})`
  list-style: none;
`

export const WrapperLine = styled.li.attrs({
  className: 'flex items-center py-4'
})`
  border-bottom: 1px solid #E5C231;
`

export const ElementCircle = styled.div<ElementProps<HTMLDivElement>>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 15px;
  border-width: 3px;

  ${({ isEnable }) => isEnable ? `
    background-color: ${Colors.primary};
    border-color: ${Colors.primary};
  ` : `border-color: #998220;`}
`;

export const LabelName = styled.span.attrs({
  className: 'raleway font-bold text-xl'
})``;

export const WrapperButton = styled.button.attrs({
  className: 'flex items-center'
})<React.HTMLAttributes<HTMLButtonElement>>``;

export const ContributionInput = styled(IntlCurrencyInput).attrs((props) => ({
    className: `ml-auto text-right font-bold text-xl ${props.isEnable ? '': 'line-through'}`
}))<ElementProps<any>>`
  &:disabled {
    background-color: transparent;
  }
`;

