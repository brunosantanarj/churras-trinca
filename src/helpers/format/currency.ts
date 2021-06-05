export const formatCurrencyToReal = (value: number, removeDigits = true) => new Intl.NumberFormat(
  'pt-br',
  {
    style: 'currency',
    currency: 'BRL',
    ...(removeDigits ? {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    } : {})
  }
).format(value);