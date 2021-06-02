export interface IUserField<T> {
  value: T,
  isValid: boolean,
  hasError: boolean;
  errors?: string[];
}

export interface IValidation {
  validMatch: RegExp,
  message: string
}
