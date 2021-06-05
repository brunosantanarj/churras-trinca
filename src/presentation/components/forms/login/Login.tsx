import React from 'react';
import { useRouter } from 'next/router'
import formReducer, { FieldIds } from '@presentation/hooks/forms/use-login-form';
import { ValidationLogin } from '@core/forms/validations';
import { Button } from '@presentation/ui';
import { formConfig, IFormConfig } from './data/form-config';
import * as Styled from './Login.styled';

const Login = () => {
  const router = useRouter();
  const [ formState, formDispatch ] = formReducer();

  const validate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formState;
    const { isValidForm, ...validations } = new ValidationLogin(email.value, password.value)
      .validate();
    formDispatch({ validations });

    if (isValidForm) {
      router.push('/barbecues');
    }
  };

  const onChangeInputComponent = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    formDispatch({ target });
  };

  const renderErrors = (id: FieldIds) => {
    const { hasErrors } = formState[id];
    if (Array.isArray(hasErrors) && Array.length > 0) {
      return hasErrors.map((error) => <Styled.ErrorText key={error}>{error}</Styled.ErrorText>);
    }

    return null;
  };

  const renderFields = ({ id, props, label }: IFormConfig) => (
    <React.Fragment key={id}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input id={id} onChange={onChangeInputComponent} {...props} />
      {renderErrors(id)}
    </React.Fragment>
  );

  return (
    <Styled.Wrapper>
      <Styled.FormWrapper onSubmit={validate}>
        {formConfig.map(renderFields)}
        <Button>Entrar</Button>
      </Styled.FormWrapper>
    </Styled.Wrapper>
  );
};

export default Login;
