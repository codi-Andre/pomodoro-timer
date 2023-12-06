import { beforeEach, describe, expect, it } from "vitest"
import { Timer } from "../timer"

describe("timer", () => {
  let delayId: number
  const timer = new Timer()

  beforeEach(() => {
    clearTimeout(delayId)
    timer.clear()
  })

  it("should start the timer", async () => {
    const startTime = timer.getTime

    timer.start()

    delayId = await new Promise((r) => setTimeout(r, 100))

    expect(startTime).toBe(0)
    expect(timer.getTime).toBeGreaterThan(startTime)
  })

  it("should stop the timer", async () => {
    const startTime = timer.getTime
    timer.start()

    delayId = await new Promise((r) => setTimeout(r, 100))
    clearTimeout(delayId)

    timer.stop()
    const checkPoint = timer.getTime

    delayId = await new Promise((r) => setTimeout(r, 100))

    expect(startTime).toBeLessThan(timer.getTime)
    expect(timer.getTime).toBe(checkPoint)
  })

  it("should reset the timer", async () => {
    const startTime = timer.getTime
    timer.start()

    delayId = await new Promise((r) => setTimeout(r, 100))
    timer.stop()

    const checkPoint = timer.getTime
    timer.reset()

    expect(startTime).toBeLessThan(checkPoint)
    expect(timer.getTime).toBeLessThan(checkPoint)
  })

  it("should set a target time to the timer", () => {
    const initialTargetTime = timer.targetTime
    const targetTime = 1000

    timer.setTargetTime = targetTime

    expect(timer.targetTime).not.toBe(initialTargetTime)
    expect(timer.targetTime).toBe(targetTime)
  })

  it("should decrease the time", async () => {
    const targetTime = timer.targetTime
    const startTime = timer.getTimeRemaining
    timer.start()

    delayId = await new Promise((r) => setTimeout(r, 100))
    const checkPoint = timer.getTimeRemaining

    expect(startTime).toBe(targetTime)
    expect(startTime).toBeGreaterThan(checkPoint)
  })
})
