import { Colors } from '@presentation/ui';
import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: calc(100vh - 430px);
  background-color: ${Colors.primary}; 
  margin-top: -10px;
`;

export const FormWrapper = styled.form.attrs({
  className: 'max-w-xs p-2 mx-auto'
})``;

export const Label = styled.label.attrs({
  className: 'font-bold text-xl mb-4 block'
})``;

export const Input = styled.input.attrs<React.HTMLAttributes<HTMLInputElement>>({
  className: 'py-4 px-6 w-full mb-9 rounded-sm'
})`
  &::placeholder {
    font-style: italic;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.7);
    font-size: 18px;
  }
`;

export const ErrorText = styled.span.attrs({
  className: '-mt-8 block text-red-600 mb-9'
})``;
