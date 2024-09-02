import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Search } from 'lucide-react';

export function SearchContainer() {
  return (
    <section className="relative">
      <Search className="absolute left-8 top-[50%] z-10 translate-y-[-50%] stroke-subtitle" />
      <Input
        type="search"
        variant="search"
        placeholder="Search GitHub username…"
        className="rounded-md"
      />
      <Button type="submit" variant="search" size="search">
        Search
      </Button>
    </section>
  );
}
