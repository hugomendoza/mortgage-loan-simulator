import { CircleAlert } from 'lucide-react';

interface Props {
  message?: string;
}

export function Alert({ message }: Props) {
  return (
    <div className='bg-red-100 text-red-600 rounded-lg p-3 flex justify-center items-center gap-2 text-sm'>
      <CircleAlert /> {message || 'No mortgages added yet'}
    </div>
  );
}
