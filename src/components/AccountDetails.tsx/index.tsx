export function AccountDetails() {
  return (
    <section className="dark:background-details bg-background-details flex w-full justify-center rounded-sm px-4 py-5">
      <div className="w-1/3">
        <h5>Repos</h5>
        <h4>number</h4>
      </div>

      <div className="w-1/3">
        <h5>Followers</h5>
        <h4>number</h4>
      </div>

      <div className="w-1/3">
        <h5>Following</h5>
        <h4>number</h4>
      </div>
    </section>
  );
}
