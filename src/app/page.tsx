import { Card } from '@/containers/Card';
import { SearchContainer } from '@/containers/SearchContainer';
import { UserProvider } from '@/context/UserProvider';

export default function Home() {
  return (
    <main className="flex min-w-80 max-w-[730px] flex-col gap-4">
      <UserProvider>
        <SearchContainer />
        <Card />
      </UserProvider>
    </main>
  );
}
