import { useState } from 'react';
import { Button } from '../button/Button';
import { CircleAlert } from 'lucide-react';

export function Credits() {
  const reasons = [
    'Ingresos suficientes para cubrir la deuda.',
    'Historial crediticio positivo.',
    'Relación DTI dentro del rango aceptable.',
  ];

  const [open, setOpen] = useState(false);

  return (
    <section className='p-4'>
      <header>
        <h2 className='text-xl font-bold'>Credits</h2>
      </header>
      <hr className='my-4 border-slate-300' />
      <div className='bg-red-100 text-red-600 rounded-lg p-3 flex justify-center items-center gap-2 text-sm'>
        <CircleAlert /> No credits added yet
      </div>
      <div
        className='
          h-72
          overflow-y-auto
          scrollbar-thin
          scrollbar-thumb-slate-300
          scrollbar-track-slate-100
          hover:scrollbar-thumb-slate-400
          transition
        '>
        <ul className='space-y-4 py-1'>
          <li className='border border-slate-300 text-slate-500 rounded-lg p-3'>
            <div className='grid grid-cols-4 text-sm space-y-1 text-center'>
              <div>
                <p>Status</p>
                <p className='bg-green-200 text-green-600 px-2 py-0.5 rounded-2xl w-fit mx-auto'>
                  Approved
                </p>
              </div>
              <div>
                <p>DTI</p>
                <p className='font-bold'>0.02</p>
              </div>
              <div>
                <p>LTV</p>
                <p className='font-bold'>0.975</p>
              </div>
              <div className='h-full grid place-content-center'>
                <Button
                  variant='link'
                  onClick={() => setOpen((v) => !v)}>
                  Details
                </Button>
              </div>
            </div>
            <div
              className={`text-sm overflow-hidden transition-all duration-300 space-y-4 ${
                open ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}>
              <ul className='pl-6 text-slate-600 font-light'>
                {reasons.map((reason, idx) => (
                  <li
                    className='list-disc'
                    key={idx}>
                    {reason}
                  </li>
                ))}
              </ul>
              <div className='px-4'>
                <Button variant='outline'>Send to review</Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
