export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, IAM)', 'Docker', 'GitHub Actions', 'CI/CD', 'Git'],
  },
  {
    category: 'Backend & AI',
    items: ['FastAPI', 'REST API design', 'OpenAI API', 'Hugging Face'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
]