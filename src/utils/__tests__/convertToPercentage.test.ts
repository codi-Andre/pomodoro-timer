import { describe, expect, it } from "vitest"
import { convertToPercentage } from "../convertToPercentage"

describe("convertToPercentage", () => {
  it("should return the percentage equivalent to the value passed", () => {
    const totalValue = 10
    const values = [0, 3, 10]
    const expectedPercentages = [0, 30, 100]

    expect(convertToPercentage(values[0], totalValue)).toBe(
      expectedPercentages[0]
    )
    expect(convertToPercentage(values[1], totalValue)).toBe(
      expectedPercentages[1]
    )
    expect(convertToPercentage(values[2], totalValue)).toBe(
      expectedPercentages[2]
    )
  })
})
