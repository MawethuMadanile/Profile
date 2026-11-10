export type Project = {
  title: string
  description: string
  tech: string[]
  repoUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Local AI Voice Assistant',
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
    title: 'Switchboard',
    description:
      'Replace this with what Switchboard does and the problem it solves.',
    tech: ['Python'],
    repoUrl: 'https://github.com/MawethuMadanile/switchboard',
  },
]