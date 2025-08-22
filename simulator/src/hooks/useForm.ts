import { useState, type ChangeEvent } from 'react';

export function useForm<T extends object>(initialForm: T) {
  const [formState, setFormState] = useState(initialForm);

  function cleanValue(value: string) {
    const cleanedValue = value.replace(/[^\d]/g, '');
    return cleanedValue;
  }

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const cleanedValue = cleanValue(value);

    const formattedValue = `$ ${cleanedValue.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.'
    )}`;

    setFormState({
      ...formState,
      [name]: formattedValue,
    });
  };

  const onInputCreditScore = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const cleanedValue = cleanValue(value);

    setFormState({
      ...formState,
      [name]: cleanedValue,
    });
  };

  const onInputOccupancy = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,

    onInputOccupancy,
    onInputChange,
    onInputCreditScore,
    onResetForm,
  };
}
