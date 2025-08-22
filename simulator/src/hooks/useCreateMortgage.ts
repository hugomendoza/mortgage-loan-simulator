import { useState } from 'react';
import { createMortgage } from '../services';
import { useForm } from './useForm';

import { mortgageSchema, type MortgageSchema } from '../interfaces';
import { cleanCurrency } from '../utils';
import { useZodErrors } from './useZod';

export function useCreateMortgage() {
  const mortgage = {
    creditScore: '',
    loanAmount: '',
    monthlyDebts: '',
    monthlyIncome: '',
    occupancyType: '',
    propertyValue: '',
  } as MortgageSchema;

  const [loading, setLoading] = useState<boolean>(false);

  const {
    formState,
    onInputChange,
    onInputCreditScore,
    onInputOccupancy,
    onResetForm,
  } = useForm(mortgage);

  const { errors, resetErrors, validateFields } = useZodErrors(mortgage);

  const mortgageData = {
    creditScore: +formState.creditScore,
    loanAmount: cleanCurrency(formState.loanAmount),
    monthlyDebts: cleanCurrency(formState.monthlyDebts),
    monthlyIncome: cleanCurrency(formState.monthlyIncome),
    occupancyType: formState.occupancyType.toLowerCase(),
    propertyValue: cleanCurrency(formState.propertyValue),
  };

  async function onGenerateMortgage() {
    setLoading(true);
    try {
      mortgageSchema.parse(formState);
      await createMortgage(mortgageData);
      onResetForm();
      resetErrors();
    } catch (error) {
      validateFields(error as Error);
    } finally {
      setLoading(false);
    }
  }

  return {
    ...formState,
    formState,
    loading,
    errors,

    onInputChange,
    onInputCreditScore,
    onInputOccupancy,
    onGenerateMortgage,
  };
}
