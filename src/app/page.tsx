import { Card } from '@/containers/Card';
import { SearchContainer } from '@/containers/SearchContainer';

export default function Home() {
  return (
    <main className="flex min-w-80 max-w-[730px] flex-col gap-4">
      <SearchContainer />
      <Card />
    </main>
  );
}
