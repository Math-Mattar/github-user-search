// Link.tsx
import { cn } from '@/lib/utils';
import { forwardRef, AnchorHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { LinkVariants } from './variants';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof LinkVariants>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  /* eslint-disable react/prop-types */
  ({ className, variant, ...props }, ref) => {
    return (
      <a
        className={cn(LinkVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
