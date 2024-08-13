import { cva } from 'class-variance-authority';

export const buttonVariants = cva('flex', {
  variants: {
    variant: {
      default: 'bg-red',
      search:
        'hover:bg-hover-button absolute right-2.5 top-[50%] translate-y-[-50%] rounded-sm border-0 bg-subtitle text-h3 font-bold text-white shadow-card',
    },
    size: {
      default: 'px-10 py-10',
      search: 'px-6 py-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
