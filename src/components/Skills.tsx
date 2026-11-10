import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 flex items-center gap-4 text-2xl font-bold text-white">
          <span className="text-emerald-400">03.</span> Skills
          <span className="h-px flex-1 bg-white/10" />
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-white/10 bg-slate-900 p-6"
            >
              <h3 className="text-lg font-bold text-white">{group.category}</h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}