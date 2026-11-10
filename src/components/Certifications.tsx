import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 flex items-center gap-4 text-2xl font-bold text-white">
          <span className="text-emerald-400">04.</span> Certifications
          <span className="h-px flex-1 bg-white/10" />
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-lg border border-white/10 bg-slate-900 p-6 transition hover:border-emerald-400/50"
            >
              <h3 className="text-lg font-bold text-white">{cert.title}</h3>
              {cert.issuer && (
                <p className="mt-2 text-sm text-emerald-400">{cert.issuer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}