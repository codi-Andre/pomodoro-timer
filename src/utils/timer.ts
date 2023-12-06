export class Timer {
  isRunning: boolean
  startTime: number
  overallTime: number
  targetTime: number

  constructor() {
    this.isRunning = false
    this.startTime = 0
    this.overallTime = 0
    this.targetTime = 1000 * 60 * 25
  }

  getTimeElapsedSinceLastStart() {
    if (!this.startTime) {
      return 0
    }

    return Date.now() - this.startTime
  }

  start() {
    if (this.isRunning) {
      return console.error("Timer is already running")
    }

    this.isRunning = true

    this.startTime = Date.now()
  }

  stop() {
    if (!this.isRunning) {
      return console.error("Timer is already stopped")
    }

    this.isRunning = false

    this.overallTime = this.overallTime + this.getTimeElapsedSinceLastStart()
  }

  reset() {
    this.overallTime = 0

    if (this.isRunning) {
      this.startTime = Date.now()
      return
    }

    this.startTime = 0
  }

  clear() {
    this.isRunning = false
    this.overallTime = 0
    this.startTime = 0
    this.targetTime = 1000 * 60 * 25
  }

  set setTargetTime(timeInMs: number) {
    if (timeInMs <= 0) {
      return
    }
    this.targetTime = timeInMs
  }

  get getTime() {
    if (!this.startTime) {
      return 0
    }

    if (this.isRunning) {
      const time = this.overallTime + this.getTimeElapsedSinceLastStart()

      if (time >= this.targetTime) {
        return this.targetTime
      }

      return time
    }

    return this.overallTime
  }

  get getTimeInSec() {
    const oneMinute = 1000 * 60

    return Math.floor((this.getTime % oneMinute) / 1000)
  }

  get getTimeInMin() {
    const oneMinute = 1000 * 60

    return Math.floor(this.getTime / oneMinute)
  }

  get getTimeRemaining() {
    if (!this.startTime) {
      return this.targetTime
    }

    const time = this.targetTime - this.getTime

    if (time <= 0) {
      return 0
    }

    return time
  }

  get getTimeRemainingInSec() {
    const oneMinute = 1000 * 60

    return Math.floor((this.getTimeRemaining % oneMinute) / 1000)
  }

  get getTimeRemainingInMin() {
    const oneMinute = 1000 * 60

    return Math.floor(this.getTimeRemaining / oneMinute)
  }
}
