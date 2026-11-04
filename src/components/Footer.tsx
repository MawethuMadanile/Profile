export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <p className="text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Mawethu Madanile. Built with React,
        TypeScript and Tailwind CSS.
      </p>
    </footer>
  )
}