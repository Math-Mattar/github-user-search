import { HomePage } from '@/containers/HomePage';
import { ThemeProvider } from '@/context/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main>
        <HomePage />
      </main>
    </ThemeProvider>
  );
}
