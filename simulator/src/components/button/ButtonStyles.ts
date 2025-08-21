import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  'px-4 py-2 rounded-lg transition-all duration-300 disabled:cursor-not-allowed h-10 disabled:opacity-50 disabled:hover:shadow-none disabled:grayscale flex justify-center items-center gap-3 hover:shadow w-full cursor-pointer font-medium text-base sm:text-sm',
  {
    variants: {
      variant: {
        primary: 'bg-blue-100 text-blue-600 border border-blue-300',
        secondary:
          'bg-sky-900 text-white border hover:shadow-none hover:bg-sky-700',
        outline:
          'text-slate-700 border border-slate-500 hover:shadow-none hover:bg-slate-100',
        destructive: 'bg-red-500/70 text-white',
        icon: 'size-10 p-0 border border-slate-300 hover:bg-slate-100 text-slate-500 hover:shadow-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
