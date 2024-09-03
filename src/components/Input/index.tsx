'use client';

import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes } from 'react';
import { InputVariants } from './variants';
import { VariantProps } from 'class-variance-authority';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof InputVariants>
  /* eslint-disable react/prop-types */
>(({ className, variant, type, onChange, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(InputVariants({ variant, className }))}
      ref={ref}
      onChange={onChange}
      {...props}
    />
  );
});
