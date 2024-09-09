'use client';

import { Avatar, AvatarImage } from '../Avatar';

import { useUser } from '@/hooks/useUser';
import { Link } from '../Link';

export function PersonalDetails() {
  const { userDetails } = useUser();

  if (!userDetails) {
    return null;
  }

  const { avatar_url, name, login, created_at, bio } = userDetails;

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    return `Joined ${day} ${month} ${year}`;
  }

  return (
    <section className="flex flex-col justify-center gap-8">
      <div className="flex items-center gap-5">
        <Avatar className="h-[70px] w-[70px] tablet:h-[117px] tablet:w-[117px]">
          <AvatarImage src={avatar_url} alt={`${login} avatar`} />
        </Avatar>
        <div className="flex w-full flex-col gap-1.5">
          <div>
            <h3 className="text-h3 font-bold text-title">{name || login}</h3>
            <Link
              variant="account"
              href={`https://github.com/${login}`}
              target="_blank"
              className="text-h4 text-subtitle"
            >
              @{login}
            </Link>
          </div>

          <h4 className="text-h4 text-date">{formatDate(created_at)}</h4>
        </div>
      </div>
      <p className="font-regular text-h4 leading-md text-bio">
        {bio || 'This profile has no bio'}
      </p>
    </section>
  );
}
