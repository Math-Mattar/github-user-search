'use client';

import { Button } from '@/components/Button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !theme) {
    return null;
  }

  const content = theme === 'dark' ? 'Dark' : 'Light';

  function toggleTheme(currentTheme: string) {
    switch (currentTheme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
      default:
        setTheme('light');
    }
  }

  return (
    <header>
      <h1 className="">devfinder</h1>
      <Button onClick={() => toggleTheme(theme)}>{content}</Button>
    </header>
  );
}
