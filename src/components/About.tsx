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
              Since March 2024 I've been building cloud-based AI applications
              with Python and FastAPI. I integrate AI models through APIs like
              OpenAI and Hugging Face, containerize everything with Docker,
              and deploy on AWS using EC2, S3 and IAM, with CI/CD pipelines
              through GitHub Actions.
            </p>
            <p>
              I'm completing my Software Engineering qualification at
              WeThinkCode_ in December 2026. I also volunteered as a placement
              facilitator there, helping fellow students with CVs, interview
              prep and job applications. I'm looking for a role where I can
              keep growing in cloud and AI engineering.
            </p>
          </div>

          <ul className="space-y-3 text-slate-300">
            <li>
              <span className="text-emerald-400">▹</span> Based in Johannesburg,
              South Africa
            </li>
            <li>
              <span className="text-emerald-400">▹</span> Software Engineering
              at WeThinkCode_, finishing December 2026
            </li>
            <li>
              <span className="text-emerald-400">▹</span> Harvard certificate
              in Software Development (in progress)
            </li>
            <li>
              <span className="text-emerald-400">▹</span> AWS Educate badges in
              Cloud 101 and Storage
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}