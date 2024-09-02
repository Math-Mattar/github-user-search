import Link from 'next/link';
import { Avatar } from '../Avatar';

export function PersonalDetails() {
  return (
    <section className="grid justify-center gap-2">
      <div className="inline-grid grid-cols-2 gap-5">
        <Avatar />

        <div className="flex flex-col gap-4">
          <div>
            <h2>Name</h2>

            <Link href="/link" target="_blank">
              @link
            </Link>
          </div>

          <h3>Date</h3>
        </div>
      </div>
      <p>Bio</p>
    </section>
  );
}
