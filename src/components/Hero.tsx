export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-4 text-emerald-400">Hi, my name is</p>

        <h1 className="text-5xl font-bold text-white md:text-7xl">
          Your Name.
        </h1>

        <h2 className="mt-2 text-3xl font-bold text-slate-400 md:text-5xl">
          Your Job Title.
        </h2>

        <p className="mt-6 max-w-xl text-lg text-slate-400">
          A short sentence about what you build and what you care about.
          Replace this with your own intro.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-emerald-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-emerald-300"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-emerald-400 px-6 py-3 font-medium text-emerald-400 transition hover:bg-emerald-400/10"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}