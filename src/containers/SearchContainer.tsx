'use client';

import { Button } from '@/components/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '@/components/Input';

import { useUser } from '@/hooks/useUser';
import Search from '@/icons/Search';

export function SearchContainer() {
  const [username, setUsername] = useState('');
  const { setUserDetails } = useUser();

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  async function fetchUserDetails(username: string) {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error('User not found');
      }
      const data = await res.json();
      setUserDetails(data);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    fetchUserDetails(username);
  }

  return (
    <form onSubmit={handleSubmit} className="relative mx-auto">
      <Search
        fill="#0079ff"
        className="absolute left-4 top-[50%] z-10 translate-y-[-50%]"
      />
      <Input
        type="search"
        variant="search"
        placeholder="Search GitHub username…"
        className="rounded-md"
        onChange={handleValue}
      />
      <Button type="submit" variant="search" size="search">
        Search
      </Button>
    </form>
  );
}
