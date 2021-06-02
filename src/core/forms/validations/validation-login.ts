import { emailValidations, passwordValidations } from './fields';
import { IValidation, IUserField } from './validation-types';

export default class ValidateLogin {
  email: IUserField<string>;

  password: IUserField<string>;

  isValidForm = false;

  constructor(email: string, password: string) {
    this.email = this.createField(email);
    this.password = this.createField(password);
  }

  createField = (value: string) => ({ value, isValid: false, hasError: false });

  filterValidations = (validations: IValidation[], value: string) => validations
    .filter((validation) => !value.match(validation.validMatch))

  validateField(field: IUserField<string>, validationRules: IValidation[]) {
    const validations = this.filterValidations(validationRules, field.value);
    if (validations.length > 0) {
      field.hasError = true;
      field.errors = validations.map(({ message }) => message);
    } else {
      field.hasError = false;
      field.errors = undefined;
    }
  }

  validateEmail = () => this.validateField(this.email, emailValidations);

  validatePassword = () => this.validateField(this.password, passwordValidations);

  formIsValid = () => !this.email.hasError
    && !this.password.hasError

  validate() {
    this.validatePassword();
    this.validateEmail();

    return {
      email: this.email.errors || [],
      password: this.password.errors || [],
      isValidForm: this.formIsValid()
    };
  }
}
