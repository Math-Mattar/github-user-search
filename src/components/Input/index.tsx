'use client';

import { cn } from '@/lib/utils';
import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';
import { InputVariants } from './variants';
import { VariantProps } from 'class-variance-authority';
import { useUser } from '@/hooks/useUser';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof InputVariants>
  /* eslint-disable react/prop-types */
>(({ className, variant, type, ...props }, ref) => {
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    fetchUserDetails(username);
  };

  const { setUserDetails } = useUser();

  const fetchUserDetails = async (username: string) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      console.log(res.ok);
      if (!res.ok) {
        throw new Error('User not found');
      }
      const data = await res.json();
      console.log(data);
      setUserDetails(data);
    } catch (error) {
      console.error('Erro:', error);
      // setUserDetails();
    }
  };

  return (
    <input
      type={type}
      className={cn(InputVariants({ variant, className }))}
      ref={ref}
      onChange={handleValue}
      {...props}
    />
  );
});
