import { useCreateMortgage } from '../../hooks';
import { Button } from '../button/Button';
import { Input } from '../input/Input';

export default function Form() {
  const {
    errors,
    loading,
    formState,
    onInputChange,
    onInputCreditScore,
    onInputOccupancy,
    onGenerateMortgage,
  } = useCreateMortgage();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onGenerateMortgage();
  };

  return (
    <section className='rounded-lg p-4 border border-slate-300'>
      <header className='mb-4 text-center'>
        <h2 className='text-xl font-bold'>Calculate your mortgage</h2>
      </header>
      <hr className='my-4 border-slate-300' />
      <form
        noValidate
        onSubmit={onSubmit}
        className='grid grid-cols-2 gap-4'>
        <Input
          label='Monthly income'
          id='monthlyIncome'
          className='w-full flex-1'
          placeholder='$1.500'
          value={formState.monthlyIncome}
          onChange={onInputChange}
          maxLength={10}
          error={!!errors.monthlyIncome}
          warningMessage={errors.monthlyIncome}
        />
        <Input
          label='Monthly debts'
          id='monthlyDebts'
          className='w-full'
          placeholder='$500'
          value={formState.monthlyDebts}
          onChange={onInputChange}
          maxLength={10}
          error={!!errors.monthlyDebts}
          warningMessage={errors.monthlyDebts}
        />
        <Input
          label='Loan amount'
          id='loanAmount'
          className='w-full'
          placeholder='$250.000'
          value={formState.loanAmount}
          onChange={onInputChange}
          maxLength={10}
          error={!!errors.loanAmount}
          warningMessage={errors.loanAmount}
        />
        <Input
          label='Property value'
          id='propertyValue'
          className='w-full'
          placeholder='$300.000'
          value={formState.propertyValue}
          onChange={onInputChange}
          maxLength={10}
          error={!!errors.propertyValue}
          warningMessage={errors.propertyValue}
        />
        <Input
          label='Credit score'
          id='creditScore'
          className='w-full'
          placeholder='720'
          value={formState.creditScore}
          onChange={onInputCreditScore}
          maxLength={3}
          error={!!errors.creditScore}
          warningMessage={errors.creditScore}
        />
        <Input
          label='Occupation'
          id='occupancyType'
          className='w-full'
          placeholder='Developer'
          value={formState.occupancyType}
          onChange={onInputOccupancy}
          error={!!errors.occupancyType}
          warningMessage={errors.occupancyType}
        />
        <Button
          className='col-span-2'
          loading={loading}
          disabled={loading}>
          Calculate your mortgage
        </Button>
      </form>
    </section>
  );
}
