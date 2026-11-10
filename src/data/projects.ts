export type Project = {
  title: string
  description: string
  tech: string[]
  repoUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Nova: Local AI Voice Assistant',
    description:
      'A fully offline voice assistant with no cloud dependencies. Speech flows from the microphone through voice activity detection, transcription, a local language model and speech synthesis. Built to run on a low-spec laptop with no dedicated GPU.',
    tech: [
      'Python',
      'faster-whisper',
      'llama.cpp',
      'Silero VAD',
      'Kokoro TTS',
    ],
    repoUrl: 'https://github.com/MawethuMadanile/Local-AI-Voice-Assistant',
  },
  {
    title: 'CloudTask',
    description:
      'A Python command-line task manager backed by AWS. Tasks are stored in DynamoDB, SNS sends email notifications, and the infrastructure is defined in CloudFormation. Tested with mocked AWS services, built through a GitHub Actions workflow and packaged as a Docker image.',
    tech: [
      'Python',
      'AWS',
      'DynamoDB',
      'SNS',
      'CloudFormation',
      'Docker',
      'GitHub Actions',
    ],
    repoUrl: 'https://github.com/MawethuMadanile/CloudTask',
  },
]