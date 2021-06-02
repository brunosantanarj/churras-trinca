import { FieldIds } from '@presentation/hooks/forms/use-login-form';
import React from 'react';

export interface IFormConfig {
  id: FieldIds;
  label: string;
  props: React.InputHTMLAttributes<HTMLInputElement>;
}

export const formConfig: IFormConfig[] = [
  {
    id: 'email',
    label: 'Login',
    props: {
      placeholder: 'e-mail'
    }
  },
  {
    label: 'Senha',
    id: 'password',
    props: {
      placeholder: 'senha',
      type: 'password'
    }
  }
];
