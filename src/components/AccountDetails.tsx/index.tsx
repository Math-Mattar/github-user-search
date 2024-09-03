'use client';

import { useUser } from '@/hooks/useUser';

export function AccountDetails() {
  const { userDetails } = useUser();
  console.log(userDetails);

  if (!userDetails) return null;
  const { public_repos, followers, following } = userDetails;

  return (
    <section className="flex w-full justify-center rounded-sm bg-background-details px-4 py-5">
      <div className="w-1/3">
        <h5>Repos</h5>
        <h4>{public_repos}</h4>
      </div>

      <div className="w-1/3">
        <h5>Followers</h5>
        <h4>{followers}</h4>
      </div>

      <div className="w-1/3">
        <h5>Following</h5>
        <h4>{following}</h4>
      </div>
    </section>
  );
}
