export const formatCurrencyToReal = (value: number) => new Intl.NumberFormat(
  'pt-br',
  { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }
).format(value);