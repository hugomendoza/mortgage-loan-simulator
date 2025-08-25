import { useState } from 'react';
import { Button } from '../button/Button';

import type { Mortgage, Status } from '../../interfaces';
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
            variant={status.toLowerCase() as Status}
          />
        </div>
        <div>
          <p>DTI</p>
          <p className='font-bold'>{debtToIncome.slice(0, 4) || '-'}</p>
        </div>
        <div>
          <p>LTV</p>
          <p className='font-bold'>{loanToValue.slice(0, 4) || '-'}</p>
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
          open ? 'max-h-max opacity-100 mt-2' : 'max-h-0 opacity-0'
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
        {status.toLowerCase() === 'refer' && (
          <div className='px-4'>
            <Button variant='outline'>Send to review</Button>
          </div>
        )}
      </div>
    </li>
  );
}
