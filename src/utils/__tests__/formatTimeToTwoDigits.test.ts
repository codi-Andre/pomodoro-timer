import { describe, expect, it } from "vitest"
import { formatTimeToTwoDigits } from "../formatTimeToTwoDigits"

describe("formatTimeToTwoDigits", () => {
  it("should return a string in time format(mm:ss)", () => {
    const values = [
      [17, 23],
      [0, 7],
      [23, 5]
    ]
    const expectedValue = ["17:23", "00:07", "23:05"]

    expect(formatTimeToTwoDigits(values[0])).toBe(expectedValue[0])
    expect(formatTimeToTwoDigits(values[1])).toBe(expectedValue[1])
    expect(formatTimeToTwoDigits(values[2])).toBe(expectedValue[2])
  })
})
