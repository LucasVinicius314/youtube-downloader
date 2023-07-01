declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FFMPEG_EXECUTABLE_PATH: string
    }
  }
}

export {}
