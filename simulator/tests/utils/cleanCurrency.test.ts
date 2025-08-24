import { describe, expect, test } from 'vitest';
import { cleanCurrency } from '../../src/utils';

describe('cleanCurrency', () => {
  test('should remove currency symbols and convert to number', () => {
    expect(cleanCurrency('$1.000')).toBe(1000);
    expect(cleanCurrency('$1.500.000')).toBe(1500000);
    expect(cleanCurrency('1000')).toBe(1000);
  });
});
