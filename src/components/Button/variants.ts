import { cva } from 'class-variance-authority';

export const buttonVariants = cva('flex', {
  variants: {
    variant: {
      default: 'bg-red',
      search:
        'hover:bg-hover-button absolute right-2.5 top-[50%] translate-y-[-50%] rounded-sm border-0 bg-subtitle font-bold text-h4 shadow-card',
      theme: 'flex items-center gap-4 text-h4 font-bold tracking-theme',
    },
    size: {
      default: 'px-10 py-10',
      search: 'px-4 py-3',
      theme: 'px-0 py-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
