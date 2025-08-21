import { Button } from '../button/Button';
import { Input } from '../input/Input';

export function Form() {
  return (
    <section className='rounded-lg p-4 border border-slate-300'>
      <header className='mb-4 text-center'>
        <h2 className='text-xl font-bold'>Calculate your mortgage</h2>
      </header>
      <hr className='my-4 border-slate-300' />
      <form
        noValidate
        className='grid grid-cols-2 gap-4'>
        <Input
          label='Monthly income'
          id='monthlyIncome'
          className='w-full flex-1'
          placeholder='$1.500'
        />
        <Input
          label='Monthly debts'
          id='monthlyDebts'
          className='w-full'
          placeholder='$500'
        />
        <Input
          label='Loan amount'
          id='loanAmount'
          className='w-full'
          placeholder='$250.000'
        />
        <Input
          label='Property value'
          id='propertyValue'
          className='w-full'
          placeholder='$300.000'
        />
        <Input
          label='Credit score'
          id='creditScore'
          className='w-full'
          placeholder='720'
        />
        <Input
          label='Occupation'
          id='occupancyType'
          className='w-full'
          placeholder='Developer'
        />
        <Button className='col-span-2'>Calculate your mortgage</Button>
      </form>
    </section>
  );
}
