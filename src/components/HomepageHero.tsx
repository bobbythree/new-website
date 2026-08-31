export default function HomepageHero() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 text-slate-800">
      <p className="text-sm font-semibold uppercase tracking-widest">
        Robert Lewis III — Software Consultant & Engineer
      </p>

      <h1 className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.95] md:text-8xl">
        Custom software Designed around your Exact business needs.
      </h1>

      <p className="mt-10 max-w-4xl text-2xl font-semibold leading-snug md:text-3xl">
        Sometimes the right tool for the job doesn't exist yet.
      </p>

      <p className="mt-10 max-w-3xl text-lg leading-relaxed md:text-xl">
        Maybe your current software has become limiting or cumbersome. Maybe your business needs functionality that existing tools simply don’t provide. Maybe you’re ready to create something entirely new, or explore integrating AI into the tools and systems you already use. Whatever the need, I can help you determine the right approach, shape the solution, and build something that finally fits.
      </p>

      <div className="mt-8">
        <a
          href="#contact"
          className="inline-flex items-center rounded-lg bg-sky-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-sky-800"
        >
          Book a consultation
        </a>
      </div>
    </section>
  )
}
