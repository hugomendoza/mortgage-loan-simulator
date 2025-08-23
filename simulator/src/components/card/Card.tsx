import { useState } from 'react';
import { Button } from '../button/Button';

import type { Mortgage } from '../../interfaces';
import { Badge } from '../badge/Badgde';

export function Card({ debtToIncome, loanToValue, status, reasons }: Mortgage) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <li className='border border-slate-300 text-slate-500 rounded-lg p-3'>
      <div className='grid grid-cols-4 text-sm space-y-1 text-center'>
        <div>
          <p>Status</p>
          <Badge
            status={status}
            variant={status}
          />
        </div>
        <div>
          <p>DTI</p>
          <p className='font-bold'>{debtToIncome || '-'}</p>
        </div>
        <div>
          <p>LTV</p>
          <p className='font-bold'>{loanToValue || '-'}</p>
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
  );
}
