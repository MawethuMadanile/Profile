export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Cloud & Tools',
    items: ['AWS', 'Docker', 'Git', 'GitLab'],
  },
]