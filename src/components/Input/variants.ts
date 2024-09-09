import { cva } from 'class-variance-authority';

export const InputVariants = cva('flex', {
  variants: {
    variant: {
      default: 'bg-red',
      search:
        'placeholder:text-placeholder relative truncate border-0 bg-background-card py-4 px-11 w-full text-h4 shadow-card',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
