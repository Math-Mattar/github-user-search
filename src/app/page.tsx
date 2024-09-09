import { Card } from '@/containers/Card';
import { SearchContainer } from '@/containers/SearchContainer';
import { UserProvider } from '@/context/UserProvider';

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-4 px-6 tablet:px-24 desktop:max-w-[730px] desktop:gap-6 desktop:px-0">
      <UserProvider>
        <SearchContainer />
        <Card />
      </UserProvider>
    </main>
  );
}
