export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="mb-4 flex items-center justify-center gap-4 text-2xl font-bold text-white">
          <span className="text-emerald-400">04.</span> Get in touch
        </h2>

        <p className="text-slate-400">
          I'm open to internships and junior roles. Whether you have a
          question or just want to say hi, my inbox is open.
        </p>

        <a
          href="mailto:you@example.com"
          className="mt-8 inline-block rounded-md border border-emerald-400 px-6 py-3 font-medium text-emerald-400 transition hover:bg-emerald-400/10"
        >
          Say hello
        </a>

        <div className="mt-10 flex justify-center gap-6 text-sm">
          <a
            href="https://gitlab.com/mamadjhb025"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-emerald-400"
          >
            GitLab
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-emerald-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}