'use client';

import { Link } from '../Link';
import { UserDetails } from '@/utils/types';
import { useTheme } from 'next-themes';
import { useUser } from '@/hooks/useUser';
import Address from '@/icons/Address';
import Blog from '@/icons/Blog';
import Company from '@/icons/Company';
import Twitter from '@/icons/Twitter';

export function JobDetails() {
  const { theme } = useTheme();

  const { userDetails } = useUser();

  if (!userDetails) return null;
  const { location, blog, twitter_username, company } =
    userDetails as UserDetails;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-5">
        <Address fill={theme === 'dark' ? '#FFFFFF' : '#4B6A9B'} />
        <p>{location || 'Not Available'}</p>
      </div>
      <div className="flex gap-5">
        <Blog fill={theme === 'dark' ? '#FFFFFF' : '#4B6A9B'} />
        <Link href={blog || '#'}>{blog || 'Not Available'}</Link>
      </div>
      <div className="flex gap-5">
        <Twitter fill={theme === 'dark' ? '#FFFFFF' : '#4B6A9B'} />
        <p>{twitter_username ? `@${twitter_username}` : 'Not Available'}</p>
      </div>
      <div className="flex gap-5">
        <Company fill={theme === 'dark' ? '#FFFFFF' : '#4B6A9B'} />
        <p>{company || 'Not Available'}</p>
      </div>
    </section>
  );
}
