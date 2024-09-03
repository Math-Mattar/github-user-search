'use client';

import { Avatar, AvatarImage } from '../Avatar';
import { UserDetails } from '@/utils/types';
import { useUser } from '@/hooks/useUser';
import { Link } from '../Link';

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
            <h3 className="text-h3 font-bold text-title">{name || login}</h3>
            <Link
              variant="account"
              href={`https://github.com/${login}`}
              target="_blank"
            >
              @{login}
            </Link>
          </div>

          <h4 className="text-h4 text-join-date-text">
            {new Date(created_at).toLocaleDateString()}
          </h4>
        </div>
      </div>
      <p className="font-regular text-h4 leading-md text-bio-text">
        {bio || 'This profile has no bio'}
      </p>
    </section>
  );
}
