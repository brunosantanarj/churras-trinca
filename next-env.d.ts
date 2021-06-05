/// <reference types="next" />
/// <reference types="next/types/global" />

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

declare module 'react-intl-currency-input';