export const formatDateToPT = (date: Date) => new Intl.DateTimeFormat(
  'pt-br',
  { day: '2-digit', month: '2-digit' }
).format(date);
