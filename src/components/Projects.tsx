import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 flex items-center gap-4 text-2xl font-bold text-white">
          <span className="text-emerald-400">02.</span> Projects
          <span className="h-px flex-1 bg-white/10" />
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-lg border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <h3 className="text-xl font-bold text-white">{project.title}</h3>

              <p className="mt-3 flex-1 text-slate-400">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-4 text-sm">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 transition hover:text-emerald-400"
                >
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 transition hover:text-emerald-400"
                  >
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}