export const NewLetter = () => {
  return (
    <section className="rounded-3xl bg-primary-300 py-16">
      <div className="container">
        <div className="grid gap-3 sm:grid-cols-2">
          <h2 className="text-title leading-none">Signup For Our Newsletter</h2>

          <div className="flex flex-col justify-center sm:flex-row sm:items-center sm:gap-3">
            <input
              placeholder="Your e-mail"
              className="mb-3 rounded-full px-6 py-3 sm:mb-0 sm:w-[330px]"
            />
            <button className="rounded-full bg-primary-950 px-6 py-3 text-white">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
