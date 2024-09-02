import Link from 'next/link';

export function JobDetails() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-5">
        <span>icon</span>
        <p>city</p>
      </div>
      <div className="flex gap-5">
        <span>icon</span>
        <Link href="/link">https://</Link>
      </div>
      <div className="flex gap-5">
        <span>icon</span>
        <p>Social media</p>
      </div>
      <div className="flex gap-5">
        <span>icon</span>
        <p>Job</p>
      </div>
    </section>
  );
}
