'use client';

import { useUser } from '@/hooks/useUser';
import { UserDetails } from '@/utils/types';
import Link from 'next/link';

export function JobDetails() {
  const { userDetails } = useUser();
  if (!userDetails) return null;
  const { location, blog, twitter_username, company } =
    userDetails as UserDetails;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-5">
        <span>icon</span>
        <p>{location || 'Not Available'}</p>
      </div>
      <div className="flex gap-5">
        <span>icon</span>
        <Link href={blog || '#'}>{blog || 'Not Available'}</Link>
      </div>
      <div className="flex gap-5">
        <span>icon</span>
        <p>{twitter_username ? `@${twitter_username}` : 'Not Available'}</p>
      </div>
      <div className="flex gap-5">
        <span>icon</span>
        <p>{company || 'Not Available'}</p>
      </div>
    </section>
  );
}
