import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
  'bg-green-200 text-green-600 px-2 py-0.5 rounded-2xl w-fit mx-auto capitalize text-sm',
  {
    variants: {
      variant: {
        approved: 'bg-green-200 text-green-500',
        refer: 'bg-orange-200 text-orange-500',
        decline: 'bg-red-200 text-red-500',
      },
    },
    defaultVariants: {
      variant: 'approved',
    },
  }
);
