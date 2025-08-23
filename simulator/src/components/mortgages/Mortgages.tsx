import type { Mortgage } from '../../interfaces';
import { Card } from '../card/Card';

interface Props {
  mortgages: Mortgage[];
}

export function Mortgages({ mortgages }: Props) {
  return (
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
        {mortgages.map((mortgage) => (
          <Card
            key={mortgage.id}
            {...mortgage}
          />
        ))}
      </ul>
    </div>
  );
}
