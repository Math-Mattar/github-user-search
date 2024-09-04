import { cva } from 'class-variance-authority';

export const InputVariants = cva('flex', {
  variants: {
    variant: {
      default: 'bg-red',
      search:
        'placeholder:text-placeholder relative mobile:w-[327px] tablet:w-[573px] desktop:w-[730px] max-w-[730px] truncate border-0 bg-background-card py-4 pl-11 pr-[29.969%] text-h4 shadow-card',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
