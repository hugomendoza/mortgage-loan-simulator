import type { ComponentProps } from 'react';
import { buttonStyles } from './ButtonStyles';
import { LoaderCircle } from 'lucide-react';
import { tw } from '../../utils';

type ButtonProps = ComponentProps<'button'> & {
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'icon';
};

export const Button = ({
  children,
  variant = 'primary',
  className,
  loading,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={tw(buttonStyles({ variant }), className)}
      {...rest}>
      {loading ? <LoaderCircle className='animate-spin' /> : children}
    </button>
  );
};
