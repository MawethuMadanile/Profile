import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-20">
        <section id="about" className="flex h-screen items-center justify-center">
          About
        </section>
        <section id="projects" className="flex h-screen items-center justify-center">
          Projects
        </section>
        <section id="skills" className="flex h-screen items-center justify-center">
          Skills
        </section>
        <section id="contact" className="flex h-screen items-center justify-center">
          Contact
        </section>
      </main>
    </div>
  )
}