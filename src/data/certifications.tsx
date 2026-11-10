export type Certification = {
  title: string
  issuer?: string
}

export const certifications: Certification[] = [
  {
    title: 'Introduction to Cloud 101',
    issuer: 'AWS Educate',
  },
  {
    title: 'Getting Started with Storage',
    issuer: 'AWS Educate',
  },
  {
    title: 'Front-End Web Development',
  },
  {
    title: 'Gen-AI',
  },
]