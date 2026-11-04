export type Project = {
  title: string
  description: string
  tech: string[]
  repoUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does and the problem it solves.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    repoUrl: 'https://gitlab.com/your-username/project-one',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Project Two',
    description:
      'A short description of what this project does and the problem it solves.',
    tech: ['Java', 'PostgreSQL'],
    repoUrl: 'https://gitlab.com/your-username/project-two',
  },
  {
    title: 'Project Three',
    description:
      'A short description of what this project does and the problem it solves.',
    tech: ['Python', 'AWS'],
    repoUrl: 'https://gitlab.com/your-username/project-three',
  },
]