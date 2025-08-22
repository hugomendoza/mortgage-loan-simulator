export function cleanCurrency(value: string) {
  if (typeof value !== 'string') return 0;
  const cleanedValue = value.replace(/[$\s.]/g, '');
  return +cleanedValue;
}
