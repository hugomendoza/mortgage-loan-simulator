import { CircleAlert } from 'lucide-react';

export function Alert() {
  return (
    <div className='bg-red-100 text-red-600 rounded-lg p-3 flex justify-center items-center gap-2 text-sm'>
      <CircleAlert /> No mortgages added yet
    </div>
  );
}
