import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('useForm Hook', () => {
  it('should initialize with initial values', () => {
    const initialForm = {
      amount: '1000',
      term: '12',
    };

    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current.formState).toEqual(initialForm);
  });

  it('should update form values on change', () => {
    const initialForm = { amount: '' };
    const { result } = renderHook(() => useForm(initialForm));

    act(() => {
      result.current.onInputChange({
        target: { name: 'amount', value: '$ 2.000' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formState.amount).toBe('$ 2.000');
  });
});
