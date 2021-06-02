import { useReducer } from 'react';

type FormFields<T> = {
  email: T
  password: T
};

export type Payload = {
  target?: HTMLInputElement,
  validations?: FormFields<string[]>,
};

export type FieldProperties = FormFields<{value: string}>;

export type State = FormFields<{value: string; hasErrors?: string[]}>;

export type FieldIds = 'email' | 'password'

const createEmptyFieldState = () => ({ value: '', hasErrors: [] });

const initialState: State = {
  email: createEmptyFieldState(),
  password: createEmptyFieldState()
};

function reducer(state: State, { target, validations }: Payload) {
  if (validations) {
    const stateEntries = Object.entries(state) as Entries<State>;
    const validationReducerFn = stateEntries.reduce((acc, [ key, { value } ]) => ({
      ...acc,
      [key]: {
        ...(validations[key]
          ? { value, hasErrors: validations[key] }
          : { value, hasErrors: [] }
        )
      }
    }), {});

    return {
      ...state,
      ...validationReducerFn
    };
  }

  if (target) {
    return {
      ...state,
      [target.id]: {
        ...state[target.id as FieldIds],
        value: target.value
      }
    };
  }

  return { ...state };
}

export default function formReducer() {
  return useReducer(reducer, initialState);
}
