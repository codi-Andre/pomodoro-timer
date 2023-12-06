import { expect, describe, it } from "vitest"
import { calculatePercentage } from "../calculatePercentage"

describe("calculatePercentage", () => {
  it("should return the number equivalent to the percentage of the value passed", () => {
    const value = 10
    const percentages = [0, 50, 100]
    const expectedValues = [0, 5, 10]

    expect(calculatePercentage(percentages[0], value)).toBe(expectedValues[0])
    expect(calculatePercentage(percentages[1], value)).toBe(expectedValues[1])
    expect(calculatePercentage(percentages[2], value)).toBe(expectedValues[2])
  })
})
