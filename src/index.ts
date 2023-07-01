import youtubeMp3Downloader from 'youtube-mp3-downloader'

const videoId = 'Vhd6Kc4TZls'
const outputFileName = 'video.mp3'

const downloader = new youtubeMp3Downloader({
  ffmpegPath: process.env.FFMPEG_EXECUTABLE_PATH,
  outputPath: './out',
  youtubeVideoQuality: 'highestaudio',
  queueParallelism: 2,
  progressTimeout: 2000,
  allowWebm: false,
})

downloader.download(videoId, outputFileName)

downloader.on('finished', (err, data) => {
  console.info(JSON.stringify(data))
})

downloader.on('error', (error) => {
  console.error(error)
})

downloader.on('progress', (progress) => {
  console.log(JSON.stringify(progress))
})
