import { AccountDetails } from '@/components/AccountDetails.tsx';
import { PersonalDetails } from '@/components/PersonalDetails.tsx';
import { JobDetails } from '@/components/JobDetails';

export function Card() {
  return (
    <section className="flex w-full flex-col gap-6 rounded-md bg-background-card px-6 pb-12 pt-8 shadow-card">
      <PersonalDetails />
      <AccountDetails />
      <JobDetails />
    </section>
  );
}
