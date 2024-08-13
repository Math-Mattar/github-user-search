import { ButtonHTMLAttributes, forwardRef } from 'react';
import { buttonVariants } from './variants';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps } from 'class-variance-authority';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  /* eslint-disable react/prop-types */
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
