import { cva } from 'class-variance-authority';

export const LinkVariants = cva('flex', {
  variants: {
    variant: {
      default: 'bg-red',
      account: 'text-subtitle font-regular text-h4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
