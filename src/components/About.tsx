export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 flex items-center gap-4 text-2xl font-bold text-white">
          <span className="text-emerald-400">01.</span> About me
          <span className="h-px flex-1 bg-white/10" />
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-slate-400">
            <p>
              Write a short paragraph here about who you are and how you got
              into software development.
            </p>
            <p>
              Add a second paragraph about what you are learning now and what
              kind of work you want to do next.
            </p>
          </div>

          <ul className="space-y-3 text-slate-300">
            <li>
              <span className="text-emerald-400">▹</span> Fact one
            </li>
            <li>
              <span className="text-emerald-400">▹</span> Fact two
            </li>
            <li>
              <span className="text-emerald-400">▹</span> Fact three
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}