import { cva } from 'class-variance-authority';

export const InputVariants = cva('flex', {
  variants: {
    variant: {
      default: 'bg-red',
      search:
        'relative w-full max-w-[730px] border-0 bg-background-card py-5 pl-20 shadow-card placeholder:text-bio-text',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
