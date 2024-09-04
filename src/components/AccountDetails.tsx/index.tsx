'use client';

import { useUser } from '@/hooks/useUser';

export function AccountDetails() {
  const { userDetails } = useUser();

  if (!userDetails) return null;

  const { public_repos, followers, following } = userDetails;

  return (
    <section className="flex w-full justify-center rounded-sm bg-background-details px-4 py-5">
      <div className="flex w-1/3 flex-col items-center">
        <h5 className="font-regular text-h5 text-account-title">Repos</h5>
        <h3 className="text-h3 font-bold text-account-statistics">
          {public_repos}
        </h3>
      </div>

      <div className="flex w-1/3 flex-col items-center">
        <h5 className="font-regular text-h5 text-account-title">Followers</h5>
        <h3 className="text-h3 font-bold text-account-statistics">
          {followers}
        </h3>
      </div>

      <div className="flex w-1/3 flex-col items-center">
        <h5 className="font-regular text-h5 text-account-title">Following</h5>
        <h3 className="text-h3 font-bold text-account-statistics">
          {following}
        </h3>
      </div>
    </section>
  );
}
