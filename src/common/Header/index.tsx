'use client';

import { Button } from '@/components/Button';
import { Sun, Moon } from 'lucide-react';
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
    <header className="flex w-full max-w-[730px] items-center justify-between px-6 pb-8 pt-7 tablet:mt-36 tablet:px-24">
      <h1 className="text-h1 font-bold">devfinder</h1>
      <Button variant="theme" size="theme" onClick={() => toggleTheme(theme)}>
        {theme === 'dark' ? (
          <>
            LIGHT <Sun />
          </>
        ) : (
          <>
            DARK <Moon />
          </>
        )}
      </Button>
    </header>
  );
}
