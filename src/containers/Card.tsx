'use client';

import { AccountDetails } from '@/components/AccountDetails.tsx';
import { PersonalDetails } from '@/components/PersonalDetails.tsx';
import { JobDetails } from '@/components/JobDetails';
import { useUser } from '@/hooks/useUser';

export function Card() {
  const { userDetails } = useUser();

  if (!userDetails) return null;

  return (
    <section className="mx-auto flex w-full flex-col gap-6 rounded-md bg-background-card px-6 pb-12 pt-8 shadow-card tablet:gap-8 tablet:p-10">
      <PersonalDetails />
      <AccountDetails />
      <JobDetails />
    </section>
  );
}
