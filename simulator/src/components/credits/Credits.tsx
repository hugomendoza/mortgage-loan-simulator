import { useMortgageSimulator } from '../../store/store';
import { Alert } from '../alert/Alert';
import { Mortgages } from '../mortgages/Mortgages';

export function Credits() {
  const { mortgages } = useMortgageSimulator();

  return (
    <section className='p-4'>
      <header>
        <h2 className='text-xl font-bold'>Credits</h2>
      </header>
      <hr className='my-4 border-slate-300' />
      {mortgages.length === 0 ? <Alert /> : <Mortgages mortgages={mortgages} />}
    </section>
  );
}
