import ValidationLogin from '../validation-login';

describe('validation-login', () => {
  it ('should validate invalid form', () => {
    const { isValidForm } = new ValidationLogin('bruno', '1234').validate();
    expect(isValidForm).toBeFalsy();
  });

  it ('should validate valid form', () => {
    const { isValidForm } = new ValidationLogin('brunosantana@test.com', '123456').validate();
    expect(isValidForm).toBeTruthy();
  });

  it ('should validate invalid email with message', () => {
    const { email } = new ValidationLogin('brunosantana@test.', '123456').validate();
    expect(email[0]).toBe('E-mail inserido incorretamente');
  });

  it ('should validate invalid password with message', () => {
    const { password } = new ValidationLogin('brunosantana@test.com', 'senha').validate();
    expect(password[0]).toBe('Mínimo de 6 caracteres para a senha');
  });
});