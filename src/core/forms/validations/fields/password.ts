import { IValidation } from '../validation-types';

const validPassword = /^.{6,}$/;

export const passwordValidations: IValidation[] = [
  { message: 'Mínimo de 6 caracteres para a senha', validMatch: validPassword }
];
