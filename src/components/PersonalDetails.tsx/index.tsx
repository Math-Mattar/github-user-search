'use client';

import Link from 'next/link';
import { Avatar, AvatarImage } from '../Avatar';
import { UserDetails } from '@/utils/types';
import { useUser } from '@/hooks/useUser';

export function PersonalDetails() {
  const { userDetails } = useUser();

  if (!userDetails) {
    return null;
  }

  const { avatar_url, name, login, created_at, bio } =
    userDetails as UserDetails;

  return (
    <section className="grid justify-center gap-2">
      <div className="inline-grid grid-cols-2 gap-5">
        <Avatar>
          <AvatarImage src={avatar_url} alt={`${login} avatar`} />
        </Avatar>
        <div className="flex flex-col gap-4">
          <div>
            <h2>{name || login}</h2>
            <Link href={`https://github.com/${login}`} target="_blank">
              @{login}
            </Link>
          </div>

          <h3>{new Date(created_at).toLocaleDateString()}</h3>
        </div>
      </div>
      <p>{bio || 'This profile has no bio'}</p>
    </section>
  );
}
